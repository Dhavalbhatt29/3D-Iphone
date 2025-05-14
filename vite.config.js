import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react",
      // Include other config like authToken, release, etc.
    })
  ],
  build: {
    sourcemap: true
  }
})
