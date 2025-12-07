import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: [
      'https://81f2-2402-e280-232c-113-1051-bad2-65be-1938.ngrok-free.app/'
    ]
  }
})
