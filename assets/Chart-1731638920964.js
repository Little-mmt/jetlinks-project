import{i as n}from"./index-1731638920964297.js";import{d as r,g as c,w as i,U as p,Z as _,q as d}from"./vue-1731638920964.js";import{g as f}from"./index-1731638920964.js";const m={class:"chart",ref:"chart"},u=r({__name:"Chart",props:{options:{type:Object,default:()=>{}}},setup(s){const e=s,{proxy:a}=c(),o=()=>{d(()=>{const t=n(a.$refs.chart);t.setOption(e.options),window.addEventListener("resize",function(){t.resize()})})};return i(()=>e.options,()=>o(),{immediate:!0,deep:!0}),(t,h)=>(p(),_("div",m,null,512))}});const v=f(u,[["__scopeId","data-v-cfdde5aa"]]);export{v as default};