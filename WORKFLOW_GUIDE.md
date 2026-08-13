# Website Editing Workflow Guide

Welcome! This guide is designed to help you understand how to update the Racial Justice Centre website.

---

## Section 1: Introduction & The Big Picture

Let's look at how a website actually works and define some key terms.

At a high level, a website is just a collection of text files and images. When you want to change the website, you edit those text files on your computer, save them, and then send them to a server (a computer on the internet) that broadcasts those files to the world.

### Key Terms Defined

*   **Codebase:** The folder on your computer that contains all the text files, images, and code that make up the website.
*   **IDE (Integrated Development Environment):** The software you use to view and edit the codebase. Think of it like Microsoft Word, but specifically designed for writing and managing code. We use **Cursor**.
*   **AI Coding Agent:** An artificial intelligence built into your IDE or terminal that can read your codebase and write code for you based on plain English instructions.
*   **Git & GitHub:** The version control system. Imagine Google Drive's "Version History" combined with a cloud backup. Git tracks every change made to the files, and GitHub is the website where the master copy of the codebase lives.
*   **Vercel:** The hosting platform. Vercel connects to GitHub and whenever the master copy on GitHub is updated, Vercel automatically takes those new files, builds the website, and broadcasts it to the live internet. The site that you see on the racialjustice.au link is hosted on Vercel. 

---

## Section 2: Step 1 - Initial Setup & Tooling

Before you can edit the website, you need the right tools on your computer.

### Prerequisites
1.  **GitHub Account:** You need an account on GitHub.com with access to the `rjc-landing-page` repository.
2.  **Node.js & pnpm:** These are background programs required to run the website on your own computer so you can see your changes before they go live.

### Choosing Your AI Assistant
You have two main options for interacting with the AI to edit the website:

*   **Option A: Cursor IDE**
    Cursor is a visual, all-in-one editor. It looks like a standard coding app but has a chat window where you can talk to the AI. *Note: Cursor requires a paid subscription for its premium AI features.*
*   **Option B: Claude Code**
    Claude Code is a command-line alternative. Instead of a visual app, you use a **Terminal** (a text-based window where you type commands to your computer). If you already have access to Claude Code, you can open your terminal, navigate to the codebase folder, and type `claude` to start chatting with the AI and making edits.

