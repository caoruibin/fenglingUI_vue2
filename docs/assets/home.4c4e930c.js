import{u as x}from"./vue-router.e9149973.js";import{H as g}from"./header.1e8b8e9a.js";import{_ as b,m}from"./index.666d976a.js";import{b as y,f as k,o as e,k as a,C as u,q as t,F as r,E as f,u as w,y as _,m as I}from"./@vue.710d6a65.js";import"./highlight.js.97c65590.js";const C={class:"main-container"},z={class:"sidebar"},B={class:"title"},L=["onClick"],S={class:"app-main"},E={__name:"home",setup(F){console.log("@menuList",m);const h=x(),o=y(sessionStorage.getItem("mIndex")||"0"),v=(c,d,n)=>{o.value=d+"-"+n,h.push({path:c.path}),sessionStorage.setItem("mIndex",o.value)};return(c,d)=>{const n=k("router-view");return e(),a(r,null,[u(g),t("div",C,[t("aside",null,[t("div",z,[(e(!0),a(r,null,f(w(m),(s,l)=>(e(),a("ul",{key:s},[t("p",B,_(s.name),1),(e(!0),a(r,null,f(s.list,(i,p)=>(e(),a("li",{key:i,class:I({active:o.value==l+"-"+p}),onClick:H=>v(i,l,p)},_(i.name),11,L))),128))]))),128))])]),t("main",S,[u(n)])])],64)}}};var P=b(E,[["__scopeId","data-v-7c988fd6"]]);export{P as default};
