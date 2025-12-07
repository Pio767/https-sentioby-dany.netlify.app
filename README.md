# Sentio by Dany - Wellness Studio

Modern, minimalist digital business card for a massage and therapy studio.

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Deploy to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
2. Click "Create a project"
3. Connect your Git repository (GitHub/GitLab/Bitbucket)
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (or leave empty)
   - **Node version:** `20` (or latest LTS)

5. Click "Save and Deploy"

### Option 2: Via Wrangler CLI

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   npm run build
   wrangler pages deploy dist
   ```

### Important Notes for Cloudflare Pages

- ✅ The `_redirects` file is already configured for SPA routing
- ✅ All dependencies are bundled in the production build
- ✅ No environment variables are required for basic functionality
- ✅ The site uses external CDN for images (Unsplash) and fonts (Google Fonts)

### Environment Variables (Optional)

If you need to use Gemini API, add environment variables in Cloudflare Pages:
- Go to your project → Settings → Environment Variables
- Add `GEMINI_API_KEY` if needed

## Project Structure

```
├── components/          # React components
├── dist/               # Production build output
├── public/             # Static assets (includes _redirects)
├── index.html          # Main HTML file
├── index.tsx           # React entry point
├── App.tsx             # Main app component
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icons
