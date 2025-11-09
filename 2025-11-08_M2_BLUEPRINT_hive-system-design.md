---
layout: default
title: The Hive System - Design Blueprint
---

# THE HIVE SYSTEM

**Modular hexagonal organization for neurodivergent workspaces.**

---

## DESIGN PHILOSOPHY (THE 3 QUESTIONS)

### 1. WHO IS THIS FOR?

**Neurodivergent makers with tactile/visual processing needs.**

Target user:
- ADHD/autistic professionals who lose things in drawers
- Makers with hands-on hobbies (3D printing, electronics, crafts)
- Visual thinkers who need to *see* their inventory to remember it exists
- People with executive dysfunction who can't handle "out of sight = out of mind"

**Core need:** Physical organization that works like brain organization - modular, visible, reconfigurable.

---

### 2. WHAT DO THEY NEED?

**A tactile, visual, modular storage system that adapts to changing projects.**

#### Functional Requirements:
1. **Visual inventory** - See everything at a glance, no hidden drawers
2. **Modular expansion** - Start small, grow as needed, rearrange without waste
3. **Tactile satisfaction** - Hexagons tessellate (brain likes patterns), snap/stack feedback
4. **Low executive function deployment** - Dead simple assembly, no complex instructions
5. **Project-based grouping** - Organize by current work, not by arbitrary categories

#### Anti-Requirements (What it's NOT):
- ❌ Not a minimalist aesthetic piece (function > form)
- ❌ Not permanent built-ins (must be portable/reconfigurable)
- ❌ Not opaque containers (must see contents without opening)

---

### 3. HOW WILL THEY USE IT?

**Desktop/workbench deployment in active project environments.**

#### Use Cases:

**Use Case 1: Electronics Workbench**
- User: Tinkering with Arduino project
- Problem: Resistors, jumper wires, ICs scattered across desk
- Solution: 3-6 hexagon modules, each holding one component type, arranged in honeycomb pattern within arm's reach
- Benefit: Grab component without searching, visual scan = instant location

**Use Case 2: 3D Printing Workflow**
- User: Managing multiple filament spools, tools, small parts
- Problem: Filament tangles, tools mixed with random screws
- Solution: Large hex modules for filament spools (vertical storage), small hex modules for tools/hardware
- Benefit: Each project gets its own "hive cell", easy to move entire set to printer

**Use Case 3: Daily Desk Items**
- User: Needs pens, sticky notes, USB drives accessible but contained
- Problem: Drawer = black hole, cup = cluttered mess
- Solution: Shallow hex tray modules, one item type per cell
- Benefit: "Pen goes in pen hex" = clear rule, no decision fatigue

---

## PROTOTYPE DESIGN SPECIFICATIONS

### Core Module: Standard Hexagon

**Dimensions:**
- **Edge-to-edge diameter:** 100mm (4 inches) - fits standard desktop grid
- **Wall height options:** 30mm (shallow), 60mm (medium), 100mm (deep)
- **Wall thickness:** 2mm (3D printable on standard FDM)
- **Base thickness:** 1.5mm (allows stacking without tipping)

**Features:**
- **Interlocking edges:** 2mm tongue/groove on each hexagon side for snap-together assembly
- **Stackable design:** Recessed top edge allows modules to nest (save vertical space)
- **Labeling surface:** Flat outer wall face for label tape or dry-erase marker
- **Optional base:** Magnetic base insert (holds metal components) or cork base (tool cushion)

### Size Variants:

**Mini Hex:** 50mm edge-to-edge
- Use: Small hardware (screws, resistors, beads)
- Ratio: 3 mini = 1 standard footprint

**Maxi Hex:** 150mm edge-to-edge  
- Use: Filament spools, larger tools, cable bundles
- Ratio: 1 maxi = 3 standard footprint

**Tall Hex:** Standard 100mm base, 150mm height
- Use: Vertical tool storage (screwdrivers, pens standing upright)

---

## BILL OF MATERIALS (Per Standard Module)

### 3D Printed Version:

**Filament Requirements:**
- **Material:** PLA (rigid, cheap) or PETG (flexible, durable)
- **Amount per module:** ~25g filament
- **Print time:** 2-3 hours per module (0.2mm layer height, 20% infill)
- **Supports:** None required (designed for printability)

**Hardware (Optional Upgrades):**
- **Magnetic base inserts:** 10mm diameter x 2mm neodymium magnets (qty: 3 per module) - $0.50/module
- **Cork pads:** Adhesive cork circles, 5mm thick (qty: 1 per module) - $0.25/module
- **Label tape:** Brother P-touch compatible, 12mm width - $15/roll (labels ~100 modules)

**Cost per module:**
- Base (PLA only): $0.50
- With magnets: $1.00
- With cork + label: $1.25

**Total for starter set (6 modules):** $6-$8

---

### Cardboard Prototype Version (No 3D Printer):

**Materials:**
- Cardboard (cereal box weight): Free from recycling
- Hot glue gun + sticks: $10 (reusable)
- Ruler + pencil: $3
- Craft knife: $5

