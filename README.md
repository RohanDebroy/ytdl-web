# Ytdl-Web Interface

A simple web interface for yt_dlp built using [Next.js](https://nextjs.org/) and [Python](https://www.python.org/).

## How to start server

If running locally go to `next.config.js` and uncomment the rewites function.

run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) within your browser to see the result.

## Deploy your own

Deploy this using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/RohanDebroy/ytdl-web)

## FAQ

### 1. Why using python for the backend?

Initially I tried using youtube-dl-exec for node but once it was deployed to vercel, I found out that it does not work without a python runtime. Searched all over the internet incase I can assign a python runtime along with a node runtime in Vercel without a separate deployment. In the end I ended up using python as backend.

### 2. Getting access restriction error.

There are a lot of different cases where this might happen. But mostly it's because of too much traffic from the same server so the website might have rate limited us for some time.

## Notes

- special thanks to the youtube-dl-web project by [Saanuregh](https://github.com/saanuregh/youtube-dl-web). I understood how to deploy python and nextjs under a single repo on vercel.
