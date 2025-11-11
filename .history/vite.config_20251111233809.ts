// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/dar-el-meamar-landing/",
  build: {
    // Increase chunk size warning limit to 2000 KB
    chunkSizeWarningLimit: 2000,

    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
