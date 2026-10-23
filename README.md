
# CLICKWORTHY BY DTC — Official Website

Official website and creative portfolio for **CLICKWORTHY BY DTC**, also known as **Clickworthy by Divya**.

**Creative Vision. Digital Thinking. Always Evolving.**

## Official Links

- Website: https://clickworthybydtc.com
- Portfolio: https://clickworthybydtc.com/portfolio
- GitHub: https://github.com/divyasomaiya/gptdtcsite
- Business Email: tech@clickworthybydtc.com
- Phone / WhatsApp: +91 9833430401
- Instagram: https://www.instagram.com/clickworthybydtc/
- Company LinkedIn: https://www.linkedin.com/company/clickworthybydtc/
- Founder LinkedIn: https://www.linkedin.com/in/divyachheda/
- Founder Instagram: https://www.instagram.com/divyap_creator/

## About the Business

CLICKWORTHY BY DTC is a founder-led creative production, digital marketing and digital solutions business established in 2024.

Founded by Divya Chheda, the business provides photography, videography, social media management, creative design, e-commerce support and web development services.

Based in India, CLICKWORTHY BY DTC serves clients across India.

**Business Information**

- Public Brand: CLICKWORTHY BY DTC
- Also Known As: Clickworthy by Divya
- Founder: Divya Chheda
- Established: 2024
- Location: India
- Business Registration: Udyam / MSME Registered
- Udyam Number: UDYAM-MH-19-0408463

The registered legal enterprise name is pending confirmation. Udyam registration does not constitute government endorsement.

## Website Status

**Version: V3 — Portfolio Upgrade**

The website is live with a functional photography and videography portfolio.

The V3 upgrade preserves the original website's branding, navigation, footer, contact functionality and existing pages.

### Available Pages

- `/` — Homepage
- `/about` — About the Business
- `/services` — Services
- `/portfolio` — Photography & Videography Portfolio
- `/contact` — Contact and Enquiries
- `/privacy-policy` — Privacy Policy
- `/terms` — Terms & Conditions

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React 18 | Frontend interface |
| TypeScript | Application code |
| Vite 5 | Development and production builds |
| React Router DOM | Website navigation |
| Lucide React | Icons |
| CSS | Responsive styling |
| Formspree | Contact form processing |
| GitHub | Source control |
| Cloudflare Pages | Website hosting and deployment |

The website is a client-rendered React application.

It is not a WordPress, Next.js or Canva-based deployment.

## Project Structure

    gptdtcsite/
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── README.md
    │
    ├── src/
    │   ├── main.tsx
    │   ├── data.ts
    │   ├── style.css
    │   ├── ContactForm.tsx
    │   ├── PortfolioPage.tsx
    │   ├── portfolioProjects.ts
    │   └── portfolio.css
    │
    └── public/
        ├── clickworthy-logo.png
        ├── _redirects
        ├── _headers
        ├── robots.txt
        ├── sitemap.xml
        │
        └── portfolio/
            ├── photos/
            │   ├── events/
            │   └── commercial/
            │
            └── videos/
                ├── events/
                └── commercial/

## Important Source Files

| File | Purpose |
| --- | --- |
| `src/main.tsx` | Main application, routing, header and footer |
| `src/data.ts` | Business information and services |
| `src/style.css` | Global website styling |
| `src/ContactForm.tsx` | Formspree enquiry form |
| `src/PortfolioPage.tsx` | Portfolio layout and interactions |
| `src/portfolioProjects.ts` | Portfolio media definitions |
| `src/portfolio.css` | Portfolio-specific responsive styling |
| `public/clickworthy-logo.png` | Original brand logo |

Avoid modifying shared application files when making Portfolio-only improvements.

## Portfolio — V3

The Portfolio page showcases original photography and videography work.

### Portfolio Features

- All Work / Videos / Photos interactive tabs
- Responsive photography collections
- In-page photography lightbox
- Previous and next image navigation
- Keyboard and touch navigation
- Native HTML5 video playback
- Portrait and landscape video support
- Fullscreen media viewing
- Mobile and desktop responsive design
- Creative approach and equipment section
- About Divya Chheda
- Creative & Digital Toolkit
- Experience & Credentials
- Existing enquiry and WhatsApp functionality

All portfolio media remains within the CLICKWORTHY BY DTC website during viewing.

