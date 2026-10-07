import { defineConfig } from 'astro/config';

// CONFIRM: production domain (also in src/data/site.ts)
export default defineConfig({
  site: 'https://radlabs.tech',
  // Hide Astro's dev toolbar so the local preview looks like the real site.
  devToolbar: { enabled: false },
});
