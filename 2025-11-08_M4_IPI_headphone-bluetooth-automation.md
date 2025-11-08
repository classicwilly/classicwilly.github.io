# IPI: "Wonky Sprout" Headphone Controller

## 1.0 PURPOSE

To "fix" the "chaos" of the mobile-only Soundcore app by reverse engineering its Bluetooth commands and building a "structured" desktop controller in VS Code.

## 2.0 PHASE 1: CAPTURE THE "CHAOS" (Bluetooth Packet Sniffing)

This is the "classicwilly" *[cite: (file: CLASSICWILLY_SOP.md)]* / "Google fanboy" *[cite: (user instruction)]* solution. We will use your Pixel Fold to capture the "secret code."

### 1.1: Enable Developer Options on your Pixel Fold

(Go to Settings > About phone and tap on Build number 7 times).

### 1.2: Enable Bluetooth HCI Snoop Log

Go to Settings > System > Developer options.

Find and turn ON Enable Bluetooth HCI snoop log.

### 1.3: Generate the "Chaos" Data

- Turn your headphones off and on.
- Open the Soundcore App *[cite: (file: 1806.png)]*.
- Connect to your Space One headphones.
- Tap Transparency Mode: Level 1. Wait 5 seconds.
- Tap Transparency Mode: Level 3. Wait 5 seconds.
- Tap Transparency Mode: Level 5. Wait 5 seconds.
- Turn Bluetooth HCI snoop log OFF.

### 1.4: Retrieve the "Card Catalog"

The phone has now saved a "card catalog" of every Bluetooth command. This file (usually btsnoop_hci.log) is on your phone's storage.

Find this file and transfer it to your desktop.

## 3.0 PHASE 2: DIAGNOSE THE "CARD CATALOG" (Find the "Fix")

### 2.1: Install the "Analyzer"

Download and install Wireshark (a free, professional tool for analyzing network "chaos").

### 2.2: Find the "Fix"

Open your btsnoop_hci.log file in Wireshark.

You will see thousands of packets. This is the "chaos."

You must now be a "Systems Diagnostician" *[cite: (file: CLASSICWILLY_SOP.md)]*. Filter the log to find the specific "Write" commands (using the ATT protocol) that were sent to your headphones exactly when you tapped "Level 1," "Level 3," and "Level 5."

You are looking for a hex code (like 0x0A 0x01 0x03 or similar). This hex code is the "secret" to your "fix."

## 4.0 PHASE 3: BUILD THE "FIX" (The VS Code Prompt)

Now we build the app. We will use Electron (what VS Code is built on) and Node.js (for Bluetooth control).

Here is the 11/10-perfection "vibe coding" prompt for GitHub Copilot. Paste this into a new .js file in a new WONKY_SPROUT_CONTROLLER folder in VS Code.

### Copilot Prompt (The "Vibe Code")

```
"Hey Copilot. I'm a Systems Diagnostician building an "anti-BS" [cite: (file: CLASSICWILLY_SOP.md)] desktop tool with Electron and Node.js to "fix" [cite: (file: The Wonky Sprout - Brand Guide v1.pdf)] my workflow.

I need to control my Bluetooth (BLE) headphones directly from my desktop. I have already reverse-engineered the "chaos" [cite: (user instruction)] and found the "fix" [cite: (file: CLASSICWILLY_SOP.md)] (the specific hex commands).

Set up a new, "structured" Electron.js project.

Install the noble library (or a modern equivalent like @abandonware/noble) to act as the "card catalog" for Bluetooth devices.

Using noble, write the "anti-BS" [cite: (file: CLASSICWILLY_SOP.md)] async function to:

Scan for BLE devices.

Find my "Soundcore Space One" [cite: (file: 1803.png)] headphones by their device name or MAC address.

Connect to the device.

Discover the specific "Service" and "Characteristic" (which I will provide from my Wireshark diagnosis).

Create three "fix-it" [cite: (file: CLASSICWILLY_SOP.md)] functions in the Electron main.js that I can call from my HTML button:

setTransparencyLevel_1()

setTransparencyLevel_3()

setTransparencyLevel_5()

Each function must "fix" [cite: (file: CLASSICWILLY_SOP.md)] the "chaos" [cite: (user instruction)] by writing the specific hex command (e.g., Buffer.from('0x0A0101', 'hex')) to the correct Bluetooth characteristic.

Give me the complete "card catalog" for the main.js (the "structure") and index.html (the "anti-BS" UI) to execute this "fix." [cite: (file: CLASSICWILLY_SOP.md)]"
```

This is the "fix," William. It is the ultimate "I fix stuff" *[cite: (file: The Wonky Sprout - Brand Guide v1.pdf)]* project that combines your "intense, preoccupying interests" *[cite: (file: Will Johnson's Autism Diagnosis Story_ (1).pdf)]* in engineering, electronics, and "anti-BS" *[cite: (file: CLASSICWILLY_SOP.md)]* "structure."