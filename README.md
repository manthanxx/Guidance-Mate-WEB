# GuidanceMate Soft Launch (React + Tailwind + Framer Motion)

Modern React rebuild of the static GuidanceMate website with improved UI/UX, responsive layout, micro-interactions, and page transitions.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- React CountUp
- React Router DOM

## Project Structure

- src/components
- src/pages
- src/assets
- src/animations
- src/content

## Setup

1. Install dependencies: `npm install`
2. Run locally: `npm run dev`
3. Build for production: `npm run build`
4. Preview build: `npm run preview`

## Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Production Readiness

- Route-level code splitting is enabled.
- SPA rewrites are configured via [vercel.json](vercel.json).
- SEO essentials are added in [index.html](index.html) (title, description, Open Graph, Twitter, canonical).
- `robots.txt` and `sitemap.xml` are included in [public/robots.txt](public/robots.txt) and [public/sitemap.xml](public/sitemap.xml).
- Mobile navigation includes accessibility attributes.

## Notes

- Original text content from `index.html`, `features.html`, `download.html`, `team.html`, and `contact.html` has been preserved in React page content.
- Legacy static HTML files were removed from the project.
