import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { dependencies } from './package.json';

function renderChunks(deps: Record<string, string>) {
  const chunks = {};

  Object.keys(deps).forEach((key) => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 70,
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@types', replacement: path.resolve(__dirname, 'src/types/index.ts') },
      { find: '@store', replacement: path.resolve(__dirname, 'src/store/index.ts') },
      { find: '@app', replacement: path.resolve(__dirname, 'src/app/index.ts') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages/index.ts') },
      { find: '@widgets', replacement: path.resolve(__dirname, 'src/widgets/index.ts') },
      { find: '@features', replacement: path.resolve(__dirname, 'src/features/index.ts') },
      { find: '@entities', replacement: path.resolve(__dirname, 'src/entities/index.ts') },
      { find: '@shared/ui', replacement: path.resolve(__dirname, 'src/shared/ui/index.ts') },
      { find: '@shared/icons', replacement: path.resolve(__dirname, 'src/shared/icons/index.ts') },
      { find: '@shared/utils', replacement: path.resolve(__dirname, 'src/shared/utils/index.ts') },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  server: {
    host: true,
    port: 4173,
    watch: {
      usePolling: true,
    },
  },
});
