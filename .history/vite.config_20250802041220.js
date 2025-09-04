import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
node -v
npm -v
npx tailwindcss -v


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
