# Racial Justice Centre — Landing Page

Official website for the **Racial Justice Centre**, Australia's first community legal service dedicated to racial justice.

**Live site:** [racialjustice.au](https://racialjustice.au)

---

## About

The Racial Justice Centre is a non-profit organisation that provides free legal assistance to individuals and communities affected by racial discrimination. Its purpose is to eliminate racism and racial injustice through the legal system, education, and reform.

---

## Tech Stack

| Technology | Version |
|---|---|
| [Next.js](https://nextjs.org/) | 15 (App Router) |
| [React](https://react.dev/) | 18 |
| TypeScript | 5 |
| [Tailwind CSS](https://tailwindcss.com/) | 3 |
| [shadcn/ui](https://ui.shadcn.com/) | — |
| [Framer Motion](https://www.framer.com/motion/) | 11 |
| [Embla Carousel](https://www.embla-carousel.com/) | 8 |
| [Headless UI](https://headlessui.com/) | 2 |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, donation, newsletter signup, partners |
| `/purpose` | Mission and values |
| `/team` | Staff and volunteer profiles |
| `/impact` | Community impact stories |
| `/work` | Legal work and policy submissions |
| `/events` | Event gallery with image carousels |
| `/education` | Educational resources and explainers |
| `/media` | Media coverage and social highlights |
| `/contact` | Contact information |

---

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** (preferred package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `GOOGLE_ANALYTICS_ID` | Google Analytics measurement ID (e.g. `G-XXXXXXX`) |

---

## Project Structure

```
src/
├── app/
│   ├── (sub)/          # Subpage routes (purpose, team, impact, work, events, education, media, contact)
│   ├── layout.tsx      # Root layout with header and footer
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # shadcn/ui primitives (button, carousel, separator)
│   ├── events/         # Events carousel
│   ├── media/          # Media and social post cards
│   └── ...             # Shared components (Hero, Header, Footer, Donation, Signup, etc.)
├── data/
│   ├── menuItems.ts    # Navigation links
│   └── siteDetails.ts  # Site metadata and configuration
└── lib/
    └── utils.ts        # Utility helpers

public/
├── images/             # All images (events, teams, media, partners, etc.)
├── files/              # PDFs (legal explainers, submissions)
└── video/              # Video assets
```

---

## Deployment

The site is deployed on **Vercel**. Pushes to the `main` branch trigger automatic deployments.

---

## Contributing

1. Branch off `main` for new features or fixes.
2. Follow the existing code style (TypeScript strict, Tailwind utility classes).
3. Submit a pull request for review before merging.

---

## License

Proprietary — all rights reserved by the Racial Justice Centre.
