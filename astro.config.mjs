// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { sitemapIntegration } from './src/integrations/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.virsalabs.io',
  integrations: [
    tailwind(),
    react(),
    sitemapIntegration(),
  ],
  // Enable dark mode by default
  darkMode: 'class',
  // Ensure public directory is served
  publicDir: 'public',
  // Build configuration
  build: {
    // Ensure assets are properly handled
    assets: 'assets',
  },
});