### Running the App Locally
No matter which tool you use, you should always start the local server. This creates a private version of the website on your computer.
In your terminal (or Cursor's built-in terminal), type:
```bash
pnpm dev
```
*(Alternatively, you can just ask your AI: "Start the local server for me.")*

Then, open your web browser and go to `http://localhost:3000`. As the AI makes changes to the code, this page will automatically update so you can review the work.

---

## Section 3: Step 2 - Preparing Your Workspace

Whenever you sit down to work on the website, you need to make sure you have the latest version of the code.

1.  **Open the project:** Open the `rjc-landing-page` folder in Cursor, or open your terminal and navigate to that folder.
2.  **Get the latest updates:** Someone else might have changed the website since you last looked. To download the newest master copy from GitHub to your computer, type this command in your terminal:
    ```bash
    git pull origin development
    ```
    *(Alternatively, ask your AI: "Pull the latest changes from the development branch.")*

---

## Section 4: Step 3 - Creating a Safe Sandbox (Branching)

We never edit the live website directly. Instead, we create a **branch**.

**What is a branch?**
A branch is a personal, isolated copy of the website. You can experiment, break things, and make as many changes as you want in your branch without affecting the live site or anyone else's work.

**The Specific Workflow:**
For this project, we **ALWAYS** branch off the `development` branch (which is our staging environment). We never branch directly from `main`.

**How to do it:**
In your terminal, type the following command, replacing `my-new-feature` with a short, descriptive name for what you are doing (use dashes instead of spaces):
```bash
git checkout -b my-new-feature development
```
*(Alternatively, ask your AI: "Create a new branch off development called my-new-feature.")*

---

## Section 5: Step 4 - Making Changes with the AI Agent

Now you are in your safe sandbox and ready to work!

1.  **Talking to the AI:** Open the AI chat in Cursor, or if you are using Claude Code, ensure you have typed `claude` in your terminal.
2.  **Selecting the Right Model (Cursor):** In the Cursor chat, you can choose which AI "brain" (model) to use from a dropdown menu. Different models are better suited for different tasks:
    *   **Large/Complex Features:** Use **Sonnet 5**. It is highly capable and handles complex logic well.
    *   **Smaller Features & Edits:** Use **Cursor Grok 4.6 High**. It is fast and efficient for standard coding tasks.
    *   **Simple Questions & Explanations:** Use **Composer 2.5**. It is great for quick answers without using up your premium requests.
    *   *Note:* You can learn more about the different models and how usage limits work on [Cursor's Pricing Page](https://www.cursor.com/pricing). 
3.  **Using Plan Mode (Cursor):** If you are asking for a large or complex change, you can switch the AI into **Plan mode**. In this mode, the AI will read your request and write out a step-by-step plan of what it intends to do *without* actually changing any code yet. Once you review and approve the plan, it will switch back to Agent mode to do the actual work.
4.  **Writing good instructions:** Tell the AI exactly what you want. Be specific.
    *   *Bad:* "Fix the home page."
    *   *Good:* "On the home page, change the main hero text from 'Welcome' to 'Early Bird Tickets Out Now!' and update the button to link to the Zeffy ticketing page."
5.  **How the AI works:** The AI will read your instructions, look at the relevant files in the codebase, and write the new code.
6.  **Reviewing:** Once the AI finishes, look at your local browser window (`http://localhost:3000`). Check that the changes look correct and that nothing else is broken. If it's not right, just tell the AI to fix it!

---

## Section 6: Step 5 - Saving Your Work (Committing)

Once you are happy with the changes on your local computer, you need to save them permanently. In Git, saving is called making a **commit**.

**What is a commit?**
A commit is a permanent snapshot of your changes. It includes the exact modifications made to the files and a short message describing *why* you made them.

**How to commit:**
In your terminal, tell Git to stage (prepare) all your changes, and then commit them with a message:
```bash
git add .
git commit -m "Update the hero text for early bird tickets"
```
*(Alternatively, ask your AI: "Commit my changes with the message 'Update the hero text for early bird tickets'.")*

---

## Section 7: Step 6 - Going Live (Pull Requests & Vercel)

Your changes are saved on your computer, but they aren't on the internet yet. Here is how we push them live using a two-stage process.

### 1. Push to GitHub
First, send your local sandbox branch up to the GitHub cloud:
```bash
git push -u origin my-new-feature
```
*(Alternatively, ask your AI: "Push my branch to GitHub.")*

### 2. Push to Staging & Preview on Vercel
Instead of clicking through GitHub manually, you can ask your AI to handle the technical steps for you.
*   **Ask your AI:** "Create a pull request to merge my branch into development, and then merge it."
*   **Preview on Vercel:** Once the AI finishes, Vercel automatically builds a "staging" (preview) version of the website. Go to your Vercel dashboard to find the staging link. Check this link to ensure everything looks perfect on the actual internet before going live.

### 3. Going Live (Merging to Main)
Once you have previewed the staging site and are happy with it, it's time to push the updates to the real public website.
*   **Ask your AI:** "Create a pull request to merge development into main, and then merge it."

### The Magic of Vercel & Build Times
You don't need to do anything else! Vercel is watching GitHub.
*   When you merged into `development`, Vercel automatically updated the staging website.
*   When you merged into `main`, Vercel automatically started updating the live public website.

**Patience is Key (Build Time):**
Even after you click "Merge" to `main`, the live public website does **not** update instantly. It takes a few minutes (usually 2-5 minutes) for Vercel to "build" (compile, optimize, and prepare) the site. Wait a few minutes, refresh your live website, and your changes will appear!

---

## Section 8: Quick Reference Cheat Sheet

Once you understand the concepts above, use this quick checklist for your day-to-day workflow. 
*(Note: For any of the terminal commands below, you can simply ask your AI agent to do it for you!)*

1.  **Start Local Server:** `pnpm dev` (View at `localhost:3000`)
2.  **Get Latest Code:** `git checkout development` then `git pull origin development`
3.  **Create Sandbox:** `git checkout -b your-branch-name development`
4.  **Make Changes:** Use Cursor AI or Claude Code to edit the site.
5.  **Review:** Check `localhost:3000` to ensure changes look good.
6.  **Save (Commit):**
    *   `git add .`
    *   `git commit -m "Description of changes"`
7.  **Push to Cloud:** `git push -u origin your-branch-name`
8.  **First PR (Staging):** Ask AI: "Merge my branch into development."
9.  **Preview:** Check the staging link on Vercel.
10. **Second PR (Production):** Ask AI: "Merge development into main."
11. **Wait:** Give Vercel a few minutes to build and publish the live site.