# CatCare — Zero-Cost Validation MVP

Mobile-first landing page used to validate demand for **CatCare**, a cat-sitting service
launching in Egypt (Cairo & Giza first).

There is **no backend, database, auth, booking, or payment system** — by design.
Leads are collected with **Google Forms → Google Sheets**, then contacted manually on WhatsApp.

```
Visitor → Landing page → Google Form → Google Sheets → manual WhatsApp follow-up
Visitor → "Chat with CatCare" → WhatsApp
```

## Tech stack

React 19 · TypeScript · Vite · TanStack Start/Router · Tailwind CSS v4

# Zero-Cost Launch Setup

1. Create a Google account (free).
2. Create the **Owner** Google Form (questions below).
3. Create the **Sitter** Google Form (questions below).
4. In each form: **Responses → Link to Sheets** to create the Google Sheet.
5. The real Google Form URLs and WhatsApp number are already baked into
   `src/config/site.ts`, so the site works immediately without any environment
   variables. To override them, copy `.env.example` to `.env` and uncomment the
   relevant lines:

```bash
# Optional overrides:
# VITE_OWNER_GOOGLE_FORM_URL=https://your-new-owner-form-url
# VITE_SITTER_GOOGLE_FORM_URL=https://your-new-sitter-form-url
# VITE_WHATSAPP_NUMBER=201032404246
```

6. Optional: add Google Analytics 4:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

If empty, analytics stay disabled and the site works normally.

7. Run locally:

```bash
npm install
npm run dev        # http://localhost:8080
```

8. Build:

```bash
npm run build
```

9. Deploy free to Vercel (or Netlify / Cloudflare Pages): import the repo, then
   deploy. **No backend or database is required for this validation phase.**

> The Google Form and WhatsApp values are inlined at build time. After changing
> them via environment variables, rebuild/redeploy.

## Google Forms to create

### Owner form

**Title:** CatCare — Find a Cat Sitter

**Description:** "We're currently launching CatCare in Egypt and building our first network of
trusted cat sitters. Tell us what your cat needs and we'll contact you personally."

| # | Question | Type | Required | Options |
|---|----------|------|----------|---------|
| 1 | Full Name | Short answer | Yes | |
| 2 | WhatsApp Number | Short answer | Yes | |
| 3 | Area | Multiple choice | Yes | New Cairo, Maadi, Nasr City, Heliopolis, Zamalek, Dokki, Giza, Sheikh Zayed, 6th of October, Other |
| 4 | Number of Cats | Multiple choice | Yes | 1, 2, 3, 4+ |
| 5 | Cat Name | Short answer | No | |
| 6 | Start Date | Date | Yes | |
| 7 | End Date | Date | Yes | |
| 8 | Visits Per Day | Multiple choice | Yes | 1, 2, 3 |
| 9 | Does Your Cat Need Medication? | Multiple choice | Yes | Yes, No |
| 10 | Special Instructions | Paragraph | No | |

**Confirmation message:**

```
Thank you! 🐱
We've received your request.
We'll contact you on WhatsApp with available CatCare options.
```

### Sitter form

**Title:** CatCare — Become a Cat Sitter

**Description:** "We're building CatCare's first network of trusted cat sitters in Egypt. If you
love cats and want to earn by providing reliable care, join our early sitter network."

| # | Question | Type | Required | Options |
|---|----------|------|----------|---------|
| 1 | Full Name | Short answer | Yes | |
| 2 | WhatsApp Number | Short answer | Yes | |
| 3 | Area | Multiple choice | Yes | same area list as owner form |
| 4 | Experience With Cats | Multiple choice | Yes | Less than 1 year, 1–2 years, 3–5 years, 5+ years |
| 5 | Have You Personally Owned Cats? | Multiple choice | Yes | Yes, No |
| 6 | Services You Can Provide | Checkboxes | Yes | Home Visits, Feeding, Litter Cleaning, Medication, Playtime, Overnight Care |
| 7 | Price Per Visit (EGP) | Short answer | No | |
| 8 | Short Bio | Paragraph | Yes | |
| 9 | Available Days | Checkboxes | Yes | Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday |

**Confirmation message:**

```
Thank you! 🐾
You're on the CatCare early sitter list.
We'll contact you on WhatsApp when we're ready to onboard sitters in your area.
```

## Analytics events

Tracked only when `VITE_GA_MEASUREMENT_ID` is set (`src/services/analyticsService.ts`):

`page_view`, `owner_cta_click`, `sitter_cta_click`, `owner_google_form_open`,
`sitter_google_form_open`, `whatsapp_owner_click`, `whatsapp_sitter_click`, `faq_open`.

## Project structure

```
src/
  components/    Navbar, Hero, TrustStrip, ProblemSection, SolutionSection, HowItWorks,
                 DailyReportPreview, OwnerSection, SitterSection, SafetySection,
                 EarlyAccess, FAQ, WhatsAppSection, FinalCTA, Footer, WhatsAppButton,
                 MobileStickyCta
  services/      analyticsService
  data/          faqData
  utils/         whatsapp, leadCta (opens the Google Forms)
  config/        site.ts (brand, WhatsApp, GA, Google Form URLs, launch areas)
```

## Honesty policy

The page is pre-launch: no fake testimonials, user counts, ratings, "verified sitters" claims,
and no promise that CatCare stored user data. Keep it that way when editing copy.

## Quick start (local)

```bash
npm install          # 1. install dependencies
cp .env.example .env # 2. (optional) configure environment variables
npm run dev          # 3. run locally on http://localhost:8080
npm run build        # 4. production build
```

### Environment variables

| Variable | Purpose |
|---|---|
| `VITE_WHATSAPP_NUMBER` | WhatsApp number, digits only (`201032404246`) |
| `VITE_OWNER_GOOGLE_FORM_URL` | Google Form opened by every "I Need a Cat Sitter" CTA |
| `VITE_SITTER_GOOGLE_FORM_URL` | Google Form opened by every "Become a Cat Sitter" CTA |
| `VITE_GA_MEASUREMENT_ID` | Optional GA4 ID; empty disables analytics |
| `VITE_SITE_URL` | Canonical / Open Graph URL |

All values have production defaults in `src/config/site.ts`, so the app runs
without a `.env` file. Vite inlines `VITE_*` at build time — rebuild after changes.

### How the Owner Google Form works

Every owner CTA (hero, owner section, early access, final CTA, mobile sticky bar)
calls `goToOwnerForm()` in `src/utils/leadCta.ts`, which fires the
`owner_cta_click` + `owner_google_form_open` analytics events and opens
`siteConfig.ownerFormUrl` in a new tab (`noopener,noreferrer`). Responses are
collected in the linked Google Sheet, then followed up manually on WhatsApp.

### How the Sitter Google Form works

Sitter CTAs call `goToSitterForm()`, firing `sitter_cta_click` +
`sitter_google_form_open` and opening `siteConfig.sitterFormUrl` in a new tab.
Same Sheets + manual follow-up flow.

### How the WhatsApp integration works

`src/utils/whatsapp.ts` builds `https://wa.me/<VITE_WHATSAPP_NUMBER>?text=<encoded message>`
from the prefilled messages in `src/config/site.ts`. Used by the floating button,
the "Have questions?" section and the footer. If the number is empty, all
WhatsApp UI is hidden automatically.

### Deploying the static site

```bash
npm run build
```

Deploy to Vercel, Netlify or Cloudflare Pages (build command `npm run build`).
No backend, database, or server environment is required.
