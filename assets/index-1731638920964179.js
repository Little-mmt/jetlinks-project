import{o as d,I as p,v,F as k,d3 as x}from"./index-1731638920964.js";import{s as y}from"./auto-1731638920964.js";import{k as M,r as b,U as g,V as w,X as t,f as n,u as l}from"./vue-1731638920964.js";const C={__name:"index",emits:["closeModal"],setup(B,{emit:r}){const m=M(),o=b({name:""}),u=async()=>{var e;const s=await((e=m.value)==null?void 0:e.validate());if(s){const a=await y({...s,type:"screenshot"});a.status===200&&(d("操作成功!"),r("closeModal",a.result.id))}};return(s,e)=>{const a=p,_=v,f=k,i=x;return g(),w(i,{visible:"",title:"新增计划",onOk:u,maskClosable:!1,onCancel:e[1]||(e[1]=c=>r("closeModal"))},{default:t(()=>[n(f,{ref_key:"formRef",ref:m,layout:"vertical",model:l(o)},{default:t(()=>[n(_,{label:"计划名称",name:"name",rules:[{required:!0,message:"请输入计划名称"},{max:64,message:"最多可输入64个字符"}]},{default:t(()=>[n(a,{value:l(o).name,"onUpdate:value":e[0]||(e[0]=c=>l(o).name=c),placeholder:"请输入计划名称"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1})}}},P=C;export{P as default};