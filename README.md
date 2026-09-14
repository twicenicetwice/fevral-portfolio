# FEVRAL Portfolio

React 19 + TypeScript + Vite + Tailwind CSS + Motion.

## Development

```sh
npm ci
npm run dev
```

## Validation and production build

```sh
npm run lint
npm run build
```

Build output: `dist`. Vercel preset: Vite. Build command: `npm run build`. Output directory: `dist`.

All required images are committed in `public`; the build checks them before bundling. See [ASSETS.md](ASSETS.md) for image mapping, compression and gallery decisions.

The gallery includes full-page design viewing, zoom, arrow navigation, keyboard controls, and prominent external links for the three website projects.
