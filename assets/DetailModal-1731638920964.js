import{g as l,ec as s,d3 as d}from"./index-1731638920964.js";import{U as c,V as i,X as _,_ as r,f as u,d as p}from"./vue-1731638920964.js";const f={class:"rule-detail-warp"},m=p({name:"DetailModal"}),v=Object.assign(m,{props:{value:{type:String,default:void 0},getPopupContainer:{type:Function,default:void 0}},emits:["cancel"],setup(e,{emit:t}){return(g,a)=>{const o=s,n=d;return c(),i(n,{visible:"",title:"规则",maskClosable:!1,width:1e3,getContainer:e.getPopupContainer,footer:!1,onCancel:a[0]||(a[0]=C=>t("cancel"))},{default:_(()=>[r("div",f,[u(o,{"model-value":e.value,theme:"vs",ref:"editor",language:"javascript",readOnly:!0},null,8,["model-value"])])]),_:1},8,["getContainer"])}}}),y=l(v,[["__scopeId","data-v-95683fba"]]);export{y as default};
