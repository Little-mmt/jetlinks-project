import{ah as m,ai as f,dE as p}from"./index-1730252110824.js";import"./index-1730252110824299.js";import"./index-1730252110824300.js";import{J as _}from"./vue-json-viewer-1730252110824.js";import{U as b,V as x,X as e,f as a,E as n,$ as s,_ as h,u as g,d as v}from"./vue-1730252110824.js";const y={style:{"max-height":"400px","overflow-y":"auto"}},w=v({name:"logView"}),j=Object.assign(w,{props:{data:{type:Object,default:()=>({})}},emits:["close"],setup(t,{emit:c}){return(C,o)=>{const l=m,u=f,r=p;return b(),x(r,{title:"执行日志",visible:"",onClose:o[0]||(o[0]=d=>c("close")),maskClosable:!1,width:"600px"},{default:e(()=>[a(u,{bordered:"",size:"small",column:1,labelStyle:{width:"100px",textAlign:"right",justifyContent:"end"}},{default:e(()=>{var d;return[a(l,{span:3,label:"执行状态",contentStyle:{color:((d=t.data.state)==null?void 0:d.value)==="success"?"#52C41A":"red"}},{default:e(()=>{var i;return[n(s((i=t.data.state)==null?void 0:i.text),1)]}),_:1},8,["contentStyle"]),a(l,{span:3,label:"通道ID"},{default:e(()=>[n(s(t.data.channelId),1)]),_:1}),a(l,{span:3,label:"通道名称"},{default:e(()=>[n(s(t.data.channelName),1)]),_:1}),a(l,{span:3,label:"通道目录"},{default:e(()=>[n(s(t.data.channelCatalog||"-"),1)]),_:1}),a(l,{span:3,label:"设备ID"},{default:e(()=>[n(s(t.data.deviceId),1)]),_:1}),a(l,{span:3,label:"设备名称"},{default:e(()=>[n(s(t.data.deviceName),1)]),_:1}),a(l,{span:3,label:"安装地址"},{default:e(()=>[n(s(t.data.address),1)]),_:1}),a(l,{span:3,label:"厂家"},{default:e(()=>[n(s(t.data.manufacturer),1)]),_:1}),a(l,{span:3,label:"日志流水"},{default:e(()=>[h("div",y,[a(g(_),{value:t.data,expanded:!0,expandDepth:4},null,8,["value"])])]),_:1})]}),_:1})]),_:1})}}});export{j as default};