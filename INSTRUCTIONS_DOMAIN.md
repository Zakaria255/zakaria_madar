# Connecting Hostinger Domain to Vercel

Follow this step-by-step guide to connect your custom domain (purchased on Hostinger) to your Next.js project on Vercel.

## Phase 1: Vercel Configuration

1.  Log in to your **Vercel Dashboard**.
2.  Select your project (**My Portfolio**).
3.  Go to **Settings** > **Domains**.
4.  Enter your domain name (e.g., `zakariamad.com`) in the input field and click **Add**.
5.  Select the recommended option (usually **Add mydomain.com and www.mydomain.com**).
6.  Vercel will now show an "Invalid Configuration" or "Verification Needed" status with values you need to add to Hostinger.

## Phase 2: Hostinger DNS Configuration

1.  Log in to your **Hostinger Account**.
2.  Go to **Domains** and select your domain.
3.  Click on **DNS / Name Servers** in the sidebar.
4.  **Important**: Ensure your "Nameservers" are set to **Hostinger defaults** (`ns1.dns-parking.com`, etc.). If you are using Cloudflare or others, you must edit DNS there instead.
5.  **Delete Conflicting Records**: 
    *   Look for existing `A` records for `@` or `CNAME` records for `www`. Delete them to avoid conflicts.

6.  **Add New Records**:

    | Type | Name | Content / Target | TTL |
    | :--- | :--- | :--- | :--- |
    | **A** | `@` | `76.76.21.21` | 3600 (or default) |
    | **CNAME** | `www` | `cname.vercel-dns.com` | 3600 (or default) |

    *   **Record 1 (Root Domain)**:
        *   Type: `A`
        *   Name: `@` (or leave blank depending on interface)
        *   Points to: `76.76.21.21`
    
    *   **Record 2 (Subdomain)**:
        *   Type: `CNAME`
        *   Name: `www`
        *   Points to: `cname.vercel-dns.com`

7.  Save changes.

## Phase 3: Verification & SSL

1.  Go back to the **Vercel Domains** settings page.
2.  It might take a few minutes to verify. Vercel automatically checks DNS.
3.  Once DNS is verified, Vercel will automatically generate an **SSL Certificate** (HTTPS). This allows your site to be secure.

## Common Mistakes to Avoid

*   **Wrong Nameservers**: If you changed nameservers to something else (like Cloudflare), changing DNS in Hostinger won't work. You must change DNS where the nameservers point.
*   **Duplicate Records**: You cannot have two `A` records for `@` pointing to different places (e.g., one to Hostinger default page and one to Vercel). Delete the old one.
*   **Proxy Status**: If you are using Cloudflare, make sure the "Proxy status" cloud icon is **Grey (DNS Only)** initially to ensure Vercel can verify the domain.

## DNS Propagation

*   **Typical Time**: 15 minutes to 2 hours.
*   **Max Time**: Up to 48 hours (rare).
*   **Check Status**: You can use a tool like [whatsmydns.net](https://www.whatsmydns.net/) to see if your domain is pointing to `76.76.21.21` globally.
