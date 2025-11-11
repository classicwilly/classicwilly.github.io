---
layout: default
title: Context Switching Recovery Protocol
---

# CONTEXT SWITCHING RECOVERY PROTOCOL (IPI-CSR)

**Trigger**: You are forced to switch contexts mid-task due to interruption, emergency, or mode transition. You need to handle the interrupt without losing your place or your progress.

**Purpose**: This protocol captures your current cognitive state, handles the interruption cleanly, and restores your previous context with minimal cognitive load and zero lost work.

**Classification**: Immediate Problem Instruction (IPI) - Execute as soon as interruption occurs.

---

## RECOGNITION SIGNALS

You need this protocol when:

<div class="interactive-checklist"><label class="form-checkbox-group"><input type="checkbox"><span>Someone interrupts you during deep work (knock on door, phone call, "quick question")</span></label><label class="form-checkbox-group"><input type="checkbox"><span>An emergency requires immediate attention (child hurt, system alert, urgent email)</span></label><label class="form-checkbox-group"><input type="checkbox"><span>You must switch between Solo and Family modes mid-task</span></label><label class="form-checkbox-group"><input type="checkbox"><span>A meeting/appointment starts while you're mid-flow on a task</span></label><label class="form-checkbox-group"><input type="checkbox"><span>You realize you forgot something critical and must context-switch NOW</span></label><label class="form-checkbox-group"><input type="checkbox"><span>Technical failure forces you to abandon current task (computer crash, power outage)</span></label></div>

**If ANY signal present: Execute this protocol before addressing the interrupt.**

---

## THE COST OF CONTEXT SWITCHING

**Why this matters**:
- **15-23 minutes**: Average time to return to full focus after interruption (UC Irvine study)
- **Cognitive residue**: Your brain keeps processing the previous task, reducing capacity for the new task
- **Lost progress**: Without capture, you forget where you were and what you were thinking
- **Stress cascade**: Interruption + lost work = frustration = degraded executive function

**This protocol minimizes that cost.**

---

## PHASE 1: IMMEDIATE CAPTURE (30-90 Seconds)

**Purpose**: Capture your cognitive state before the interrupt erases it.

### Step 1: STOP and Freeze (5 seconds)
- **Action**: When interrupt occurs, hold up one finger (physical "wait" signal) and say:
  - To person: "Give me 30 seconds to save my work"
  - To yourself: "Capture first, then switch"
- **Why**: Buys you time to capture. Most people will wait 30 seconds if you ask.
- **Non-Negotiable**: Do NOT switch context before capturing

### Step 2: Active Task Capture (20 seconds)
- **Action**: Open your Capture tool (Soundcore AI Recorder or Google Keep) and record:
  ```
  "Interrupted on [TASK NAME].
   Currently: [EXACT ACTION YOU WERE DOING].
   Next: [WHAT YOU WERE ABOUT TO DO NEXT].
   Thought: [ANY IMPORTANT THOUGHT IN YOUR HEAD RIGHT NOW]."
  ```
- **Example**:
  ```
  "Interrupted on client report.
   Currently: Writing section 3, paragraph about Q4 metrics.
   Next: Add the revenue chart from spreadsheet.
   Thought: Need to check if November data is finalized."
  ```
- **Why**: Your working memory will be overwritten. Externalize it immediately.
- **Tool**: Soundcore AI Recorder (fastest) or Google Keep (if typing is faster)

### Step 3: Screen State Capture (10 seconds)
- **Action**: Take a screenshot of your current screen OR leave the window/file open
  - **If using multiple windows**: Take screenshot (Win + Shift + S)
  - **If using one window**: Leave it open, minimize if needed for interrupt
- **Why**: Visual memory fades. Screenshot preserves exact context.
- **Tool**: Windows Snipping Tool (Win + Shift + S), save to Desktop

### Step 4: Save All Work (10 seconds)
- **Action**: 
  - Hit Ctrl+S on all open files
  - If browser-based: Ensure auto-save is active or manually save
  - If coding: Commit current changes (even if incomplete)
- **Why**: Interrupts can turn into longer diversions. Protect your work.

### Step 5: Time Stamp (5 seconds)
- **Action**: Note the current time (look at clock) and say it out loud or write it down
- **Why**: Knowing how long you've been interrupted helps you protect your time
- **Tool**: Glance at phone/computer clock

**Total Phase 1 Time: 30-60 seconds**

---

