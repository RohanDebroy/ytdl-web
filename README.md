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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Deploy your own
Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/RohanDebroy/ytdl-web)

## FAQ
### 1. Why not using NextJS Api endpoints?
I was using youtube-dl-exec but once it was deployed to vercel it didnot work because it requires a python runtime. I donot know how to assign python runtime in Vercel without using a python file.
### 2. Some URL's are not working
If using the deployed version then, most probably they are ip restricted. Thought of a solution, will test and implement if working.
