#!/usr/bin/env python3
"""
convert_cards.py

Safe helper to convert H2 sections in markdown files into Liquid capture + include
pattern that uses the canonical `card.html` include. Intended to be run in batches
and produce a .bak before changing files.

Usage:
  python tools/convert_cards.py file1.md file2.md ...

Options:
  --dry-run   Print proposed conversions without modifying files

This script is intentionally conservative and only converts top-level H2 (## )
sections. It preserves YAML front matter if present.
"""
import sys
import re
from pathlib import Path


def split_front_matter(text):
    if text.startswith('---'):
        parts = text.split('---', 2)
        if len(parts) >= 3:
            return '---' + parts[1] + '---\n', parts[2]
    return '', text


def convert_content(body_text, dry_run=False):
    # Find H2 headings (lines starting with '## ')
    lines = body_text.splitlines(True)
    out = []
    i = 0
    section_count = 0
    while i < len(lines):
        line = lines[i]
        if line.lstrip().startswith('## '):
            # capture this section
            section_count += 1
            title = line.strip()[3:].strip()
            capture_name = f'section_{section_count}'
            section_lines = [line]
            i += 1
            while i < len(lines) and not lines[i].lstrip().startswith('## '):
                section_lines.append(lines[i]); i += 1

            capture_block = []
            # Use plain strings so Python doesn't try to interpret Liquid braces
            capture_block.append("{% capture " + capture_name + " %}\n")
            capture_block.extend(section_lines)
            capture_block.append("{% endcapture %}\n")
            # include: pass the capture variable as content (keep quotes safe)
            safe_title = title.replace('"', "'")
            include_line = '{% include card.html title="' + safe_title + '" content=' + capture_name + ' classes="checklist-card" %}\n'
            capture_block.append(include_line)
            out.extend(capture_block)
        else:
            out.append(line)
            i += 1

    return ''.join(out), section_count


def main(argv):
    args = argv[1:]
    dry = False
    if '--dry-run' in args:
        dry = True
        args.remove('--dry-run')
    if not args:
        print('Usage: convert_cards.py [--dry-run] file1.md file2.md ...')
        return 1

    for p in args:
        path = Path(p)
        if not path.exists():
            print(f'SKIP (not found): {p}')
            continue
        text = path.read_text(encoding='utf-8')
        fm, body = split_front_matter(text)
        new_body, count = convert_content(body)
        if count == 0:
            print(f'No H2 sections found in {p}, skipping.')
            continue
        new_text = fm + new_body
        if dry:
            print(f'Would convert {p}: {count} sections')
        else:
            bak = path.with_suffix(path.suffix + '.bak')
            path.replace(bak)
            path.write_text(new_text, encoding='utf-8')
            print(f'Converted {p}: {count} sections (backup saved to {bak.name})')

    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
