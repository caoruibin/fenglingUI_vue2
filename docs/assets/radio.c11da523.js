import{_}from"./index.a3bda2cd.js";import{b as p,o as a,f as r,z as o,k as s}from"./@vue.c3443334.js";import{p as l}from"./preview.eba6f6e3.js";import"./highlight.js.9fe688eb.js";import"./vue-router.f5a23646.js";/* empty css                                                            */const f={name:"demo1",data(){return{options:[{name:"\u4E2D\u56FD1",id:"1"},{name:"\u4E2D\u56FD2",id:"2",disabled:!0},{name:"\u4E2D\u56FD3",id:"3"},{name:"\u4E2D\u56FD4",id:"4"}]}},methods:{change(e){console.log("\u70B9\u51FB\u83B7\u53D6\u7684\u6570\u636E",e)}}},u={class:"container"};function h(e,n,i,d,t,c){const m=p("l-radio");return a(),r("div",u,[o(m,{options:t.options,filedLabel:"name",filedValue:"id",onChange:c.change},null,8,["options","onChange"])])}var v=_(f,[["render",h]]);const g={class:"markdown-body"},b=s("h2",null,"Radio \u7EC4\u4EF6",-1),k=s("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),w={__name:"radio",setup(e,{expose:n}){return n({frontmatter:{}}),(d,t)=>(a(),r("div",g,[b,k,o(v),o(l,{comName:"/vue2/radio",demoName:"demo1"})]))}};export{w as default};
