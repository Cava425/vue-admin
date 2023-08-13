import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// 一般是用来配置跨域、代理
export default defineConfig({
  plugins: [vue()],
})
