import { defineConfig } from 'vite'
import path from 'path';
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(__dirname, "src"),
    },
    // extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.vue', '.mdx'],
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  server: {
    proxy: {
      // 代理的规则
      '/baidu': {
        target: 'https://aip.baidubce.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baidu/, '')
      },
    }
  }
})
