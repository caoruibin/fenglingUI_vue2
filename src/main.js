import { createApp } from 'vue'
import App from './App.vue'
import FUI from '../packages/index'
import router from './router'
// 全局样式
import './styles/index.scss';
import hljs from 'highlight.js'
// import "highlight.js/styles/color-brewer.css"
const app = createApp(App)
app.use(FUI)
app.use(router)
app.mount('#app')
// 自定义指令
app.directive("highlight",function(el){
    const blocks = el.querySelectorAll("pre code")
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
})
