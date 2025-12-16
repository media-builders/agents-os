# Node Home

Next-style app directory layout with a bold landing page and sample API routes.

## Run it

```sh
npm install      # installs next, react, react-dom
npm run dev      # http://localhost:3000
```

## Structure

- `app/page.js` + `app/page.module.css` - the home page UI.
- `app/layout.js` + `app/globals.css` - global wrapper and styles.
- `app/api/frontend/route.js`, `app/api/backend/route.js` - sample API responses.
- `components/`, `prisma/`, `utils/` - empty placeholders (tracked with `.gitkeep`) to mirror the requested layout.
- `public/` - place static assets (favicon, images, etc.).

## API routes

- `GET /api/frontend` - sample frontend payload.
- `GET /api/backend` - sample backend payload.

## Notes

- The project now uses Next.js; install dependencies before running.
- Adjust `next.config.mjs` or `jsconfig.json` if you add path aliases or strictness settings.
- `public/` holds only static assets (favicons, SVGs, images); the active UI lives in `app/page.js`.
