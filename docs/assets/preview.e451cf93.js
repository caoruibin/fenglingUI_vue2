import{b as s,L as m,A as g,o as d,k as i,G as p,C as w,D as y,B as C,q as t,y as v,T as k,I as u,v as N,x as S}from"./@vue.710d6a65.js";import{_ as I}from"./index.666d976a.js";const h=o=>(N("data-v-42d32b52"),o=o(),S(),o),B={class:"pre-code-box"},D=h(()=>t("i",{class:"m-icon-copy"},null,-1)),V=[D],z={key:0,class:"language-html"},T=u("            "),$={class:"language-html"},j=u(`\r
        `),q=h(()=>t("i",{class:"m-icon-code"},null,-1)),A={__name:"preview",props:{comName:{type:String,default:"button"},demoName:{type:String,default:"demo1"}},setup(o){const n=o,e=s(!1),r=s("1px solid rgba(0,0,0,.06)"),_=()=>{e.value=!e.value,e.value?r.value="0":r.value="1px solid rgba(0,0,0,.06)"},c=s("");async function b(){c.value=await fetch(`/fenglinguiv2v3/packages/${n.comName}/doc/${n.demoName}.vue`).then(a=>a.text())}return m(()=>{b()}),(a,l)=>{const f=g("highlight");return d(),i("div",B,[e.value?(d(),i("span",{key:0,class:"m-copy",onClick:l[0]||(l[0]=(...x)=>a.copyCode&&a.copyCode(...x))},V)):p("",!0),w(k,{name:"slide-fade"},{default:y(()=>[e.value?C((d(),i("pre",z,[T,t("code",$," "+v(c.value)+" ",1),j])),[[f]]):p("",!0)]),_:1}),t("div",{class:"showCode",onClick:_},[t("span",null,v(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1),q])])}}};var L=I(A,[["__scopeId","data-v-42d32b52"]]);export{L as p};
