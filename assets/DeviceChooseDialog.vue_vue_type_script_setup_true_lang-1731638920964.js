import{j as v,au as y,o as D,ac as f,a3 as _,aa as h}from"./index-1731638920964.js";import"./index-1731638920964278.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import"./index-1731638920964282.js";import"./index-1731638920964283.js";import C from"./StatusLabel-1731638920964.js";import{c as b}from"./home-1731638920964.js";import{d as k,k as d,U as x,V as S,X as l,f as r,u as t,_ as T,$ as w}from"./vue-1731638920964.js";const J=k({__name:"DeviceChooseDialog",props:{visible:{type:Boolean}},emits:["confirm","update:visible"],setup(I,{emit:i}){const{t:e}=v(),p=()=>{if(s.value.length<1)return D(e("dialogs.DeviceChooseDialog.926510-1"),"warning");i("confirm",s.value[0]),i("update:visible",!1)},n=[{title:e("dialogs.DeviceChooseDialog.926510-2"),dataIndex:"id",key:"id",ellipsis:!0,search:{type:"string"}},{title:e("dialogs.DeviceChooseDialog.926510-3"),dataIndex:"name",key:"name",ellipsis:!0,search:{type:"string"}},{title:e("dialogs.DeviceChooseDialog.926510-4"),dataIndex:"productName",key:"productName",ellipsis:!0,search:{type:"string"}},{title:e("dialogs.DeviceChooseDialog.926510-5"),dataIndex:"registryTime",key:"registryTime",ellipsis:!0,search:{type:"date"},scopedSlots:!0},{title:e("dialogs.DeviceChooseDialog.926510-6"),dataIndex:"state",key:"state",ellipsis:!0,search:{rename:"state",type:"select",options:[{label:e("dialogs.DeviceChooseDialog.926510-7"),value:"online"},{label:e("dialogs.DeviceChooseDialog.926510-8"),value:"offline"},{value:"notActive",label:"禁用"}]},scopedSlots:!0}],c=d({}),s=d([]);return(j,o)=>{const m=f,u=_,g=h;return x(),S(g,{visible:"",title:t(e)("dialogs.DeviceChooseDialog.926510-0"),style:{width:"1000px"},onOk:p,onCancel:o[1]||(o[1]=a=>i("update:visible",!1)),maskClosable:!1},{default:l(()=>[r(m,{type:"simple",columns:n,onSearch:o[0]||(o[0]=a=>c.value={...a})}),r(u,{model:"TABLE",request:t(b),columns:n,params:t(c),defaultParams:{sorts:[{name:"createTime",order:"desc"}]},rowSelection:{selectedRowKeys:t(s),onChange:a=>s.value=a,type:"radio"}},{registryTime:l(a=>[T("span",null,w(t(y)(a.registryTime).format("YYYY-MM-DD HH:mm:ss")),1)]),state:l(a=>[r(C,{"status-value":a.state.value,"status-label":a.state.text},null,8,["status-value","status-label"])]),_:1},8,["request","params","rowSelection"])]),_:1},8,["title"])}}});export{J as _};