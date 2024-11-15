import{h as s}from"./index-1731638920964.js";import{d as c,e as _,U as n,Z as r,F as v,a1 as y,_ as a,$ as o,a4 as d,u as f}from"./vue-1731638920964.js";const b=["onClick"],h={class:"way-item-title"},k={class:"way-item-image"},w=["src"],C=c({name:"TriggerWay"}),S=c({...C,props:{modelValue:{type:String,default:""},className:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l,{emit:u}){const t=l,g=[{value:"device",label:"设备触发",tip:"适用于设备数据或行为满足触发条件时，执行指定的动作",image:s("/device-trigger.png")},{value:"manual",label:"手动触发",tip:"适用于第三方平台向物联网平台下发指令控制设备",image:s("/manual-trigger.png")},{value:"timer",label:"定时触发",tip:"适用于定期执行固定任务",image:s("/timing-trigger.png")}],m=_(()=>({[t.className]:!0,"scene-trigger-way-warp":!0,disabled:t.disabled})),p=i=>{t.disabled||u("update:modelValue",i)};return(i,V)=>(n(),r("div",{class:d(f(m))},[(n(),r(v,null,y(g,e=>a("div",{key:e.value,class:d(["trigger-way-item",l.modelValue===e.value?"active":""]),onClick:B=>p(e.value)},[a("div",h,[a("p",null,o(e.label),1),a("span",null,o(e.tip),1)]),a("div",k,[a("img",{width:"40",src:e.image},null,8,w)])],10,b)),64))],2))}});export{S as _};
