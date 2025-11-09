---
layout: default
title: Pixel 9 Pro Fold Setup SOP
---

# PIXEL 9 PRO FOLD SETUP SOP (PFS-SOP)

**Date Created**: 2025-11-09  
**Device**: Google Pixel 9 Pro Fold  
**Purpose**: Configure the mobile extension of the Wonky Sprout OS for chaos capture, continuity, and emergency access during Family Structure Mode.

**Philosophy**: The Pixel Fold is NOT a distraction device. It is a structured capture tool and emergency Command Center backup. Every app, every setting, every notification rule exists to support the dual-mode life structure.

---

## 1.0 DEVICE RATIONALE

### Why Pixel 9 Pro Fold?
1. **Google Workspace Native Integration**: Seamless sync with Command Center desktop workflow
2. **Dual Screen = Dual Mode**: Inner screen for focus work, outer screen for quick capture
3. **Android Ecosystem**: Full control over notifications, automation, focus modes
4. **Pixel-Exclusive Features**: Call screening, spam blocking (reduces executive function tax)
5. **Long-Term Updates**: 7 years of OS updates (investment protection)

### Role in WS-OS Ecosystem
- **During Solo Execution Mode**: Minimal interaction, capture tool only
- **During Family Structure Mode**: Full access for chaos capture, weekend planning, emergency work
- **Emergency Access**: Mobile Command Center if desktop fails
- **Continuity**: Bridge between modes (Friday 4 PM transition)

---

## 2.0 INITIAL SETUP PROCEDURE

### Phase 1: Device Initialization (30 minutes)

#### 2.1 Unboxing & Physical Setup
- [ ] Remove device from packaging
- [ ] Inspect for physical damage (Google has excellent return policy)
- [ ] Power on device
- [ ] Complete initial Android setup wizard:
  - Connect to Wi-Fi
  - **Skip** carrier setup (if unlocked)
  - Transfer data: Select "Don't copy" (clean slate approach)
  - Sign in with Google account (primary WS-OS account)
  - Enable biometric security: Fingerprint + Face unlock
  - Set lock screen PIN (6-digit minimum)
  - **Disable** Google Assistant wake word (reduces false triggers)
  - **Skip** all promotional apps/trials

#### 2.2 System Updates (20-30 minutes)
- [ ] Go to Settings → System → System update
- [ ] Download and install all pending updates
- [ ] Restart device
- [ ] Repeat until "System is up to date"

#### 2.3 Display Configuration
- [ ] Settings → Display → Screen timeout → **5 minutes** (balance battery vs. quick access)
- [ ] Settings → Display → Dark theme → **On** (reduces eye strain + battery savings)
- [ ] Settings → Display → Adaptive brightness → **On**
- [ ] Settings → Display → Screen rotation → **On** (auto-rotate enabled)
- [ ] Settings → Display → Font size → **Default** (or adjust for readability)

#### 2.4 Sound & Vibration
- [ ] Settings → Sound & vibration → Do Not Disturb mode → Set schedule:
  - **Solo Mode DND**: Mon-Fri 8:00 AM - 3:30 PM (Core Work Blocks)
  - Allow exceptions: Starred contacts only (emergency family calls)
- [ ] Settings → Sound & vibration → Vibration & haptics → **On**
- [ ] Settings → Sound & vibration → Dial pad tones → **Off** (reduces sensory overwhelm)

---

## 3.0 GOOGLE WORKSPACE INTEGRATION

### 3.1 Google Account Configuration
**Primary Account**: Your main Google Workspace account (already signed in)

#### Sync Settings
- [ ] Settings → Passwords & accounts → [Your Google Account] → Account sync
- [ ] Enable sync for:
  - ✅ Calendar (for mode transitions)
  - ✅ Contacts
  - ✅ Drive (access to all Command Center files)
  - ✅ Gmail
  - ✅ Keep (chaos capture sync)
  - ✅ Tasks (daily planning sync)
  - ❌ Photos (disable - use separate backup strategy)
  - ❌ Play Books/Movies (unnecessary)

#### Google Drive Setup
- [ ] Install Google Drive app (pre-installed)
- [ ] Open Drive app → Settings → Make available offline:
  - Enable for critical folders: `WonkySprout_OS/SOPs_Working`
  - Set offline file limit: **5GB** (emergency access)
- [ ] Enable automatic camera upload: **OFF** (manual control)

