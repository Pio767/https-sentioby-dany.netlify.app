// Cloudflare Pages Functions for SPA routing
// This ensures all routes are handled by index.html

export const onRequest: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  
  // Check if the request is for a static asset (has a file extension)
  const hasExtension = /\.\w+$/.test(url.pathname);
  
  // If it's not a static asset, serve index.html for SPA routing
  if (!hasExtension && url.pathname !== '/index.html') {
    return fetch(new URL('/index.html', request.url), {
      method: request.method,
      headers: request.headers,
    });
  }
  
  // Otherwise, let Cloudflare serve the file normally
  return fetch(request);
};

