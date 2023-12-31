import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'

// 获取应用实例对象
const app = createApp(App)
// 安装插件
app.use(ElementPlus)

console.log(import.meta.env)

// 测试代码
import axios from 'axios'

const result = axios({
    url: '/api/user/info',
    method: 'get'
})

console.log(result)

// 将应用挂载到挂载点上
app.mount('#app')
