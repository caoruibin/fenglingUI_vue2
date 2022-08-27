/*
 * @Description: 配置
 * @Author: caoruibin
 * @Date: 2022-07-02 02:49:16
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-06 00:44:40
 * @FilePath: \flUiV3\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { resolve } from 'path'

// function pathResolve(dir){
//   return resolve(process.cwd(), '.', dir)
// };
/************************************* 路径配置 start ********************************/
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const alias = {
  '@': pathResolve("src"),
  '~': pathResolve("packages")
}
export default defineConfig({
  // base: './',
  base: '/fenglinguiv2v3/',
  plugins: [
    vue(
      {
        include: [/\.md$/, /\.vue/],
      }
    ),
    Markdown()],
  // 打包
  build: {
    // 解决 npm打包的时候报 isCE 的错误
    // rollupOptions: {
    //   external: ["vue"],
    //   output: {
    //     globals: {
    //       vue: "Vue"
    //     }
    //   }
    // },
    // lib: {
    //   entry: './packages/index.js', // 打包入口文件
    //   name: 'fluiv3'
    // },
    // chunkSizeWarningLimit: 1500,
    // 组件库文档部署上线打包
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    outDir: 'docs'
  },
  // 路径
  resolve: {
    alias
    // alias: {
    //   "@": resolve(__dirname, "src"),
    //   '~': resolve(__dirname, "packages")
    // }
  },
  // 配置全局的scss
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/assets/styles/style.scss" as *;'
      }
    },
    extract: true,
  },
  // 配置启动端口
  server: {
    host: '0.0.0.0', //ip地址
    port: 8080, //端口号
    open: true //启动后是否自动打开浏览器
  }
})
