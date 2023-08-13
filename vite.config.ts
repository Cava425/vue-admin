import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import paht from 'path'

// https://vitejs.dev/config/
// 一般是用来配置跨域、代理
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": paht.resolve("./src")
    }
  }
})
