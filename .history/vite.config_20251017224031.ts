// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 💡 تأكد من أن الإعداد هو EXACTLY هذا:
  base: "/dar-el-meamar-landing/",
})