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
The contact form uses `@formspree/react` with Formspree form ID `xkjoradp` and submits directly without needing an email app. Verify the destination email address and notifications in the Formspree dashboard. The Formspree dashboard manages the submissions, and free-plan limits are subject to Formspree terms. Test by sending a single enquiry after deployment. Social links include Instagram, the company LinkedIn page and Divya Chheda's LinkedIn profile.

## V2 changes / GitHub upload
Replace only `src/main.tsx`, `src/data.ts`, `src/style.css`, `package.json`, and `README.md`; add new `src/ContactForm.tsx`. Do not delete the other existing files. The original logo is unchanged. Cloudflare Pages will rebuild automatically after the commit to `main` (if Git integration is enabled). Build command is `npm run build` and output directory is `dist`.

Routing now scrolls to the top when navigating between pages, except when a link targets a services section like `/services#photography`. A floating back-to-top button appears after scrolling.

## Before public launch
- Verify the legal enterprise name on the Udyam certificate.
- Confirm any formal Razorpay, PhonePe and Shiprocket partnership claims before using badges.
- Review Privacy Policy and Terms drafts for actual data practices and legal compliance, including use of Formspree.
- Confirm Formspree form ID, receiving email and spam/notification settings; submit one live test enquiry.
- Test all links, forms and responsive layouts.
- Confirm domain and business email DNS records.
- Consider static prerendering for stronger search engine crawling; this version uses client-side React routing.
- Confirm that any Claude Startups application describes real AI use and actual products rather than invented software.
