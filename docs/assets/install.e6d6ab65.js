import{o as e,f as o,K as n}from"./@vue.c3443334.js";const p={class:"markdown-body"},a=n(`<h1>\u5B89\u88C5\u4F7F\u7528</h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 fluiv3</p><h2>\u5B89\u88C5</h2><p>\u4F7F\u7528npm \u6216 yarn \u5B89\u88C5</p><pre><code>npm install fluiv3
yarn add fluiv3
</code></pre><h2>\u5F15\u5165 fluiv3</h2><h3>\u5B8C\u6574\u5F15\u5165</h3><h4>\u9700\u8981\u6CE8\u610F\u7684\u662F css \u6837\u5F0F\u6587\u4EF6\u9700\u8981\u5355\u72EC\u5F15\u5165\u3002</h4><p>\u5728 main.js \u4E2D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><pre><code class="language-javascript">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
// \u5BFC\u5165\u7EC4\u4EF6\u5E93
import FUI from &#39;fluiv3&#39;
import &#39;../node_modules/fluiv3/dist/style.css&#39;

const app = createApp(App)
app.use(FUI)
app.mount(&#39;#app&#39;)
</code></pre><br><h2>\u6109\u5FEB\u5F00\u59CB</h2><h4>\u81F3\u6B64 fluiv3 \u5C31\u5F15\u5165\u5B8C\u6210\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528\u4E86\u3002</h4><pre><code class="language-html">&lt;!-- html --&gt;
&lt;f-button&gt;\u9ED8\u8BA4\u6309\u94AE&lt;/f-button&gt;
&lt;f-button type=&quot;primary&quot;&gt;\u4E3B\u8981\u6309\u94AE&lt;/f-button&gt;
</code></pre><h2>\u6309\u9700\u5F15\u7528</h2><h4>\u60A8\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u9700\u8981\u4F7F\u7528\u6309\u9700\u5F15\u7528\u7EC4\u4EF6\uFF0C\u6309\u9700\u5F15\u7528\u65F6\u4E0D\u9700\u8981\u4F7F\u7528 <code>app.use()</code> \u65B9\u6CD5\u6CE8\u518C\u3002</h4><pre><code class="language-javascript">/*js*/
import { fButton } from &#39;fluiv3&#39;;
</code></pre><pre><code class="language-html">&lt;!-- html --&gt;
&lt;f-button&gt;\u70B9\u51FB&lt;/f-button&gt;
</code></pre><br>`,19),r=[a],m={__name:"install",setup(s,{expose:t}){return t({frontmatter:{}}),(c,u)=>(e(),o("div",p,r))}};export{m as default};