### 3.2 Gmail Configuration
- [ ] Open Gmail app
- [ ] Settings → [Your Account] → Notifications:
  - **Primary inbox**: Off (batch processing only)
  - **Social/Promotions**: Off
  - **All mail**: Off
- [ ] Settings → [Your Account] → Inbox type: **Default** (Priority Inbox alternative if preferred)
- [ ] Settings → General → Conversation view: **On** (reduces visual clutter)

### 3.3 Google Calendar Setup
- [ ] Open Calendar app
- [ ] Settings → Events from Gmail: **Off** (reduces noise)
- [ ] Settings → [Your Calendar] → Notifications:
  - **Mode Transition Events**: Notification **30 minutes before**
  - **Core Work Blocks**: Notification **5 minutes before**
  - All other events: **Off** or **Email only**
- [ ] Create recurring calendar events (if not already created):
  - Solo Execution Mode: Mon 6PM - Fri 4PM (recurring weekly)
  - Family Structure Mode: Fri 4PM - Mon 6PM (recurring weekly)
  - Core Work Block 1: Mon-Fri 8AM-12PM
  - Core Work Block 2: Mon-Fri 12:30PM-3:30PM

### 3.4 Google Keep Configuration
- [ ] Install Google Keep (if not pre-installed)
- [ ] Open Keep → Settings:
  - Enable sharing: **Off** (personal capture only)
  - Reminders: **Location-based off**, **Time-based on**
- [ ] Create label structure:
  - `#chaos` (default capture label)
  - `#dailydump` (for processing)
  - `#projects` (for project-specific captures)
  - `#family` (for Family Structure Mode items)
- [ ] Pin note: "DAILY DUMP PROTOCOL: Process to NotebookLM at 5 PM"

### 3.5 Google Tasks Integration
- [ ] Install Google Tasks (if not pre-installed)
- [ ] Open Tasks → Settings:
  - Default list: **My Tasks**
  - Move completed tasks: **Never** (manual archive during Weekly Review)
- [ ] Sync test: Create test task on phone, verify appears in desktop Chrome sidebar

---

## 4.0 APP INSTALLATION & CONFIGURATION

### 4.1 Essential Apps (Tier 1)

#### Chrome Browser
- [ ] Pre-installed ✅
- [ ] Sign in to sync bookmarks, passwords, extensions (desktop parity)
- [ ] Settings → Privacy and security → Clear browsing data on exit: **Off**
- [ ] Settings → Accessibility → Force enable zoom: **On** (for small text)
- [ ] Settings → Homepage: Set to `about:blank` (reduces distraction)
- [ ] Install extensions (Chrome mobile supports limited extensions):
  - uBlock Origin (ad blocking)
  - Dark Reader (if not using system dark mode)

#### GitHub Mobile
- [ ] Install from Play Store
- [ ] Sign in with GitHub account
- [ ] Enable notifications: **Only for mentions and direct messages**
- [ ] Purpose: Monitor WS-OS repository pushes, emergency edits
- [ ] Add repository: `classicwilly/classicwilly.github.io`
- [ ] Enable "Watch" for all activity

#### Obsidian (Alternative to NotebookLM Mobile)
- [ ] Install from Play Store
- [ ] Configure sync with Google Drive:
  - Vault location: `Google Drive/WonkySprout_OS/ObsidianVault`
- [ ] Purpose: Markdown editing, SOP access on mobile
- [ ] Install community plugins:
  - Templater (for SOP templates)
  - Calendar (for daily notes)
- [ ] **Note**: NotebookLM has limited mobile functionality; Obsidian provides full markdown editing

#### Termux (Optional - Advanced)
- [ ] Install from F-Droid (not Play Store - outdated version)
- [ ] Purpose: Mobile terminal access, Git operations, emergency Jekyll preview
- [ ] Initial setup:
  ```bash
  pkg update && pkg upgrade
  pkg install git ruby
  gem install jekyll bundler
  ```
- [ ] Use case: Emergency blog post publishing from mobile

### 4.2 Productivity Apps (Tier 2)

#### Pomodoro Timer
- [ ] Install: **Forest** or **Focus To-Do** (Google Play Store)
- [ ] Configure: 25-minute focus / 5-minute break
- [ ] Purpose: Maintain Pomodoro structure during mobile work sessions
- [ ] Sync with Google Tasks (if supported by chosen app)

#### Voice Recorder (Native)
- [ ] Pre-installed: Google Recorder ✅
- [ ] Settings → Transcription: **Enable**
- [ ] Settings → Backup: **Automatic to Google Drive**
- [ ] Purpose: Backup for Anker Soundcore AI Recorder (if battery fails)