**Hexagon Template:**
- Print 100mm hexagon template (included in design files)
- Trace onto cardboard, cut 6 walls + 1 base per module
- Hot glue edges together
- Total cost: ~$0.10/module (after initial tool investment)

**Purpose:** Validate sizing and layout before committing to 3D printing.

---

## BUILD INSTRUCTIONS (3D Printed Version)

### Step 1: Download STL Files
- `hive-hex-standard-30mm.stl` (shallow)
- `hive-hex-standard-60mm.stl` (medium)
- `hive-hex-standard-100mm.stl` (deep)
- `hive-hex-mini-30mm.stl`
- `hive-hex-maxi-60mm.stl`

**Repository:** [GitHub link to STL files - TBD]

---

### Step 2: Slice for Your Printer

**Recommended Slicer Settings (Cura/PrusaSlicer):**
- **Layer height:** 0.2mm (balance speed/quality)
- **Infill:** 20% (strong enough, uses less filament)
- **Infill pattern:** Gyroid (strongest for walls)
- **Wall line count:** 3 (sturdy walls)
- **Top/bottom layers:** 4
- **Print speed:** 50mm/s
- **Supports:** None needed
- **Build plate adhesion:** Brim (8mm) for large modules

**Orientation:** Print with base flat on bed, walls pointing up.

---

### Step 3: Print & Post-Process

1. **Print modules** (2-3 hours each)
2. **Remove brim** with craft knife
3. **Test fit interlocks** - should snap together with light pressure
4. **Sand edges** (optional) - 220 grit sandpaper on interlock tongues if too tight
5. **Add magnets** (optional):
   - Insert magnets into base recesses (press fit or glue)
   - Ensure polarity alignment (all North up or all South up)

---

### Step 4: Assemble Your Hive

**Layout Planning:**
1. Group modules by project/category
2. Arrange in honeycomb pattern on desk
3. Snap interlocking edges together (creates stable grid)
4. Label each module with contents (Brother P-touch or permanent marker)

**Reconfiguration:**
- Pull modules apart (gentle twist if tight)
- Rearrange for new project
- Snap back together in new pattern

---

## USAGE PROTOCOLS

### Protocol 1: Project Hive Setup

**When starting a new project:**
1. Identify all components/tools needed
2. Allocate 1 hex module per component type (resistors get 1 hex, capacitors get 1 hex, etc.)
3. Arrange modules in arm's reach of work area
4. Label each module clearly
5. Work session complete → modules stay assembled, move entire hive to shelf if needed

**Benefit:** Next session = grab hive cluster, return to work immediately. No re-gathering components.

---

### Protocol 2: Hive Maintenance

**Weekly review (5 minutes):**
1. Empty modules with mixed contents (sort back into correct hex)
2. Relabel any faded labels
3. Retire unused modules to storage
4. Add new modules for emerging needs

**Benefit:** System stays clean without daily maintenance burden.

---

### Protocol 3: Emergency Hive Reset

**When system has collapsed into chaos:**
1. Dump all desk contents into one large container
2. Sort into piles by type (all pens together, all screws together, etc.)
3. Assign 1 hex per pile
4. Label immediately
5. Reassemble hive

**Time:** 15-30 minutes. Faster than searching for lost items all week.

---

## EXPANSION ROADMAP

### Phase 1: Core Modules (Current)
- Standard hex in 3 heights
- Mini/maxi variants
- Basic 3D printable design

### Phase 2: Specialty Modules (Future)
- **Drawer hex:** Sliding drawer insert for small parts
- **Lid hex:** Snap-on clear lid for dust protection
- **Divider hex:** Internal walls create 3-6 sub-compartments
- **Tool clip hex:** Internal clips hold screwdrivers/pens vertically

### Phase 3: Hive Ecosystem (Future Product)
- **Wall-mount version:** Hexagons mount to pegboard/wall
- **Portable hive case:** Carry 12 modules in foam-padded case
- **Digital catalog:** App to track which module holds what (photo + label sync)

---

## DESIGN RATIONALE (Why Hexagons?)

**Visual:** Honeycomb pattern is neurologically satisfying (brain recognizes pattern instantly)  
**Functional:** 6-sided tessellation = maximum edge connections, stable without gaps  
**Modular:** Any hex can connect to any other hex, infinite reconfiguration  
**Efficient:** Uses less material than square containers for same volume  
**Symbolic:** Hive = organized productivity, collective system working together

---

## NEXT STEPS

### To Build Your First Hive:
1. **Download STL files** (link TBD - upload to GitHub)
2. **Print 6 standard modules** (mix of heights based on your needs)
3. **Sort your current desk chaos** into 6 categories
4. **Assemble hive** and label each module
5. **Use for 1 week**, then adjust module count/sizes as needed

### To Provide Feedback:
- Email classicwilly with photos of your hive setup
- Report: What worked? What broke? What's missing?
- Help refine design for community release

---

**[Back to Home](/) | [View All Products](catalog) | [Service: Fix-It Blueprint](fix)**
