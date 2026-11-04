# I’m Sorry, My Love 💜

A frontend only, mobile first apology story built with React, Vite, Framer Motion, Tailwind CSS, and Canvas Confetti.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Choose **Begin our little story** to start the six scene experience. The story advances automatically over about 85 seconds. Pause, resume, replay, and horizontal swipe controls are available during playback.

## Music

To enable the optional soundtrack, place an audio file at `public/music/romantic.mp3`. Music only starts after the visitor presses the music control. If the file is absent or playback is blocked, the control reports that music is unavailable and the story continues normally.

## Production build

```bash
npm run build
npm run preview
```

The static output is written to `dist/`. The project can be deployed to Vercel or Netlify with the build command `npm run build` and publish directory `dist`. Both platforms detect these defaults for Vite projects. No server or environment variables are required.

Tailwind CSS 3 is configured through `tailwind.config.js` and `postcss.config.js`; the animated scenes use additional CSS for precise keyframes and responsive layouts.