### Photography

**33 photographs are stored in the repository.**

| Category | Count | Folder |
| --- | --- | --- |
| Event Photography | 11 | `public/portfolio/photos/events/` |
| Commercial Photography | 22 | `public/portfolio/photos/commercial/` |

Commercial Photography currently includes product, food, model, fashion, makeup and beauty work in one collection.

Further category segregation is planned for V3.1.

#### Event Photography Filenames

`event-01.jpg` through `event-11.jpg`

#### Commercial Photography Filenames

`commercial-01.jpg` through `commercial-22.jpg`

### Videography

**8 MP4 video files are stored in the repository.**

| Category | Count | Folder |
| --- | --- | --- |
| Event Videography | 4 | `public/portfolio/videos/events/` |
| Commercial Videography | 4 | `public/portfolio/videos/commercial/` |

#### Event Video Filenames

- `event-01.mp4`
- `event-02.mp4`
- `event-03.mp4`
- `event-04.mp4`

All four are configured as portrait videos.

#### Commercial Video Filenames

- `commercial-01.mp4` — Portrait
- `commercial-02.mp4` — Portrait
- `commercial-03.mp4` — Portrait
- `commercial-04.mp4` — Landscape

Videos are hosted as static website assets.

The project does not currently require YouTube, Vimeo, Cloudflare R2 or paid video hosting.

### Media Guidelines

- Preserve original high-resolution media separately.
- Use optimized website copies.
- Maintain the correct filenames and folder structure.
- Prefer MP4 with H.264 video and AAC audio.
- Preserve original image and video orientations.
- Avoid unnecessary quality reduction.
- Keep individual files within GitHub and Cloudflare Pages upload limits.
- Only publish genuine, permission-cleared work.
- Do not invent clients, credits, testimonials or project results.

## About Divya Chheda

Divya Chheda is a photographer, videographer, content creator, affiliate marketer and social media manager.

The Portfolio includes a founder introduction describing creative production, digital marketing, visual storytelling and experience working across brands and media projects.

The section also includes:

- Creative & Digital Toolkit
- Diploma in Photography — Le Mark Institute
- Gemini Student Ambassador
- Google Prompting Essentials and Canva Learning
- Event Media Leadership — Harmony Fest and Hooner Fest
- Personal LinkedIn and Instagram links

Professional credentials and experience should be described accurately and updated when necessary.

## Contact Form

The website uses `@formspree/react`.

**Formspree Form ID:** `xkjoradp`

The form supports:

- Full name
- Email address
- Phone / WhatsApp
- Required service
- Project or event date
- Project location
- Requirement description
- Privacy consent

Form submissions are processed through Formspree without requiring a custom Cloudflare backend.

Verify the receiving email, notifications, spam protection and submission limits in the Formspree dashboard.

Never commit passwords, API secrets or confidential client information to this public repository.

## Local Development — Windows 11

### Requirements

- Node.js 20 or newer
- Git
- VS Code or another code editor
- Internet connection for installing dependencies

### Clone Repository

    git clone https://github.com/divyasomaiya/gptdtcsite.git

    cd gptdtcsite

### Install Dependencies

    npm install

### Start Development Server

    npm run dev

Open the local URL displayed by Vite.

### Production Build

    npm run build

This command runs TypeScript checking followed by the Vite production build.

The production output is generated in:

    dist/

### Preview Production Build

    npm run preview

## GitHub and Cloudflare Pages Deployment

The existing website uses automatic GitHub-to-Cloudflare Pages deployment.

### Deployment Settings

- Repository: `divyasomaiya/gptdtcsite`
- Production Branch: `main`
- Build Command: `npm run build`
- Build Output Directory: `dist`
- Custom Domain: `clickworthybydtc.com`

### Normal Update Workflow

1. Modify the necessary source or media files.
2. Commit changes to the `main` branch.
3. Cloudflare Pages automatically starts a new deployment.
4. Open Cloudflare Dashboard.
5. Select Workers & Pages.
6. Open the `clickworthy-by-dtc` Pages project.
7. Check the latest production deployment.
8. Confirm successful deployment.
9. Test the updated website.

Do not delete and recreate the Cloudflare Pages project to fix source-code errors.

If a build fails, inspect the deployment logs and correct the source code.

A failed deployment may leave the previous successful production version live.

### React Routing

