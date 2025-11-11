# History cleanup plan (BFG / git-filter-repo)

If a secret was accidentally committed and the repository is public, rotate the secret immediately. Then consider removing the secret from git history. Rewriting history is destructive: forks, PRs, and clones will need coordination.

High-level steps (recommended order)
1. ROTATE the exposed secret in the provider console (mandatory).
2. Make a working copy of the repository (mirror clone).
3. Use `git-filter-repo` (recommended) or BFG to remove/replace the secret from history.
4. Force-push the cleaned mirror back to the remote and inform collaborators.

Recommended: git-filter-repo (fast, maintained)

Prerequisites (PowerShell / Windows)
- Python 3.8+ and pip
- Install git-filter-repo: `python -m pip install --user git-filter-repo`

Exact PowerShell commands (replace OWNER/REPO and YOUR_SECRET)
```powershell
# 1) Backup (mirror clone)
git clone --mirror https://github.com/OWNER/REPO.git
cd REPO.git

# 2) Create replacements file (replace the long key below with your actual secret)
$repl = @"AIzaSyBJT8wLAI8EJjW_5fb1RvFA-aFh4jCCkIk==>REDACTED_IN_HISTORY"@
Set-Content -Path .\replacements.txt -Value $repl -Encoding UTF8

# 3) Run git-filter-repo to replace the secret across history
git filter-repo --replace-text replacements.txt

# 4) Push the cleaned repository back (force)
git push --force --all
git push --force --tags
```

Notes & caveats
- Rotating the secret first is mandatory. If you don't rotate, the secret remains valid even if removed from history briefly.
- Force-pushing rewritten history will break forks and open PRs. Coordinate with contributors and consider a maintenance window.
- Some hosting providers (GitHub) will still show cached references in forks; you cannot guarantee complete eradication of all copies.
- If you're uncomfortable rewriting history, at minimum rotate the key and leave a note in repo history explaining the rotation.

Alternative: BFG Repo-Cleaner (Java-based)
- Install Java 8+ and download `bfg.jar` from https://rtyley.github.io/bfg-repo-cleaner/.
- Mirror clone and run:
```powershell
git clone --mirror https://github.com/OWNER/REPO.git
cd REPO.git
java -jar ..\bfg.jar --replace-text ../replacements.txt
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push --force
```

If you'd like, I can produce a custom `replacements.txt` file or a PowerShell script that automates these steps. I will not run these commands in your repo automatically; you must run them locally and coordinate the force-push.
