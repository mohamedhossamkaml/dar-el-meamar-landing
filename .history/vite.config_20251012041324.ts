import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // أضف هذا السطر
  base: "/dar-el-meamar-landing/",
})