import{dg as w,A as E}from"./index-1730252110824.js";import"./index-1730252110824281.js";import{b as v,c as D,a as I,g as P}from"./apiPage-1730252110824.js";import{u as x}from"./department-1730252110824.js";import{d as A,k as h,o as C,ab as B,U as R,V,X as d,f as g,u as m,G,E as H,$ as K}from"./vue-1730252110824.js";const $=A({__name:"LeftTree",props:{mode:{},hasHome:{type:Boolean},code:{}},emits:["select"],setup(b,{emit:u}){const p=b,O=x(),_=h([]),i=h([]),f=h(!1),k=()=>{let t=[];f.value=!0,v().then(o=>{t=o.urls.map(e=>({...e,key:e.url}));const s=t.map(e=>D(e.name));p.mode==="appManger"?s.push(I()):p.mode==="home"&&s.push(P(p.code)),Promise.all(s).then(e=>{e.forEach((n,c)=>{if(p.mode==="api")t[c].schemas=n.components.schemas,t[c].children=y(n.paths);else if(c<e.length-1){const l=T(n.paths,e[e.length-1].result);t[c].children=y(l),t[c].schemas=n.components.schemas}}),p.hasHome&&(t.unshift({key:"home",name:"首页",schemas:{},children:[]}),i.value=["home"]),_.value=t;const a={};L(t).forEach(n=>{a[n.id]=n}),O.setChangedApis(a)}).finally(()=>{f.value=!1})})},L=t=>{let o=[];return t.forEach(s=>{s!=null&&s.children&&(s==null||s.children.forEach(e=>{var a;(a=e==null?void 0:e.apiList)==null||a.forEach(r=>{const{method:n,url:c}=r;for(const l in n)Object.prototype.hasOwnProperty.call(n,l)&&o.push({...n[l],url:c,method:l,id:n[l].operationId})})}))}),o},j=(t,o)=>{var s;if(t[0]==="home")return u("select",o.node.dataRef,{});!o.node.parent&&t[0]!=="home"||u("select",o.node.dataRef,(s=o.node)==null?void 0:s.parent.node.schemas)};C(()=>{k()});const y=t=>{const o=[];return Object.keys(t).forEach(e=>{var c;const a=Object.keys(t[e]||{})[0],r=t[e][a].tags[0];let n=o.find(l=>l.name===r);n?(c=n.apiList)==null||c.push({url:e,method:t[e]}):(n={name:r,key:r,apiList:[{url:e,method:t[e]}]},o.push(n))}),o},T=(t,o)=>{for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const e=t[s];for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const r=e[a];o.includes(r.operationId)||delete e[a]}Object.keys(e).length===0&&delete t[s]}return t};return(t,o)=>{const s=B("AIcon"),e=w,a=E;return R(),V(a,{spinning:m(f)},{indicator:d(()=>[g(s,{type:"LoadingOutlined"})]),default:d(()=>[g(e,{"tree-data":m(_),onSelect:j,"selected-keys":m(i),"onUpdate:selectedKeys":o[0]||(o[0]=r=>G(i)?i.value=r:null),class:"left-tree-container",showLine:{showLeafIcon:!1},"show-icon":!0},{title:d(({name:r})=>[H(K(r),1)]),_:1},8,["tree-data","selected-keys"])]),_:1},8,["spinning"])}}});export{$ as _};