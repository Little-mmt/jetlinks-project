import{d as o,U as c,Z as r,R as a,_ as d,a4 as n,a0 as u}from"./vue-1730252110824.js";import{g as i}from"./index-1730252110824.js";const _=o({name:"AddButton"}),p=o({..._,props:{style:{type:Object,default:()=>({})},showCircular:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:s}){const l=()=>{s("click")};return(t,m)=>(c(),r("div",{class:"rule-button-warp",style:u(e.style)},[a(t.$slots,"extra",{},void 0,!0),d("div",{class:n(["rule-button add-button",{"add-circular":e.showCircular}]),onClick:l},[a(t.$slots,"default",{},void 0,!0)],2)],4))}});const y=i(p,[["__scopeId","data-v-07c780bb"]]);export{y as default};