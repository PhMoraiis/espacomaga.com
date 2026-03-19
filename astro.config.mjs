import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  integrations: [react()],
  fonts: [{
    provider: fontProviders.google(),
    name: 'Great Vibes',
    cssVariable: '--font-great-vibes',
  },
  {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
  },
  {
      provider: fontProviders.google(),
      name: 'Jost',
      cssVariable: '--font-jost',
  }],
  vite: {
    plugins: [tailwindcss()]
  }
});