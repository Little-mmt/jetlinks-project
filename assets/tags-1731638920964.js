import{g as v,at as y}from"./index-1731638920964.js";import{k as c,e as h,ab as i,U as s,V as x,X as _,_ as b,a0 as k,Z as n,F as E,a1 as V,u as l,f as u,E as w,$ as B,Y as C,d as N}from"./vue-1731638920964.js";const O={class:"tags-item"},z={key:0,class:"tags-item"},A=N({name:"tags"}),I=Object.assign(A,{props:{tags:{type:Array,default:()=>[]},styles:{type:Object,default:()=>({})}},setup(r){const t=r,a=c(!1),o=c(0),d=({width:e})=>{o.value=e},p=h(()=>{if(a.value=!1,o.value){let e=o.value/88;return e>t.tags.length?t.tags:(a.value=!0,t.tags.slice(0,e-1))}return t.tags});return(e,j)=>{const f=i("Ellipsis"),m=i("AIcon");return s(),x(l(y),{onResize:d},{default:_(()=>[b("div",{class:"tags-warp",style:k(r.styles)},[(s(!0),n(E,null,V(l(p),g=>(s(),n("div",O,[u(f,null,{default:_(()=>[w(B(g),1)]),_:2},1024)]))),256)),l(a)?(s(),n("div",z,[u(m,{type:"EllipsisOutlined"})])):C("",!0)],4)]),_:1})}}}),S=v(I,[["__scopeId","data-v-9865d98b"]]);export{S as default};