## PHASE 2: INTERRUPT HANDLING (Variable Duration)

**Purpose**: Address the interrupt efficiently and protect your return to the original task.

### Step 6: Interrupt Triage (10 seconds)
- **Question**: "Is this a true emergency or can it wait?"
- **True Emergency**: Life/safety risk, child needs immediate help, system failure, urgent deadline
- **Can Wait**: "Quick question," non-urgent email, routine task, low-stakes request

**If TRUE EMERGENCY**: Proceed to Step 7
**If CAN WAIT**: Execute Defer Protocol (Step 7-Alt)

### Step 7: Emergency Execution
- **Action**: Address the interrupt fully and completely
- **Time Protection**: If interrupt will take longer than 10 minutes, inform the interrupter:
  - "This will take me [X minutes]. I need to finish by [TIME] to return to my priority task."
- **Bubble Shield**: If interrupt requires extended focus, deploy Bubble Shield Profile 2.0 (Transparency 5, Vol 10%) to maintain some awareness while focusing on interrupt

### Step 7-Alt: Defer Protocol (Non-Emergency)
- **Action**: Use one of these defer scripts:
  - **For people**: "I'm mid-task right now. Can I get back to you in [15/30/60 minutes]?"
  - **For yourself**: "This is not urgent. Capture it and handle during next task-switching window."
- **Capture Deferred Task**:
  - Add to Google Tasks with time estimate
  - Tag as "Deferred from [ORIGINAL TASK]"
  - Set reminder for next natural break point (end of work block, after meeting, etc.)
- **Return to Phase 3**: If successfully deferred, skip to Phase 3 immediately

---

## PHASE 3: CONTEXT RELOAD (2-5 Minutes)

**Purpose**: Restore your cognitive state and return to full focus on the original task.

### Step 8: Transition Buffer (60 seconds)
- **Action**: Before returning to original task, take a 60-second reset:
  1. Stand up and stretch (15 seconds)
  2. Drink water (15 seconds)
  3. Take 3 deep breaths (15 seconds)
  4. Remind yourself: "Interrupt is done. Returning to [ORIGINAL TASK]." (15 seconds)
- **Why**: Switching contexts twice (original → interrupt → original) requires a mental reset
- **Non-Negotiable**: Do not skip this. Cognitive residue is real.

### Step 9: Read Your Capture (30 seconds)
- **Action**: Open your Capture tool and read/listen to your Step 2 recording
- **Focus**: 
  - What task were you doing?
  - What exact action were you in the middle of?
  - What were you about to do next?
  - What thought was in your head?
- **Why**: This reloads your working memory with the exact context you captured

### Step 10: Visual Context Reload (30 seconds)
- **Action**: 
  - Open the screenshot you took (if any)
  - Restore windows/files to previous state
  - Navigate back to the exact location (document section, code line, browser tab)
- **Why**: Visual cues trigger deeper context recall than memory alone

### Step 11: Micro-Restart (30 seconds)
- **Action**: Do NOT jump back to the "Next" action from your capture. Instead:
  1. Re-read the last paragraph/section you wrote
  2. Re-review the last change you made
  3. Re-scan the last screen you were looking at
- **Why**: This primes your brain and makes the "next" action feel natural instead of forced

### Step 12: Timer + Re-Engage (10 seconds setup + execution)
- **Action**:
  1. Set a timer for 25 minutes (one Pomodoro block)
  2. Say out loud: "I am returning to [TASK]. Focus for 25 minutes."
  3. Start timer and execute the "Next" action from your capture
- **Why**: Timer creates urgency and prevents drift. Saying it out loud reinforces intention.

**Total Phase 3 Time: 2-5 minutes**

---

## PHASE 4: POST-INTERRUPT REVIEW (End of Day)

**Purpose**: Learn from interrupts to reduce future context-switching costs.

### Step 13: Daily Interrupt Log (5 minutes)
- **When**: During Daily Dump (10:25 PM)
- **Action**: Review today's interrupts and answer:
  1. How many times was I interrupted today?
  2. How many were true emergencies vs. could-wait?
  3. What pattern do I see? (time of day, person, type of interrupt)
  4. What can I prevent tomorrow?
- **Tool**: Google Keep or Daily Dump journal
- **Why**: Interrupts have patterns. Identify them to reduce frequency.

