import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    // happy-domの方が、jsdomよりもパフォーマンスがいい。
    setupFiles: ["./vitest-setup.ts"],
    // setupFiles: ["./setupTests.ts"]
    coverage: {
      exclude: [
        '**/custom-pattern/**',
        //  ...coverageConfigDefaults.exclude
      ]
    },

  },
})
