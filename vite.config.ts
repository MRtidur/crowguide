import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Only set base for production builds
  base: process.env.NODE_ENV === 'production' ? "/crowguide/" : "/",
  build: {
    outDir: "dist"
  }
})
  