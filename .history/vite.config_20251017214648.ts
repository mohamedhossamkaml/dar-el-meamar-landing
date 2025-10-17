import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // function-based manualChunks groups heavy libraries into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react';
            if (id.includes('framer-motion')) return 'vendor_framer';
            if (id.includes('three')) return 'vendor_three';
            if (id.includes('lucide-react')) return 'vendor_icons';
            // group other node_modules into vendor
            return 'vendor';
          }
        },
      },
    },
  },
});