### Step 14: Interrupt Prevention Planning
- **Action**: Based on Step 13 patterns, implement one prevention strategy:
  - **Time-based**: Block "Do Not Disturb" hours in calendar
  - **Person-based**: Set expectations ("I'm available 12-1 PM for questions")
  - **Location-based**: Work from different location during focus blocks
  - **Signal-based**: Use physical signal (closed door, headphones, sign) to indicate focus mode
- **Why**: The best context switch is the one that never happens

---

## MODE-SPECIFIC CONTEXT SWITCHING

### Solo Execution Mode Interrupts
- **Common Triggers**: 
  - Family emergency calls during work hours
  - Delivery/door knock
  - System alerts (server down, critical email)
- **Protocol Modification**: Stricter defer protocol. Protect core work blocks (9-1, 2-5) aggressively.
- **Recovery**: Use full Phase 3 restore. Solo mode depends on deep focus.

### Family Structure Mode Interrupts
- **Common Triggers**:
  - Child needs immediate help
  - Spouse requests assistance
  - Meal preparation time conflict
  - Schedule changes
- **Protocol Modification**: Accept higher interrupt frequency. Focus on capture quality (Step 2).
- **Recovery**: Abbreviated Phase 3. Family mode is inherently interrupt-driven. Capture is critical.

### Mode Transition Interrupts (Hardest)
- **Trigger**: Switching from Solo → Family (Friday 4 PM) or Family → Solo (Monday 6 PM) mid-task
- **Protocol**: 
  1. Execute extended Step 2 capture (90 seconds, very detailed)
  2. Create "Resume Monday" or "Resume Next Weekend" task in Google Tasks
  3. Attach screenshot and voice note to task
  4. Close all work completely (do not leave tabs open)
  5. Execute mode transition protocol (separate SOP)
- **Recovery**: On mode re-entry, review "Resume" task FIRST before starting new work

---

## INTEGRATION WITH EXISTING PROTOCOLS

### When This Overrides Other Protocols
- **During Foundational Daily Protocols**: Interrupts during Morning Sequence (6:00-6:30 AM) or Evening Sequence (10:00-10:30 PM) are rare. If they occur, they're likely emergencies. Execute abbreviated IPI-CSR (Steps 1-2 only) and return to protocol ASAP.
- **During Core Work Blocks**: This is the primary use case. Execute full IPI-CSR.

### When to Skip This Protocol
- **Pre-planned transitions**: Switching tasks because your Pomodoro timer ended or your schedule says to switch. That's not an interrupt. Use normal task-switching (close file, check task list, start next task).
- **Micro-interrupts**: Quick glance at notification, 5-second answer to yes/no question. If interrupt is <10 seconds and doesn't require cognitive load, skip capture.

---

## ADVANCED: PLANNED INTERRUPT WINDOWS

**Purpose**: Reduce unplanned interrupts by creating designated interrupt-handling windows.

### Implementation
- **Action**: Schedule two 15-minute "Interrupt Windows" per day:
  - 11:45 AM - 12:00 PM (before lunch)
  - 4:45 PM - 5:00 PM (end of work day)
- **Use**: Handle all deferred interrupts, check messages, respond to "quick questions"
- **Communication**: Tell family/colleagues: "If it's not urgent, I'll get back to you during my next check-in at [11:45 AM/4:45 PM]."
- **Why**: Batching interrupts reduces total context-switching cost and protects deep work blocks

---

## TOOLS REQUIRED

- Soundcore AI Voice Recorder (voice capture)
- Google Keep (text capture)
- Google Tasks (deferred task tracking)
- Phone timer (Pomodoro blocks)
- Screenshot tool (Win + Shift + S)
- Clock (time stamping)

---

## SUCCESS METRICS

**You have successfully executed this protocol when:**
- You captured your context before addressing the interrupt
- You returned to the original task without thinking "Wait, what was I doing?"
- You completed the original task despite the interruption
- Your stress level did not spike from lost progress

**This protocol is NOT designed to:**
- Prevent all interrupts (impossible in real life)
- Make interrupts pleasant (they're still disruptive)
- Replace time management (that's what your mode SOPs do)

**This is damage control. Interrupts are inevitable. This protocol minimizes the damage.**

---

## FINAL NOTE

**The neurodivergent brain struggles with context switching more than neurotypical brains**. You will feel the cost of interrupts more acutely. That's not a weakness—it's a feature of deep focus. This protocol acknowledges that reality and gives you a structured way to handle it.

**Key principle**: Capture before switching. Every time. No exceptions.

**Now execute it.**