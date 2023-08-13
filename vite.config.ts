import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import paht from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
// 一般是用来配置跨域、代理
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(),
    viteMockServe({
      localEnabled: command === 'serve',
      mockPath: './mock'
    })
    ],
    resolve: {
      alias: {
        "@": paht.resolve("./src")
      }
    }
  }
})
