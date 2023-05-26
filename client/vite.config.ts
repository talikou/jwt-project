/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import viteSvgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), viteSvgr(), tsconfigPaths()],
  base: '/',
  server: {
    port: 3000,
    open: 'http://127.0.0.1:3000/',
    proxy: {
      '/api': {
        target: 'http://localhost:5001/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      app: '/src/app',
      entities: '/src/entities',
      features: '/src/features',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
  },
})
