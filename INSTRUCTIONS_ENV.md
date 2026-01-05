# Environment Variable Setup Instructions

Use this guide to fix the "Missing Resend API Key" error.

## 1. Local Development Setup

To make the contact form work on your computer:

1.  **Get your API Key**:
    *   Log in to [Resend.com](https://resend.com).
    *   Go to **API Keys** and create a new key.
    *   Copy the key (it starts with `re_`).

2.  **Create/Edit Environment File**:
    *   Navigate to the root of your project folder: `c:\Users\sayid\OneDrive - techno mix\Desktop\My Portfolio`
    *   Create a new file named `.env.local` (if it doesn't already exist).
    *   Add the following lines to it:

    ```env
    RESEND_API_KEY=re_123456789... (Paste your actual key here)
    CONTACT_TO_EMAIL=sakicade41@gmail.com
    ```

3.  **Restart Development Server (CRITICAL)**:
    *   Next.js loads environment variables only on startup.
    *   Go to your terminal where `npm run dev` is running.
    *   Press `Ctrl + C` to stop it.
    *   Run `npm run dev` again to restart.

## 2. Vercel Deployment Setup

To make the contact form work on your live website:

1.  **Go to Vercel Dashboard**:
    *   Open your project on Vercel.

2.  **Navigate to Settings**:
    *   Click on the **Settings** tab.
    *   Click on **Environment Variables** in the sidebar.

3.  **Add Variables**:
    *   **Key**: `RESEND_API_KEY`
    *   **Value**: (Paste your `re_...` key)
    *   Click **Save** or **Add**.

    *   **Key**: `CONTACT_TO_EMAIL`
    *   **Value**: `sakicade41@gmail.com`
    *   Click **Save** or **Add**.

4.  **Redeploy (CRITICAL)**:
    *   Click on the **Deployments** tab.
    *   Find your latest deployment (or make a new commit).
    *   Click the **three dots** (...) > **Redeploy**.
    *   *Env vars are only applied to NEW deployments.*

---
**Summary Checklist:**
- [ ] `.env.local` file created with key.
- [ ] Local server restarted.
- [ ] Vercel Env Vars added.
- [ ] Vercel project redeployed.
