import{a0 as f,a1 as u,g as m}from"./index-1731638920964.js";import{d as h,ab as k,U as n,Z as d,_ as e,f as t,X as o,R as i,Y as C,a4 as x}from"./vue-1731638920964.js";const y={class:"card"},g={class:"card-content"},w={class:"card-item-avatar"},B={key:0,class:"checked-icon"},j=h({__name:"index",props:{value:{type:Object,default:()=>{}},active:{type:Boolean,default:!1}},emits:["click"],setup(a,{emit:l}){const _=a,r=()=>{l("click",_.value)};return(s,I)=>{const c=f,p=u,v=k("AIcon");return n(),d("div",y,[e("div",{class:x(["card-warp",{active:a.active?"active":""}]),onClick:r},[e("div",g,[t(p,{gutter:20},{default:o(()=>[t(c,{span:10},{default:o(()=>[e("div",w,[i(s.$slots,"img",{},void 0,!0)])]),_:3}),t(c,{span:14},{default:o(()=>[i(s.$slots,"content",{},void 0,!0)]),_:3})]),_:3}),a.active?(n(),d("div",B,[e("div",null,[t(v,{type:"CheckOutlined"})])])):C("",!0)])],2)])}}});const b=m(j,[["__scopeId","data-v-3f5f805f"]]);export{b as default};