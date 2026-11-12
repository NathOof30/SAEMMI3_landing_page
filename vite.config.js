import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        accesJeu: resolve(rootDir, 'acces-jeu.html'),
        mentionsLegales: resolve(rootDir, 'mentions-legales.html'),
        confidentialite: resolve(rootDir, 'confidentialite.html'),
        reglementConcours: resolve(rootDir, 'reglement-concours.html'),
        contact: resolve(rootDir, 'contact.html'),
      },
    },
  },
});
