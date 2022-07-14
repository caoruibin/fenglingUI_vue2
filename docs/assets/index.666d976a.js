import{f as G,o as d,j as se,k as r,l as te,m as h,q as p,t as q,v as ae,x as oe,y as m,z as ne,b as _,c as k,h as U,A as re,B as H,C as x,D as w,T as J,F as g,E as y,G as K,H as ie,I as S,J as le,K as de,u as V,r as ce,L as ue,M as pe}from"./@vue.710d6a65.js";import{c as fe,a as be}from"./vue-router.e9149973.js";import{H as ve}from"./highlight.js.97c65590.js";const _e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};_e();const he={__name:"App",setup(e){return(t,a)=>{const i=G("router-view");return d(),se(i)}}};var v=(e,t)=>{const a=e.__vccOpts||e;for(const[i,o]of t)a[i]=o;return a};const me={name:"lButton",props:{type:{type:String,default:"default"},disabled:Boolean,round:{type:Boolean,default:!1}},computed:{fClass(){return["f-button",`f-button-${this.type}`,this.disabled?"t-button-disabled":"",this.round?"t-button-round":""]}},methods:{}},xe=["disabled"];function ge(e,t,a,i,o,n){return d(),r("button",{class:h(n.fClass),disabled:a.disabled},[te(e.$slots,"default",{},void 0,!0)],10,xe)}var $=v(me,[["render",ge],["__scopeId","data-v-2084641a"]]);$.install=e=>{e.component($.name,$)};const ye={name:"lInput",data(){return{modelValue:""}},props:{placeholder:{type:String,default:"\u8BF7\u8F93\u5165..."},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},computed:{fClass(){return["f-input",this.disabled?"f-input-disabled":""]},clearClass(){return[{display:this.clearable&&this.modelValue?"block":"none"}]}},methods:{input(e){this.modelValue=e.target.value,this.$emit("inputValue",e.target.value)},clearInput(){this.modelValue=""}}},ke=e=>(ae("data-v-1381b9a0"),e=e(),oe(),e),$e=["value","placeholder","disabled"],we=ke(()=>p("i",null,"X",-1)),Se=[we];function Ce(e,t,a,i,o,n){return d(),r("div",{class:h(n.fClass)},[p("input",{type:"text",value:o.modelValue,onInput:t[0]||(t[0]=(...l)=>n.input&&n.input(...l)),placeholder:a.placeholder,disabled:a.disabled},null,40,$e),p("span",{class:"clear-icon",style:q(n.clearClass),onClick:t[1]||(t[1]=(...l)=>n.clearInput&&n.clearInput(...l))},Se,4)],2)}var E=v(ye,[["render",Ce],["__scopeId","data-v-1381b9a0"]]);E.install=e=>{e.component(E.name,E)};const Ie={name:"lTextarea",data(){return{n:"0",modelValue:""}},props:{rows:{type:Number,default:5},cols:{type:Number,default:30},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:"\u8BF7\u8F93\u5165"},maxlength:{type:Number,default:100},resize:{type:Boolean,default:!0}},computed:{fClass(){return{"f-textarea":!0,"f-textarea-disabled":this.disabled}},fStyle(){return{resize:this.resize?"auto":"none"}}},methods:{input(e){this.n=e.target.value.length,this.n>this.maxlength&&(this.n=this.maxlength),this.modelValue=e.target.value,this.$emit("fl-input",e.target.value)},focus(e){this.$emit("fl-focus",e.target.value)},blur(e){this.$emit("fl-blur",e.target.value)}}},Ve=["cols","rows","value","disabled","readonly","placeholder","maxlength"],Ee={class:"max-length-inline"};function Le(e,t,a,i,o,n){return d(),r("div",{class:h(n.fClass)},[p("textarea",{name:"",id:"",cols:a.cols,rows:a.rows,value:o.modelValue,onInput:t[0]||(t[0]=(...l)=>n.input&&n.input(...l)),disabled:a.disabled,readonly:a.readonly,placeholder:a.placeholder,onFocus:t[1]||(t[1]=(...l)=>n.focus&&n.focus(...l)),onBlur:t[2]||(t[2]=(...l)=>n.blur&&n.blur(...l)),maxlength:a.maxlength,style:q(n.fStyle)},null,44,Ve),p("div",Ee,m(o.n)+"/"+m(a.maxlength),1)],2)}var L=v(Ie,[["render",Le],["__scopeId","data-v-be1ddc1e"]]);L.install=e=>{e.component(L.name,L)};const Ae={name:"lSpace",props:{inline:{type:Boolean,default:!0},size:{type:Array,default:[10,10]}},setup(e){const t=ne(),a=_([]),i=k(()=>({display:e.inline?"inline-flex":"flex",gap:e.inline?`${e.size[0]}px ${e.size[1]}px`:`${e.size[0]}px`,"flex-direction":e.inline?"inherit":"column","align-items":"center","flex-wrap":"wrap",width:"fit-content"}));return t.default().forEach((o,n)=>{a.value.push(U("div",{className:"t-space-item",style:"width:fit-content;"},o))}),()=>[U("div",{className:"t-space",style:i.value},a.value)]}},Oe={class:"f-space"};function ze(e,t,a,i,o,n){return d(),r("div",Oe)}var A=v(Ae,[["render",ze],["__scopeId","data-v-94b367ae"]]);A.install=e=>{e.component(A.name,A)};const je={name:"lSelect",data(){return{selectVal:this.modelValue,positionShow:!1,activeIndex:-1}},props:{options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},filedLabel:{type:String,default:"label"},filedValue:{type:String,default:"value"},placeholder:{type:String,default:"\u8BF7\u9009\u62E9..."},modelValue:String},mounted(){this.init()},directives:{clickOutSide:{beforeMount(e,t){console.log(e);let a=i=>{t.instance.disabled==!1&&(e.contains(i.target)&&i.target.className.indexOf("item-li")==-1?t.instance.positionShow=!0:!i.target.className.indexOf("item-disabled-li")==-1&&(t.instance.positionShow=!1))};document.addEventListener("click",a)}}},methods:{init(){this.options.forEach((e,t)=>{e[this.filedValue]==this.modelValue&&(this.selectVal=e[this.filedLabel],this.activeIndex=t)})},change(e,t){e.disabled||(this.activeIndex=t,this.selectVal=e[this.filedLabel],this.positionShow=!this.positionShow,this.$emit("change",e))}}},Te={class:"f-select"},Be=["value","disabled","placeholder"],Re={key:0,class:"t-position-box"},Pe=["onClick"];function De(e,t,a,i,o,n){const l=re("clickOutSide");return H((d(),r("div",Te,[p("input",{type:"text",readonly:"",value:o.selectVal,disabled:a.disabled,placeholder:a.placeholder},null,8,Be),x(J,{name:"fade"},{default:w(()=>[o.positionShow?(d(),r("div",Re,[(d(!0),r(g,null,y(a.options,(s,c)=>(d(),r("li",{key:c,onClick:u=>n.change(s,c),class:h([{"item-disabled-li":s.disabled,"item-active-li":o.activeIndex==c},"item-li"])},m(s[a.filedLabel]),11,Pe))),128))])):K("",!0)]),_:1})])),[[l]])}var O=v(je,[["render",De],["__scopeId","data-v-39e42672"]]);O.install=e=>{e.component(O.name,O)};const Q={name:"LRadio",data(){return{radioIndex:"",isInline:"inline-flex"}},props:{options:{type:Array,default:()=>[]},inline:{type:Boolean,default:!0},filedLabel:{type:String,default:"label"},filedValue:{type:String,default:"value"},customColor:{type:String,default:"#409eff"}},watch:{inline:{handler(e,t){console.log("@newVal",e),e?this.isInline="inline-flex":this.isInline="flex"},deep:!0,immediate:!0}},computed:{},methods:{change(e,t){e.disabled||(this.radioIndex=t,this.$emit("change",e))}}},Y=()=>{ie(e=>({"0138d354":e.isInline,"920bf0c2":e.customColor}))},Z=Q.setup;Q.setup=Z?(e,t)=>(Y(),Z(e,t)):Y;const Fe=Q,Ne={class:"f-radio"},Me=["onClick"];function Ue(e,t,a,i,o,n){return d(),r("div",Ne,[(d(!0),r(g,null,y(a.options,(l,s)=>(d(),r("div",{class:h(["f-radio-item",{"f-radio-disabled-item":l.disabled}]),key:s,onClick:c=>n.change(l,s)},[p("span",{class:h({active:o.radioIndex==s})},null,2),S(" "+m(l[a.filedLabel]),1)],10,Me))),128))])}var z=v(Fe,[["render",Ue],["__scopeId","data-v-68501c5c"]]);z.install=e=>{e.component(z.name,z)};const qe={name:"lTree",data(){return{val:"",isShow:!1,newOptions:this.options}},props:{options:{type:Array,default:()=>[]}},methods:{isOpen(e){e.isOpened=!e.isOpened}}},He={class:"container"},Je=["onClick"],Ke={key:0};function We(e,t,a,i,o,n){const l=G("f-tree");return d(),r("div",He,[(d(!0),r(g,null,y(a.options,(s,c)=>(d(),r("li",{key:c,onClick:le(u=>n.isOpen(s),["stop"])},[S(m(s.label)+" ",1),x(J,{name:"slide-fade"},{default:w(()=>[s.children&&s.children.length?H((d(),r("ul",Ke,[x(l,{options:s.children},null,8,["options"])],512)),[[de,s.isOpened]]):K("",!0)]),_:2},1024)],8,Je))),128))])}var j=v(qe,[["render",We],["__scopeId","data-v-2f4fbd99"]]);j.install=e=>{e.component(j.name,j)};const Xe={class:"container"},Ge=["multiple"],Qe={class:"fileList-box"},Ye=["onClick"],Ze={name:"lUpload",components:{lButton:$},data(){return{fileList:[],isActive:!1}},props:{multiple:{type:Boolean,default:!1},label:{type:String,default:"\u9009\u62E9\u6587\u4EF6"},btnType:{type:String,default:"success"}},mounted(){this.dropFn()},methods:{fileChange(){this.$refs.inpRef.click()},inpChange(e){this.fileList.unshift(...e.target.files)},deleteFn(e){this.fileList.splice(e,1)},dropFn(){let e=this.$refs.areaRef;e.addEventListener("drop",t=>{t.stopPropagation(),t.preventDefault(),this.fileList.unshift(...t.dataTransfer.files),this.isActive=!1},!1),e.addEventListener("dragleave",t=>{t.stopPropagation(),t.preventDefault(),this.isActive=!1}),e.addEventListener("dragenter",t=>{t.stopPropagation(),t.preventDefault(),this.isActive=!0}),e.addEventListener("dragover",t=>{t.stopPropagation(),t.preventDefault(),this.isActive=!0})}}},et=Object.assign(Ze,{setup(e){return(t,a)=>(d(),r("div",Xe,[p("input",{type:"file",class:"file-input",ref:"inpRef",onChange:a[0]||(a[0]=(...i)=>t.inpChange&&t.inpChange(...i)),multiple:e.multiple},null,40,Ge),x($,{onClick:t.fileChange,type:e.btnType},{default:w(()=>[S(m(e.label),1)]),_:1},8,["onClick","type"]),p("div",Qe,[(d(!0),r(g,null,y(t.fileList,(i,o)=>(d(),r("li",{key:o},[p("span",null,m(i.name),1),p("span",{class:"delete-btn",onClick:n=>t.deleteFn(o)},"\u5220\u9664",8,Ye)]))),128))]),p("div",{class:h(["area-box",{activeArea:t.isActive}]),onClick:a[1]||(a[1]=(...i)=>t.fileChange&&t.fileChange(...i)),ref:"areaRef"},null,2)]))}});var T=v(et,[["__scopeId","data-v-e83cff6e"]]);T.install=e=>{e.component(T.name,T)};const tt=["disabled"],at={name:"fButton"},ot=Object.assign(at,{props:{type:{type:String,default:"default"},disabled:Boolean,round:{type:Boolean,default:!1}},setup(e){const t=e,a=k(()=>["f-button",`f-button-${t.type}`,t.disabled?"t-button-disabled":"",t.round?"t-button-round":""]);return(i,o)=>(d(),r("button",{class:h(V(a)),disabled:e.disabled},[te(i.$slots,"default",{},void 0,!0)],10,tt))}});var I=v(ot,[["__scopeId","data-v-4584a99d"]]);I.install=e=>{e.component(I.name,I)};const nt=e=>(ae("data-v-68b8a3c3"),e=e(),oe(),e),it=["value","placeholder","disabled"],lt=nt(()=>p("i",null,"X",-1)),dt=[lt],st={name:"fInput"},rt=Object.assign(st,{props:{modelValue:String|Number,placeholder:{type:String,default:"\u8BF7\u8F93\u5165..."},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,i=k(()=>["f-input",a.disabled?"f-input-disabled":""]),o=k(()=>[{display:a.clearable&&a.modelValue?"block":"none"}]),n=s=>{console.log("@",s.target.value),t("update:modelValue",s.target.value)},l=()=>{t("update:modelValue","")};return(s,c)=>(d(),r("div",{class:h(V(i))},[p("input",{type:"text",value:e.modelValue,onInput:n,placeholder:e.placeholder,disabled:e.disabled},null,40,it),p("span",{class:"clear-icon",style:q(V(o)),onClick:l},dt,4)],2))}});var B=v(rt,[["__scopeId","data-v-68b8a3c3"]]);B.install=e=>{e.component(B.name,B)};const ct=["cols","rows","value","disabled","readonly","placeholder","maxlength"],ut={class:"max-length-inline"},pt={name:"fTextarea"},ft=Object.assign(pt,{props:{modelValue:String,rows:{type:Number,default:5},cols:{type:Number,default:30},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},placeholder:{type:String,default:"\u8BF7\u8F93\u5165"},maxlength:{type:Number,default:100},resize:{type:Boolean,default:!0}},emits:["update:modelValue","focus","blur"],setup(e,{emit:t}){const a=e,i=_(0),o=u=>{i.value=u.target.value.length,i.value>a.maxlength&&(i.value=a.maxlength),t("update:modelValue",u.target.value)},n=k(()=>({"f-textarea":!0,"f-textarea-disabled":a.disabled})),l=k(()=>({resize:a.resize?"auto":"none"})),s=u=>{t("focus",u),console.log("foucs",u.target.value)},c=u=>{t("blur",u),console.log("blur",u.target.value)};return(u,f)=>(d(),r("div",{class:h(V(n))},[p("textarea",{name:"",id:"",cols:e.cols,rows:e.rows,value:e.modelValue,onInput:o,disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder,onFocus:s,onBlur:c,maxlength:e.maxlength,style:q(V(l))},null,44,ct),p("div",ut,m(i.value)+"/"+m(e.maxlength),1)],2))}});var R=v(ft,[["__scopeId","data-v-6d355baf"]]);R.install=e=>{e.component(R.name,R)};const bt={name:"fSpace",props:{inline:{type:Boolean,default:!0},size:{type:Array,default:[10,10]}},setup(e){const t=ne(),a=_([]),i=k(()=>({display:e.inline?"inline-flex":"flex",gap:e.inline?`${e.size[0]}px ${e.size[1]}px`:`${e.size[0]}px`,"flex-direction":e.inline?"inherit":"column","align-items":"center","flex-wrap":"wrap",width:"fit-content"}));return t.default().forEach((o,n)=>{a.value.push(U("div",{className:"t-space-item",style:"width:fit-content;"},o))}),()=>[U("div",{className:"t-space",style:i.value},a.value)]}},vt={class:"f-space"};function _t(e,t,a,i,o,n){return d(),r("div",vt)}var P=v(bt,[["render",_t],["__scopeId","data-v-2d01056e"]]);P.install=e=>{e.component(P.name,P)};const ht={class:"f-select"},mt=["value","disabled","placeholder"],xt={key:0,class:"t-position-box"},gt=["onClick"],yt={name:"fSelect"},kt=Object.assign(yt,{props:{options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},filedLabel:{type:String,default:"label"},filedValue:{type:String,default:"value"},placeholder:{type:String,default:"\u8BF7\u9009\u62E9..."},modelValue:String},emits:["change","update:modelValue"],setup(e,{emit:t}){const a=e,i=_(a.modelValue),o=_(!1),n=_(-1);a.options.forEach((c,u)=>{c[a.filedValue]==a.modelValue&&(i.value=c[a.filedLabel],n.value=u)}),console.log("@props",a.options);const l={beforeMount(c){console.log(c);let u=f=>{a.disabled==!1&&(c.contains(f.target)&&f.target.className.indexOf("item-li")==-1?o.value=!0:!f.target.className.indexOf("item-disabled-li")==-1&&(o.value=!1))};document.addEventListener("click",u)}},s=(c,u)=>{c.disabled||(console.log("@@@@@",c),console.log("@@value",c[a.filedValue]),n.value=u,i.value=c[a.filedLabel],o.value=!o.value,t("change",c),t("update:modelValue",c[a.filedValue]))};return(c,u)=>H((d(),r("div",ht,[p("input",{type:"text",readonly:"",value:i.value,disabled:e.disabled,placeholder:e.placeholder},null,8,mt),x(J,{name:"fade"},{default:w(()=>[o.value?(d(),r("div",xt,[(d(!0),r(g,null,y(e.options,(f,C)=>(d(),r("li",{key:C,onClick:X=>s(f,C),class:h([{"item-disabled-li":f.disabled,"item-active-li":n.value==C},"item-li"])},m(f[e.filedLabel]),11,gt))),128))])):K("",!0)]),_:1})])),[[l]])}});var D=v(kt,[["__scopeId","data-v-1941e1ca"]]);D.install=e=>{e.component(D.name,D)};const $t={class:"f-radio"},wt=["onClick"],St={name:"fRadio"},Ct=Object.assign(St,{props:{options:{type:Array,default:()=>[]},inline:{type:Boolean,default:!0},filedLabel:{type:String,default:"label"},filedValue:{type:String,default:"value"},customColor:{type:String,default:"#409eff"}},emits:["change"],setup(e,{emit:t}){const a=e;ie(l=>({ac56a0c8:o.value,c7f1004a:a.customColor}));const i=_(-1),o=_("inline-flex");a.inline?o.value="inline-flex":o.value="flex";const n=(l,s)=>{l.disabled||(i.value=s,t("change",l))};return(l,s)=>(d(),r("div",$t,[(d(!0),r(g,null,y(e.options,(c,u)=>(d(),r("div",{class:h(["f-radio-item",{"f-radio-disabled-item":c.disabled}]),key:u,onClick:f=>n(c,u)},[p("span",{class:h({active:i.value==u})},null,2),S(" "+m(c[e.filedLabel]),1)],10,wt))),128))]))}});var F=v(Ct,[["__scopeId","data-v-b45c3864"]]);F.install=e=>{e.component(F.name,F)};const It={class:"container"},Vt=["onClick"],Et={key:0},Lt={name:"fTree"},At=Object.assign(Lt,{props:{options:{type:Array,default:()=>[]}},setup(e){const t=e;_("");const a=_(!1);_(t.options);const i=o=>{o.isOpened=!o.isOpened};return console.log("@isShow",a),(o,n)=>{const l=G("f-tree");return d(),r("div",It,[(d(!0),r(g,null,y(e.options,(s,c)=>(d(),r("li",{key:c,onClick:le(u=>i(s),["stop"])},[S(m(s.label)+" ",1),x(J,{name:"slide-fade"},{default:w(()=>[s.children&&s.children.length?H((d(),r("ul",Et,[x(l,{options:s.children},null,8,["options"])],512)),[[de,s.isOpened]]):K("",!0)]),_:2},1024)],8,Vt))),128))])}}});var N=v(At,[["__scopeId","data-v-de79fc8a"]]);N.install=e=>{e.component(N.name,N)};const Ot={class:"container"},zt=["multiple"],jt={class:"fileList-box"},Tt=["onClick"],Bt={name:"fUpload"},Rt=Object.assign(Bt,{props:{multiple:{type:Boolean,default:!1},label:{type:String,default:"\u9009\u62E9\u6587\u4EF6"},btnType:{type:String,default:"success"}},emits:["update:files","change"],setup(e,{emit:t}){const a=ce([]),i=_(null),o=_(null),n=_(!1),l=()=>{i.value.click()},s=u=>{a.unshift(...u.target.files),t("change",a)},c=u=>{a.splice(u,1)};return ue(()=>{console.log("@--",o.value);let u=o.value;u.addEventListener("drop",f=>{f.stopPropagation(),f.preventDefault(),a.unshift(...f.dataTransfer.files),n.value=!1},!1),u.addEventListener("dragleave",f=>{f.stopPropagation(),f.preventDefault(),n.value=!1}),u.addEventListener("dragenter",f=>{f.stopPropagation(),f.preventDefault(),n.value=!0}),u.addEventListener("dragover",f=>{f.stopPropagation(),f.preventDefault(),n.value=!0})}),(u,f)=>(d(),r("div",Ot,[p("input",{type:"file",class:"file-input",ref_key:"inpRef",ref:i,onChange:s,multiple:e.multiple},null,40,zt),x(I,{onClick:l,type:e.btnType},{default:w(()=>[S(m(e.label),1)]),_:1},8,["type"]),p("div",jt,[(d(!0),r(g,null,y(a,(C,X)=>(d(),r("li",{key:X},[p("span",null,m(C.name),1),p("span",{class:"delete-btn",onClick:Xt=>c(X)},"\u5220\u9664",8,Tt)]))),128))]),p("div",{class:h(["area-box",{activeArea:n.value}]),onClick:l,ref_key:"areaRef",ref:o},null,2)]))}});var M=v(Rt,[["__scopeId","data-v-8a471372"]]);M.install=e=>{e.component(M.name,M)};const Pt=[I,B,R,P,D,F,N,M,$,E,z,O,A,L,j,T],Dt=e=>{Pt.forEach(t=>{e.use(t)})},Ft={install:Dt},Nt="modulepreload",ee={},Mt="/fenglinguiv2v3/",b=function(t,a){return!a||a.length===0?t():Promise.all(a.map(i=>{if(i=`${Mt}${i}`,i in ee)return;ee[i]=!0;const o=i.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Nt,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((s,c)=>{l.addEventListener("load",s),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Ut=[{path:"/button2",name:"\u6309\u94AE Button-vue2",component:()=>b(()=>import("./button.0240544e.js"),["assets/button.0240544e.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/input2",name:"\u8F93\u5165\u6846 Input-vue2",component:()=>b(()=>import("./input.4611fe41.js"),["assets/input.4611fe41.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/radio2",name:"\u5355\u9009\u6846 Radio-vue2",component:()=>b(()=>import("./radio.a7db5b0d.js"),["assets/radio.a7db5b0d.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/select2",name:"\u4E0B\u62C9\u6846 Select-vue2",component:()=>b(()=>import("./select.994200fd.js"),["assets/select.994200fd.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/space2",name:"\u95F4\u8DDD space-vue2",component:()=>b(()=>import("./space.b1e27e7d.js"),["assets/space.b1e27e7d.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/textarea",name:"\u6587\u672C\u57DF Textarea-vue2",component:()=>b(()=>import("./textarea.cd27a211.js"),["assets/textarea.cd27a211.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/tree",name:"\u6811 Tree-vue2",component:()=>b(()=>import("./tree.a63aa904.js"),["assets/tree.a63aa904.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/upload",name:"\u4E0A\u4F20 Upload-vue2",component:()=>b(()=>import("./upload.d37ba4c8.js"),["assets/upload.d37ba4c8.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])}],qt=[{path:"/button",name:"\u6309\u94AE Button-vue3",component:()=>b(()=>import("./button.7aaaad9b.js"),["assets/button.7aaaad9b.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/input",name:"\u8F93\u5165\u6846 Input-vue3",component:()=>b(()=>import("./input.0f76f65d.js"),["assets/input.0f76f65d.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/textarea",name:"\u6587\u672C\u57DF Textarea-vue3",component:()=>b(()=>import("./textarea.c2f31814.js"),["assets/textarea.c2f31814.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/space",name:"\u95F4\u8DDD Space-vue3",component:()=>b(()=>import("./space.34145933.js"),["assets/space.34145933.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/select",name:"\u4E0B\u62C9\u6846 Select-vue3",component:()=>b(()=>import("./select.f76c67d8.js"),["assets/select.f76c67d8.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/radio",name:"\u5355\u9009\u6846 Radio-vue3",component:()=>b(()=>import("./radio.cb392443.js"),["assets/radio.cb392443.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/tree",name:"\u6811 Tree-vue3",component:()=>b(()=>import("./tree.82d708f6.js"),["assets/tree.82d708f6.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])},{path:"/upload",name:"\u4E0A\u4F20 Upload-vue3",component:()=>b(()=>import("./upload.7679db29.js"),["assets/upload.7679db29.js","assets/@vue.710d6a65.js","assets/preview.e451cf93.js","assets/preview.5aaadd21.css","assets/vue-router.e9149973.js","assets/highlight.js.97c65590.js"])}],Ht=[{name:"Vue2 \u57FA\u7840\u7EC4\u4EF6",list:Ut},{name:"Vue3 \u57FA\u7840\u7EC4\u4EF6",list:qt}],Jt=Ht.flatMap(e=>e.list),Kt=[{path:"/",name:"\u4E3B\u9875",component:()=>b(()=>import("./index.88968078.js"),["assets/index.88968078.js","assets/index.4e21403a.css","assets/header.1e8b8e9a.js","assets/header.4e2b572f.css","assets/vue-router.e9149973.js","assets/@vue.710d6a65.js","assets/highlight.js.97c65590.js"])},{path:"/home",name:"\u7EC4\u4EF6\u9875\u9762",component:()=>b(()=>import("./home.4c4e930c.js"),["assets/home.4c4e930c.js","assets/home.97234b5a.css","assets/vue-router.e9149973.js","assets/@vue.710d6a65.js","assets/header.1e8b8e9a.js","assets/header.4e2b572f.css","assets/highlight.js.97c65590.js"]),children:Jt}],Wt=fe({history:be(),routes:Kt,scrollBehavior(e,t,a){e.path!=="/"&&(document.querySelector(".app-main").scrollTop=0)}});const W=pe(he);W.use(Ft);W.use(Wt);W.mount("#app");W.directive("highlight",function(e){e.querySelectorAll("pre code").forEach(a=>{ve.highlightBlock(a)})});export{v as _,Ht as m};
