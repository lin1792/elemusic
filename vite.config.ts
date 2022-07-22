import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// elementplus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  base: './', // 打包路径
  server: {
    port: 3008, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://www.xxxx.com.cn',
        changeOrigin: true,
        rewrite: path => path.replace('/api', '')
      }
    }
  }
})