#### Password Manager
- [ ] Use Google Password Manager (built-in) OR
- [ ] Install Bitwarden (open-source, self-hosted option)
- [ ] Purpose: Secure password access for Command Center parity

### 4.3 Communication Apps (Minimal)

#### Phone & Messages (Native)
- [ ] Pre-installed ✅
- [ ] Settings → Spam and call screen → Filter spam calls: **On**
- [ ] Settings → Spam and call screen → Screen unknown callers: **On** (Pixel exclusive)
- [ ] Purpose: Reduces executive function tax from spam calls

#### Signal (Private Messaging)
- [ ] Install from Play Store (if needed for specific contacts)
- [ ] Settings → Notifications → Message notifications: **On**
- [ ] Settings → Notifications → Call notifications: **On**
- [ ] Mute all group chats except critical family groups

#### Slack/Discord (Work/Community)
- [ ] Install ONLY if required for work
- [ ] Settings → Notifications → **Mentions only**
- [ ] Settings → Do Not Disturb: Sync with system DND schedule
- [ ] Purpose: Async communication only, never real-time during Solo Mode

---

## 5.0 FOCUS MODE CONFIGURATION

### 5.1 Create Custom Focus Modes

#### Focus Mode 1: Solo Execution (Deep Work)
- [ ] Settings → Digital Wellbeing → Focus mode → Create new schedule
- [ ] Name: **Solo Execution Mode**
- [ ] Schedule: Mon-Fri 8:00 AM - 3:30 PM (Core Work Blocks)
- [ ] Block these apps:
  - All social media (if installed)
  - YouTube
  - Games
  - News apps
  - Email (check via browser only)
- [ ] Allow these apps:
  - Phone (starred contacts only)
  - Messages (starred contacts only)
  - Google Keep (capture only)
  - Google Tasks
  - Chrome (work-related only)
  - Calendar (for transition reminders)

#### Focus Mode 2: Family Structure Mode
- [ ] Settings → Digital Wellbeing → Focus mode → Create new schedule
- [ ] Name: **Family Time**
- [ ] Schedule: Fri 4:00 PM - Mon 6:00 PM (Weekend mode)
- [ ] Block these apps:
  - Work-related apps (Slack, GitHub, Obsidian)
  - Social media (reduces comparison/distraction)
- [ ] Allow these apps:
  - Phone, Messages (full access)
  - Camera (family photos)
  - Google Keep (chaos capture)
  - Maps (family outings)
  - Calendar (weekend schedule)

### 5.2 Screen Time Limits (Optional but Recommended)
- [ ] Settings → Digital Wellbeing → Dashboard
- [ ] Set app timers:
  - Chrome: **2 hours/day** (forces intentional use)
  - YouTube: **30 minutes/day** (if installed)
  - All other entertainment: **15 minutes/day**
- [ ] Purpose: Prevents phone from becoming distraction device

---

## 6.0 HOME SCREEN OPTIMIZATION

### 6.1 Outer Screen (Quick Capture Layout)
**Philosophy**: Outer screen = chaos capture tool. No social media, no distractions.

**Top Row (Dock)**:
- Phone
- Messages
- Camera
- Chrome

**Main Screen - Widget Layout**:
- **Row 1**: Google Keep widget (4×2) - Quick note creation
- **Row 2**: Google Tasks widget (4×2) - View daily 3 critical tasks
- **Row 3**: Calendar widget (4×1) - Next event preview
- **Row 4**: Empty (intentional white space)

**App Drawer Access**: Swipe up (all other apps hidden in drawer)

### 6.2 Inner Screen (Work Layout)
**Philosophy**: Inner screen = mobile Command Center. Split-screen capable for deep work.

**Left Panel (When Folded Open)**:
- **Row 1**: Google Keep icon
- **Row 2**: Google Tasks icon
- **Row 3**: Obsidian icon
- **Row 4**: GitHub icon
- **Row 5**: Chrome icon

**Right Panel**: 
- Google Calendar widget (4×4) - Week view
- Drive widget (4×2) - Recent files

**Bottom Dock**:
- Gmail (for batch processing)
- Files app
- Settings
- Google Drive

