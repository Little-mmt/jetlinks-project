import{F as h,eZ as w,e_ as q,e$ as S,f0 as B,f1 as F,f2 as L,f3 as Z,f4 as A,f5 as J,f6 as z,aC as T}from"./index-1730252110824.js";import{_ as D}from"./ConfigModal.vue_vue_type_script_setup_true_name_ConfigModal_lang-1730252110824.js";import{c as E,T as G,t as M,v as X}from"./columns-1730252110824.js";import{_ as Y}from"./Type.vue_vue_type_script_setup_true_name_DataTypeSelect_lang-1730252110824.js";import{d as I,k as f,w as H,U as s,Z as K,_ as k,f as U,u as t,G as m,V as i,X as $,$ as Q,Y as W}from"./vue-1730252110824.js";const V={class:"metadata-type"},ee={class:"metadata-type-select"},te=I({name:"OutPutParams"}),se=I({...te,props:{value:{type:Object,default:()=>({})}},emits:["update:value"],setup(R,{emit:_}){var c,g,b;const p=R,O=h.useInjectFormItemContext();f([]);const o=f((g=(c=p.value)==null?void 0:c.output)==null?void 0:g.type),n=f((b=p.value)==null?void 0:b.output),{unitOptions:y}=E(o),j=l=>{n.value=M(l),_("update:value",{...p.value,output:{...n.value,type:o.value}})},P=[{title:"参数标识",dataIndex:"id",type:"text",placement:"Left",form:{required:!0,rules:[{callback(l,e,a){if(e){const u=l.field.split("."),d=Number(u[1]);return a.some((x,v)=>x.id===e&&d!==v)?Promise.reject("该标识已存在"):Promise.resolve()}return Promise.reject("请输入标识")}},{max:64,message:"最多可输入64个字符"},{pattern:/^[a-zA-Z0-9_\-]+$/,message:"标识只能由数字、字母、下划线、中划线组成"}]}},{title:"参数名称",dataIndex:"name",type:"text",form:{required:!0,rules:[{required:!0,message:"请输入参数名称"},{max:64,message:"最多可输入64个字符"}]}},{title:"数据类型",type:"components",dataIndex:"valueType",components:{name:Y},form:{required:!0,rules:[{validator(l,e){return console.log("validator",e),e!=null&&e.type?Promise.resolve():Promise.reject("请选择数据类型")}}]},control(l,e){var a;return l.valueType.type!==((a=e==null?void 0:e.valueType)==null?void 0:a.type)}},{title:"其他配置",dataIndex:"config",form:{required:!0,rules:[{callback(l,e,a){const u=l.field.split("."),d=Number(u[1]),C=a.find((x,v)=>v===d);return X(C.valueType)}}]},control(l,e){if(l&&!e)return!0;if(l&&e){const a=T(l.valueType,["type"]),u=T(e.valueType,["type"]);return JSON.stringify(a)!==JSON.stringify(u)}return!1}},{title:"操作",dataIndex:"action",width:60}];H(()=>p.value,()=>{var l,e,a;o.value=(e=(l=p.value)==null?void 0:l.output)==null?void 0:e.type,n.value=(a=p.value)==null?void 0:a.output},{immediate:!0,deep:!0});const N=()=>({id:void 0,name:void 0,valueType:{type:void 0}}),r=()=>{_("update:value",{...p.value,output:{...n.value,type:o.value}}),O.onFieldChange()};return(l,e)=>(s(),K("div",V,[k("div",ee,[U(t(w),{value:t(o),"onUpdate:value":e[0]||(e[0]=a=>m(o)?o.value=a:null),allowClear:!0,onChange:j},null,8,["value"])]),t(o)==="array"?(s(),i(t(q),{key:0,placement:"bottomRight",value:t(n).elementType,"onUpdate:value":e[1]||(e[1]=a=>t(n).elementType=a),onConfirm:r},null,8,["value"])):t(o)==="object"?(s(),i(t(S),{key:1,value:t(n).properties,"onUpdate:value":e[2]||(e[2]=a=>t(n).properties=a),placement:"bottomRight",columns:P,onConfirm:r,onAdd:N},{valueType:$(({data:a})=>{var u;return[k("span",null,Q(t(G)[(u=a.record.valueType)==null?void 0:u.type]),1)]}),config:$(({data:a})=>[U(D,{value:a.record.valueType,"onUpdate:value":u=>a.record.valueType=u,showOther:!1},null,8,["value","onUpdate:value"])]),_:1},8,["value"])):t(o)==="enum"?(s(),i(t(B),{key:2,placement:"bottomRight",value:t(n),"onUpdate:value":e[3]||(e[3]=a=>m(n)?n.value=a:null),onConfirm:r},null,8,["value"])):t(o)==="boolean"?(s(),i(t(F),{key:3,placement:"bottomRight",value:t(n),"onUpdate:value":e[4]||(e[4]=a=>m(n)?n.value=a:null),onConfirm:r},null,8,["value"])):["float","double"].includes(t(o))?(s(),i(t(L),{key:4,placement:"bottomRight",options:t(y),value:t(n),"onUpdate:value":e[5]||(e[5]=a=>m(n)?n.value=a:null),onConfirm:r},null,8,["options","value"])):["int","long"].includes(t(o))?(s(),i(t(Z),{key:5,placement:"bottomRight",options:t(y),value:t(n).unit,"onUpdate:value":e[6]||(e[6]=a=>t(n).unit=a),onConfirm:r},null,8,["options","value"])):t(o)==="file"?(s(),i(t(A),{key:6,placement:"bottomRight",value:t(n).bodyType,"onUpdate:value":e[7]||(e[7]=a=>t(n).bodyType=a),onConfirm:r},null,8,["value"])):t(o)==="date"?(s(),i(t(J),{key:7,placement:"bottomRight",value:t(n).date,"onUpdate:value":e[8]||(e[8]=a=>t(n).date=a),onConfirm:r},null,8,["value"])):["string","password"].includes(t(o))?(s(),i(t(z),{key:8,placement:"bottomRight",value:t(n).maxLength,"onUpdate:value":e[9]||(e[9]=a=>t(n).maxLength=a),onConfirm:r},null,8,["value"])):W("",!0)]))}});export{se as _};