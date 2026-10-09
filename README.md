# CLICKWORTHY BY DTC — Website

React + TypeScript + Vite website for CLICKWORTHY BY DTC.

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`
3. Run `npm run dev`
4. Open the local URL shown in the terminal.
5. Run `npm run build` to generate `dist/`.

## Deploy to Cloudflare Pages
1. Push the project files to a GitHub repository.
2. In Cloudflare Pages choose Connect to Git.
3. Select your repository and production branch `main`.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Test the temporary pages.dev domain first.
7. Add `clickworthybydtc.com` under Custom domains after testing.

**Important:** The existing site is hosted on Canva. Do not remove it before the new site is tested. Preserve MX, SPF, DKIM, DMARC and other email DNS records during any DNS changes.

## Edit site
- Business details and services: `src/data.ts`
- Page content and routes: `src/main.tsx`
- Design: `src/style.css`
- Original logo: `public/clickworthy-logo.png`

## Portfolio images
The `/portfolio` page is intentionally a holding page without invented client work. Add real, permission-cleared photos and videos later, then build a portfolio gallery.

## Contact
The enquiry form opens the visitor's email application (`mailto:`). It is **not** a server-side form. WhatsApp, email and Instagram links are available. To enable a server-submitted form, add a verified Cloudflare Pages Function and an email delivery service with secure server-side secrets.

## Before public launch
- Verify the legal enterprise name on the Udyam certificate.
- Confirm any formal Razorpay, PhonePe and Shiprocket partnership claims before using badges.
- Review Privacy Policy and Terms drafts for actual data practices and legal compliance.
- Test all links, forms and responsive layouts.
- Confirm domain and business email DNS records.
- Consider static prerendering for stronger search engine crawling; this version uses client-side React routing.
- Confirm that any Claude Startups application describes real AI use and actual products rather than invented software.
