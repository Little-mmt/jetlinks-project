import{d as u,k as d,ac as v,o as I,U as k,V as y,X as h,f as _,u as n,G as C}from"./vue-1731638920964.js";import{o as b,aa as x}from"./index-1731638920964.js";import D from"./index-173163892096499.js";import{s as M,g as w}from"./plugin-17316389209642.js";const L=u({name:"InklingModal"}),P=u({...L,props:{accessId:{type:String,default:void 0},id:{type:String,default:void 0},pluginId:{type:String,default:void 0}},emits:["cancel","submit"],setup(t,{emit:i}){const l=t,e=d(l.id),o=d(!1),c=v(),r=async()=>{if(e.value){o.value=!0;const a=await M("device",l.pluginId,c.params.id,e.value).catch(()=>({success:!1}));o.value=!1,a.success&&i("submit",e.value)}else b("请选择设备","error")},f=()=>{i("cancel")},p=()=>{w("device",l.pluginId,c.params.id).then(a=>{var s;a.success&&(e.value=((s=a.result)==null?void 0:s.externalId)||"")})};return I(()=>{p()}),(a,s)=>{const m=x;return k(),y(m,{width:800,"mask-closable":!1,visible:!0,title:"设备ID映射",confirmLoading:n(o),onOk:r,onCancel:f},{default:h(()=>[_(n(D),{value:n(e),"onUpdate:value":s[0]||(s[0]=g=>C(e)?e.value=g:null),type:"device",accessId:t.accessId,pluginId:t.pluginId,internalId:n(c).params.id},null,8,["value","accessId","pluginId","internalId"])]),_:1},8,["confirmLoading"])}}});export{P as _};