import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        remote: process.env.NODE_ENV === 'production' ? 
          'https://mfe-module.vercel.app/assets/remoteEntry.js' : 
          'http://localhost:5001/assets/remoteEntry.js',
      },
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
  },
  server: {
    hmr: false
  }
})
