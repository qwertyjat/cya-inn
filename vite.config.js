import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deploying to GitHub Pages at https://<user>.github.io/<repo>/
// Set base to '/<repo-name>/' before building for Pages, or '/' for a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
