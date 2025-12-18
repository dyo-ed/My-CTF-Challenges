# 🌐 STUCK: Web Exploit, Cryptography

## 🎯 Challenge Goal

Perform a security analysis on the provided website portal. Your goal is to bypass the login mechanism to uncover the hidden flag: `lspu{flag_here}`.

## 📝 Deployment Instruction

This challenge is built to be hosted on Vercel. Follow the steps below to deploy the challenge environment.

### Prerequisites
* **Node.js** (Latest LTS recommended)
* **Vercel CLI** (Install globally via `npm i -g vercel`)
* A Vercel account

### Step-by-Step Guide

**1. Install Dependencies**
First, install the necessary project packages locally to ensure the build environment is ready. Open your terminal in the project root directory and run:

```bash
npm install
```

**2. Deploy to Production**
Once the dependencies are installed, deploy the application directly to Vercel using the production flag. This will build the project and generate a live URL.

```bash
vercel deploy --prod
```

**3. Verify Deployment**
After the deployment finishes, the terminal will output a Production URL (e.g., https://your-project.vercel.app).
* Share this URL with the challenge participants.
* Ensure the logic allows for the exploit to trigger the flag reveal.