The file `public/_redirects` contains:

    /* /index.html 200

This supports direct access to React routes.

Do not remove the redirect without verifying route behaviour.

## SEO and Search Discoverability

### Existing SEO Files

- `index.html`
- `public/robots.txt`
- `public/sitemap.xml`
- Portfolio page metadata in `src/PortfolioPage.tsx`

### Sitemap

https://clickworthybydtc.com/sitemap.xml

### Robots.txt

https://clickworthybydtc.com/robots.txt

The sitemap lists the website's seven main routes.

### Current SEO Limitations

The website uses client-side React rendering.

Some Portfolio metadata is inserted using JavaScript, which may not be visible to all search engine or social media crawlers.

Page-specific prerendering or other suitable metadata improvements may be considered later.

Do not claim guaranteed Google rankings or AI search visibility.

## Google Integration Roadmap

The following tools are planned for review and setup.

### Google Search Console

- Verify domain ownership
- Submit XML sitemap
- Monitor indexing
- Inspect URLs
- Review search queries and impressions
- Investigate crawl issues

### Google Analytics 4

- Create or connect GA4 property
- Configure web data stream
- Track page views
- Track Portfolio engagement
- Measure enquiry conversions
- Review traffic sources
- Configure privacy and consent handling

### Google Tag Manager

Optional centralized management of analytics and conversion tags.

Avoid duplicate analytics installations.

### Google Business Profile

- Connect the existing verified business profile
- Add the official website link
- Maintain accurate contact information
- Use the genuine Google Maps / Business Profile URL
- Review business category and service information

The Google Business Profile URL has not yet been recorded in this README.

### Google PageSpeed Insights

- Analyze mobile and desktop performance
- Measure Core Web Vitals
- Identify slow-loading media
- Improve page responsiveness

### Google Rich Results Test

Validate eligible structured data and identify markup errors.

### Google Looker Studio

Optional dashboards using Google Analytics and Search Console data.

### Other Optional Google Tools

- Google Trends
- Google Ads
- Google Merchant Center, where relevant
- Google Maps and Business Profile integrations

Only implement tools that provide a genuine benefit to the website.

## GEO — Generative Engine Optimization

Future improvements may include:

- Clear factual business descriptions
- Consistent brand information
- Descriptive portfolio projects
- Genuine founder credentials
- Search-accessible page content
- Appropriate structured data
- Accurate service descriptions
- Consistent public business profiles

No AI search engine inclusion or ranking is guaranteed.

## Known Performance Issue

The current Portfolio implementation checks the availability of all 41 configured media files using network requests before displaying the galleries.

This can cause a prolonged:

"Checking available portfolio media..."

loading message.

**Planned improvement:**

Replace the blocking media availability scan with a faster, non-blocking approach while preserving lazy-loaded images, video playback and media error handling.

Do not unnecessarily compress or remove portfolio media.

## V3.1 Development Bucket List

- [ ] Optimize Portfolio loading performance
- [ ] Verify all video playback on mobile and desktop
- [ ] Add real video poster thumbnails
- [ ] Separate commercial photographs into Product, Food, Model/Fashion and Makeup/Beauty collections
- [ ] Improve genuine project titles and descriptions
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics 4
- [ ] Review Google Tag Manager requirements
- [ ] Connect verified Google Business Profile
- [ ] Improve SEO metadata and structured data
- [ ] Review GEO discoverability improvements
- [ ] Perform mobile and desktop performance testing
- [ ] Verify contact form submissions
- [ ] Review Privacy Policy and Terms
- [ ] Keep README documentation updated

## Development Rules

1. Preserve the existing live website.
2. Do not change the framework unnecessarily.
3. Preserve GitHub and Cloudflare Pages integration.
4. Avoid modifying unrelated pages.
5. Keep the existing logo and brand identity.
6. Maintain responsive design.
7. Use genuine portfolio work.
8. Keep project metadata maintainable.
9. Test builds before declaring deployment successful.
10. Avoid publishing unverified credentials, partnerships or business claims.

## Brand Identity

- Primary Accent: `#38B6FF`
- Secondary Color: `#FFFFFF`
- Background: Dark Navy / Black
- Visual Direction: Modern, clean, media-first and professional

## Copyright

© 2024–2026 CLICKWORTHY BY DTC.

All Rights Reserved.
