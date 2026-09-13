# Mensola — Web

The landing page and beta sign-up site for Mensola. Built with Next.js 16 (App Router), TypeScript, and Vanilla CSS.

---

## Prerequisites

- **Node.js** 20+

---

## Getting Started

```bash
cd web

# Install dependencies
npm install

# Copy and configure the environment file (if applicable)
cp .env.example .env

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The page hot-reloads automatically as you make changes to files under `src/`.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the production bundle |
| `npm start` | Start the production server (after build) |
| `npm run lint` | Run ESLint |

---

## Environment Variables

Create a `.env` file in the `web/` directory if needed:

```env
# Example — add any required env vars here
NEXT_PUBLIC_API_URL=https://api.mensola.app
```

---

## Project Structure

```
web/
├── src/
│   └── app/            → Next.js App Router pages and layouts
│       ├── layout.tsx  → Root layout (metadata, fonts, global styles)
│       ├── page.tsx    → Home / landing page
│       └── globals.css → Global styles
├── public/             → Static assets (images, fonts, icons)
├── next.config.ts      → Next.js configuration
├── tsconfig.json       → TypeScript configuration
└── package.json
```

---

## Building for Production

```bash
npm run build
```

The output is placed in `.next/`. The site is configured for static export compatibility, so it can also be deployed to any static hosting provider.

```bash
# Run the built site locally
npm start
```

---

## Deployment

The recommended deployment target is **Vercel** — zero-config with Next.js.

1. Push the `web/` directory (or the full monorepo) to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Set the root directory to `web/` if deploying from the monorepo.
4. Add any required environment variables in the Vercel dashboard.
5. Deploy.

Alternatively, the site can be deployed to any host that supports Node.js or static exports (Netlify, Cloudflare Pages, etc.).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Vanilla CSS |
| Fonts | `next/font` (auto-optimised) |
| Linting | ESLint + `eslint-config-next` |