### 6.3 Wallpaper Selection
- [ ] Use dark, minimal wallpaper (reduces visual distraction)
- [ ] Avoid bright colors or busy patterns (sensory overwhelm)
- [ ] Recommendation: Solid dark gray (#1a1a1a) or subtle gradient

---

## 7.0 NOTIFICATION MANAGEMENT

### 7.1 Notification Hierarchy
**Critical (Always Show)**:
- Phone calls from starred contacts
- Messages from starred contacts
- Calendar reminders (mode transitions)

**Important (Show During Family Mode Only)**:
- GitHub push notifications
- Gmail (important category only)

**Low Priority (Badge Only, No Sound/Vibration)**:
- App updates
- Google Drive sync status
- Non-critical system notifications

**Blocked (Never Show)**:
- All promotional notifications
- Social media (if apps installed)
- News apps
- Games

### 7.2 Configuration Steps
- [ ] Settings → Apps → See all apps → [For Each App]:
  - Tap app → Notifications → Configure per hierarchy above
- [ ] Settings → Notifications → Notification history: **On** (can review missed)
- [ ] Settings → Notifications → Sensitive notifications: **Hide** (privacy on lock screen)

---

## 8.0 SECURITY & PRIVACY

### 8.1 Lock Screen & Biometrics
- [ ] Settings → Security → Screen lock → PIN + Fingerprint + Face unlock
- [ ] Settings → Security → Smart Lock: **Off** (reduces security risk)
- [ ] Settings → Security → Lock screen preferences:
  - Show sensitive content: **Only when unlocked**
  - Wake screen for notifications: **Off** (reduces battery drain)

### 8.2 App Permissions Audit
- [ ] Settings → Privacy → Permission manager
- [ ] Review each permission category:
  - **Location**: Only Maps, Camera (for geotagging)
  - **Camera**: Only Camera app, Keep (for document scanning)
  - **Microphone**: Only Phone, Recorder, Keep (voice notes)
  - **Contacts**: Only Phone, Messages, Gmail
  - **Storage**: Only essential apps (Drive, Keep, Obsidian)
- [ ] Deny all other permission requests by default

### 8.3 Backup Configuration
- [ ] Settings → System → Backup → Back up to Google Drive: **On**
- [ ] Backup frequency: **Daily** (automatic)
- [ ] Include:
  - ✅ Apps and app data
  - ✅ Call history
  - ✅ Device settings
  - ✅ SMS messages
  - ❌ Photos/videos (use separate strategy)

---

## 9.0 BATTERY OPTIMIZATION

### 9.1 Adaptive Battery
- [ ] Settings → Battery → Adaptive Battery: **On**
- [ ] Settings → Battery → Battery Saver: **Turn on automatically at 20%**
- [ ] Settings → Battery → Battery usage: Review heavy apps weekly

### 9.2 App Standby
- [ ] Settings → Apps → See all apps → [For Each Non-Essential App]:
  - Tap app → Battery → Background restriction: **Restricted**
- [ ] Exempt from restriction:
  - Google Keep (chaos capture)
  - Google Tasks
  - Calendar
  - Phone, Messages

### 9.3 Display Battery Savings
- [ ] Settings → Display → Adaptive brightness: **On**
- [ ] Settings → Display → Screen timeout: **5 minutes**
- [ ] Settings → Display → Smooth Display (120Hz): **On** (worth the battery trade-off for usability)

---

## 10.0 CHAOS CAPTURE WORKFLOW (MOBILE)

### 10.1 Voice Capture Protocol
**Scenario**: Idea strikes while away from Command Center

1. **Quick Capture (Outer Screen)**:
   - Pull down notification shade → Tap Keep widget "New voice note"
   - Speak idea (auto-transcribed)
   - Keep opens → Auto-saves to `#chaos` label
   - Close phone

2. **Visual Capture (Document/Whiteboard)**:
   - Open Keep → Camera icon → Capture image
   - Keep applies OCR (extracts text from image)
   - Add `#chaos` label
   - Close app

3. **Link/URL Capture**:
   - Open Chrome → Find article/resource
   - Share button → Google Keep
   - Keep saves URL + page snapshot
   - Add `#chaos` label

### 10.2 Daily Dump Protocol (Mobile Edition)
**Scenario**: Away from Command Center during 5 PM Daily Dump time

1. Open Google Keep
2. Filter by `#chaos` label
3. For each note:
   - **Process**: Read and categorize
   - **Action**: Add to Google Tasks (if actionable)
   - **Archive**: Remove `#chaos` label, add `#processed`
   - **File**: Share to Obsidian for permanent filing (if significant)
4. Sync verification: Open Chrome → NotebookLM → Verify captures appear

---

## 11.0 EMERGENCY COMMAND CENTER MODE

### 11.1 When to Activate
- Desktop computer failure
- Power outage at home
- Away from Command Center but critical work needed
- Family Structure Mode but urgent Solo Mode task

### 11.2 Mobile Command Center Setup
**Inner Screen Split-Screen Configuration**:

1. **Left Panel**: Chrome (GitHub Pages site preview or NotebookLM)
2. **Right Panel**: Obsidian (SOP editing) OR GitHub app (code review)

**How to Activate**:
- [ ] Open first app (e.g., Chrome)
- [ ] Swipe up from bottom (recent apps)
- [ ] Tap second app icon → "Open in split screen"
- [ ] Adjust split ratio: 50/50 or 60/40 depending on task

### 11.3 Emergency Publishing Workflow
**Scenario**: Must publish blog post from mobile

1. Open Termux
2. Navigate to local Git repo (if cloned):
   ```bash
   cd ~/storage/shared/WonkySprout_OS
   git pull origin main
   ```
3. Create new post file:
   ```bash
   nano _posts/2025-11-09-emergency-post.md
   ```
4. Write content (or paste from Keep/Obsidian)
5. Commit and push:
   ```bash
   git add .
   git commit -m "Emergency post from mobile"
   git push origin main
   ```
6. Verify on GitHub app (Actions tab for build status)

**Alternative (No Termux)**:
- Use GitHub app → Repository → Create file directly on GitHub
- Less ideal (no local preview) but functional

---

## 12.0 MAINTENANCE PROTOCOLS

### 12.1 Daily (2 minutes)
- [ ] Check battery level at 5 PM (charge overnight if <40%)
- [ ] Clear notification shade (mark all as read)
- [ ] Verify Google Drive sync status (Wi-Fi sync check)

### 12.2 Weekly (During Weekly Review Protocol)
- [ ] Settings → Battery → Battery usage → Review top apps
- [ ] Settings → Storage → Free up space (delete cached data)
- [ ] Settings → Apps → Recently opened → Close unused apps
- [ ] Google Keep → Archive all `#processed` notes
- [ ] Google Tasks → Archive completed tasks

### 12.3 Monthly
- [ ] System update check (Settings → System → System update)
- [ ] App update check (Play Store → Manage apps & device → Update all)
- [ ] Review app permissions (Settings → Privacy → Permission manager)
- [ ] Backup verification (Settings → System → Backup → Check last backup)
- [ ] Physical device cleaning (microfiber cloth, screen/hinge)

---

## 13.0 TROUBLESHOOTING

### Issue: Google Keep Not Syncing
**Diagnosis**: Network issue or sync disabled
**Fix**:
1. Check Wi-Fi/data connection
2. Open Keep → Menu → Settings → Sync → Force sync
3. If still failing: Settings → Accounts → Google → Account sync → Toggle Keep off/on

### Issue: Battery Draining Fast
**Diagnosis**: Background app or connectivity issue
**Fix**:
1. Settings → Battery → Battery usage → Identify culprit app
2. Settings → Apps → [Culprit App] → Force stop
3. Settings → Apps → [Culprit App] → Battery → Restricted
4. Check for rogue location access (common battery drain)

### Issue: Notifications Not Appearing
**Diagnosis**: Focus Mode or DND blocking
**Fix**:
1. Pull down notification shade → Check Focus Mode status
2. Settings → Digital Wellbeing → Focus mode → Review schedule
3. Settings → Sound & vibration → Do Not Disturb → Review exceptions

### Issue: Inner Screen Not Responding
**Diagnosis**: Software glitch (rare on Pixel)
**Fix**:
1. Force restart: Hold Power + Volume Up for 10 seconds
2. If persistent: Settings → System → Reset options → Reset app preferences
3. Contact Google Support (excellent Pixel warranty)

### Issue: Can't Access GitHub Repository
**Diagnosis**: Authentication expired
**Fix**:
1. GitHub app → Settings → Sign out
2. Sign back in (use password manager)
3. Grant repository access permissions
4. If using Termux: Regenerate SSH key and add to GitHub

---

## 14.0 FOLD-SPECIFIC CONSIDERATIONS

### 14.1 Hinge Care
- **Never force open/close**: Use gentle pressure
- **Avoid debris**: Keep hinge area clean (compressed air monthly)
- **Case selection**: Use Google's official case (protects hinge mechanism)
- **Screen protector**: Pre-installed on inner screen (DO NOT REMOVE)

### 14.2 App Continuity
- **Seamless transition**: Apps resume when switching outer → inner screen
- **Split-screen persistence**: Layout remembered per app pair
- **Taskbar (inner screen)**: Pin essential apps for quick multitasking

### 14.3 Outer Screen vs Inner Screen Decision Matrix
| Task | Screen | Rationale |
|------|--------|-----------|
| Quick capture (voice, text) | Outer | Faster access, one-handed |
| Reading SOPs | Inner | Larger text, less scrolling |
| Email batch processing | Inner | Split-screen (inbox + message) |
| Emergency calls | Outer | Immediate access |
| Document editing (Obsidian) | Inner | Keyboard support, split view |
| GitHub code review | Inner | Wide view for diffs |

---

## 15.0 INTEGRATION WITH COMMAND CENTER

### 15.1 Daily Sync Points
1. **Morning (6:30 AM)**: Check phone for overnight captures → Transfer to desktop Keep
2. **Midday (12:00 PM)**: Quick sync check (Drive, Keep, Tasks)
3. **Evening (5:00 PM)**: Daily Dump Protocol (mobile backup if away from desk)
4. **Night (9:00 PM)**: Final Keep review before Sleep Anchor Protocol

### 15.2 Mode Transition Protocol
**Friday 4:00 PM (Solo → Family)**:
- [ ] Disable Focus Mode (Solo Execution)
- [ ] Enable Focus Mode (Family Time)
- [ ] Open Google Keep → Review weekend family tasks
- [ ] Open Calendar → Review weekend schedule
- [ ] Charge phone to 100% (weekend readiness)

**Monday 6:00 PM (Family → Solo)**:
- [ ] Disable Focus Mode (Family Time)
- [ ] Process all weekend captures (Keep → NotebookLM)
- [ ] Enable Focus Mode (Solo Execution) for next morning
- [ ] Sync all Google Workspace apps (Drive, Tasks, Calendar)

---

## 16.0 BUDGET & PROCUREMENT

### Device Cost
- **Pixel 9 Pro Fold**: $1,799 (Google Store, unlocked)
- **Alternative**: Pixel 8 Pro Fold refurbished: $1,200-$1,400
- **Where to Buy**:
  1. Google Store (direct, best support)
  2. Amazon (if Prime member, easy returns)
  3. Swappa (certified pre-owned marketplace)

### Accessories (Optional)
| Item | Cost | Priority |
|------|------|----------|
| Google Pixel Fold Case | $79 | MUST HAVE |
| USB-C charging cable (extra) | $15-25 | Recommended |
| Portable battery pack (20,000mAh) | $40-60 | Optional |
| Screen protector (outer screen) | $15-25 | Optional |
| **TOTAL** | **$149-$189** | |

### Cellular Plan Considerations
- **Recommend**: Google Fi (native integration, international support)
- **Alternative**: Mint Mobile (budget option, $15-30/month)
- **Data needs**: 5-10GB/month (mostly Wi-Fi at Command Center)

---

## 17.0 RELATED FILES

**Core Protocols**:
- `2025-11-08_M4_SOP_foundational-daily-protocols.md` - Daily Dump Protocol includes mobile
- `2025-11-08_M4_SOP_solo-execution-mode.md` - Focus Mode scheduling reference
- `2025-11-08_M4_SOP_family-structure-mode.md` - Weekend mobile usage patterns
- `2025-11-09_M4_SOP_command-center-setup.md` - Desktop integration requirements

**System Documentation**:
- `2025-11-08_M4_CONFIG_readme-master-sop.md` - Mobile OS section

---

## 18.0 NOTES

**Last Updated**: 2025-11-09  
**Status**: ACTIVE - Ready for deployment  
**Device**: Google Pixel 9 Pro Fold (2024 model)

**Key Principle**: The Pixel Fold is a tool, not a toy. It extends the Command Center into your pocket. Every setting, every app, every notification rule serves the dual-mode life structure. Chaos capture → Google Workspace → Command Center processing. This is the loop.

**Anti-BS Check**: If you find yourself scrolling social media on this device, you've violated the setup protocol. This is a neurodivergent-optimized capture tool. Treat it as such.

**Wonky Sprout Philosophy**: The outer screen is the "Wonky" (quick, chaotic capture). The inner screen is the "Sprout" (structured, organized work). Together, they maintain continuity across all life modes.

**Setup Time Estimate**: 2-3 hours for complete configuration (excluding data migration).
