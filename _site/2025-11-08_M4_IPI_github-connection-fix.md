# The "Fix-It" IPI: GitHub Setup (Force the Connection)

This IPI is designed to clear the previous failed settings and connect your local WONKY_SPROUT_OS folder to the empty GitHub repository you created.

## 1.0 PHASE 1: DIAGNOSE THE LOCAL CHAOS (VS CODE)

### Step 1.1: Open your WONKY_SPROUT_OS folder in VS Code

### Step 1.2: Check Source Control

Click the "Source Control" icon (the branching symbol) on the left sidebar.

- If it asks you to "Initialize Repository": Do it. This means VS Code didn't recognize it as a local Git folder.
- If it shows files: Good. Go to Step 1.3.

### Step 1.3: Remove the Broken Remote Connection

Open the VS Code Terminal (Terminal > New Terminal).

In the terminal, type the following command and press Enter:

```bash
git remote remove origin
```

**Purpose**: This removes any failed connection attempts and gives us a clean slate.

## 2.0 PHASE 2: RE-ESTABLISH THE STRUCTURE (Connect the URL)

### Step 2.1: Get the "Address"

Copy your repository URL again:

```
https://github.com/classicwilly/classicwilly.github.io.git
```

### Step 2.2: Add the "Fix"

In the VS Code Terminal, type the following command and press Enter:

```bash
git remote add origin https://github.com/classicwilly/classicwilly.github.io.git
```

**Purpose**: This formally registers your GitHub repository as the "origin" where all your work belongs.

## 3.0 PHASE 3: EXECUTE THE FINAL "FIX" (The Publish)

### Step 3.1: Stage and Commit the Files

In the VS Code Source Control panel, look at the list of files (index.md, SPROUT_002.md, etc.).

- Click the + icon next to the "Changes" heading to stage all the files.
- In the "Message" box, type: `Wonky Sprout OS v1.0 - Initial Deploy and Fix`.
- Click the "Commit" button.

### Step 3.2: Force the Push

This is the critical step that sends everything to the website.

In the VS Code Terminal, type the following final command and press Enter:

```bash
git push -u origin master
```

(Note: GitHub may ask you to log in via a browser window at this point. Follow the prompts to authenticate.)

If these steps execute correctly, the Terminal will show a success message, and your files will instantly appear on GitHub.