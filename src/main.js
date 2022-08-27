import { createApp } from 'vue'
import App from './App.vue'
import FUI from '../packages/index'
// 引入全局样式
import './styles/index.scss';
import '~/iconfont/iconfont.css';
// import FUI from 'fluiv3'
// import '../node_modules/fluiv3/dist/style.css';
// import 'fluiv3/dist/style.css';
// 全局样式
import './styles/index.scss';
import hljs from 'highlight.js'
const app = createApp(App)
// console.log('@@FUI8888',FUI);
import router from './router'
app.use(FUI)
app.use(router)
app.mount('#app')
// 自定义指令
app.directive("highlight", function (el) {
    const blocks = el.querySelectorAll("pre code")
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    });
})
