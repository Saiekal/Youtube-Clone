# YouTube Clone

A responsive YouTube Clone built with React and Vite, powered by the YouTube Data API v3.

🔗 **Live Demo:** [youtube-clone-7scs.vercel.app](https://youtube-clone-7scs.vercel.app)

## Features
- Fetches real-time trending videos using the YouTube Data API v3
- Collapsible sidebar navigation
- Responsive navbar with search bar
- Video thumbnails, titles, and channel details
- Video player page with React Router

## Tech Stack
- React
- Vite
- React Router
- YouTube Data API v3
- CSS Modules

## Getting Started

1. Clone the repo
```bash
   git clone https://github.com/Saiekal/Youtube-Clone.git
   cd Youtube-Clone
```

2. Install dependencies
```bash
   npm install
```

3. Create a `.env` file in the root directory and add your YouTube Data API key

4. Run the development server
```bash
   npm run dev
```

## Deployment
Deployed on [Vercel](https://vercel.com). Note: if deploying your own copy, make sure to add `VITE_YOUTUBE_API_KEY` under your Vercel project's **Settings → Environment Variables**, then redeploy.
