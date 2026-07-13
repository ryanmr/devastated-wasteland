# Devastated Wasteland

> It's a devastated wasteland. The life has been sucked out of it.
> — Kent Beck, on agile

A satirical single-page site. Rebuilt on Astro as a lean static build.

## Tech

- [Astro](https://astro.build) — static output, zero runtime framework
- Self-hosted `Monoton` + `Alata` fonts
- One tiny vanilla-JS island (the Cone of Uncertainty)

## Develop

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # static build -> dist/
pnpm preview  # serve the build
```

## Deploy

Static output in `dist/`. Deploys on Vercel (framework preset: Astro) or any
static host.
