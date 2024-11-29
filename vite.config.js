import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    sourcemapFile: "/static",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  }
})
