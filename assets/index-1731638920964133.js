import{$ as u,aI as k,g as v}from"./index-1731638920964.js";import"./index-1731638920964288.js";import{d as l,ab as o,U as C,V as y,X as s,_ as t,f as c,E as n,$ as i,R as g,a4 as x}from"./vue-1731638920964.js";const $={class:"title"},B={class:"desc"},V={class:"checked-icon"},j=l({name:"AccessCard"}),w=l({...j,props:{checked:{type:String,default:void 0},data:{type:Object,default:()=>{}},disabled:{type:Boolean,default:!1}},emits:["checkedChange"],setup(e,{emit:r}){const _=e,p=a=>{_.disabled||r("checkedChange",a)};return(a,d)=>{const m=o("Ellipsis"),f=u,h=o("a-icon"),b=k;return C(),y(b,{hoverable:"",class:x(["card-render",`access-${e.data.type||"network"}`,e.checked===e.data.id?"checked":"",e.disabled?"disabled":""]),onClick:d[0]||(d[0]=E=>p(e.data.id))},{default:s(()=>[t("div",$,[c(m,{style:{width:"calc(100% - 100px)","margin-bottom":"24px"}},{default:s(()=>[n(i(e.data.name),1)]),_:1})]),g(a.$slots,"other",{},void 0,!0),t("div",B,[c(f,{placement:"topLeft",title:e.data.description},{default:s(()=>[n(i(e.data.description),1)]),_:1},8,["title"])]),t("div",V,[t("div",null,[c(h,{type:"CheckOutlined"})])])]),_:3},8,["class"])}}});const I=v(w,[["__scopeId","data-v-6b4b2b6b"]]);export{I as default};