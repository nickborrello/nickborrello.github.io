import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import { optimizeVideos } from 'vite-plugin-optimize-videos';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    optimizeVideos(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024, // 10 MB
      },
      includeAssets: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif}'],
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) {
              return 'vendor_react-dom';
            }
            if (id.includes('react')) {
              return 'vendor_react';
            }
            if (id.includes('framer-motion')) {
              return 'vendor_framer-motion';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
