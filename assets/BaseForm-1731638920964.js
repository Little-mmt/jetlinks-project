import{cA as F,I,v as V,dD as B,aK as E,a6 as M,a9 as w,g as J}from"./index-1731638920964.js";import"./index-1731638920964279.js";import{_ as N}from"./ExpandsForm.vue_vue_type_script_setup_true_name_ExpandsForm_lang-1731638920964.js";import{V as c,J as A,v as D}from"./ValueTypeForm-1731638920964.js";import{u as L}from"./product-17316389209645.js";import{u as O}from"./instance-1731638920964.js";import{b as P,e as Z}from"./product-17316389209644.js";import{E as $,a as K}from"./data-17316389209644.js";import{u as R}from"./metadata-1731638920964.js";import{d as U,k as X,o as Y,U as m,Z as v,f as l,X as o,u as s,F as p,Y as g,E as b}from"./vue-1731638920964.js";import"./index-1731638920964291.js";import"./index-1731638920964304.js";import"./index-1731638920964284.js";import"./index-1731638920964282.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import"./context-1731638920964.js";import"./lodash.default-1731638920964.js";import"./throttle-1731638920964.js";import"./min-1731638920964.js";import"./isNil-1731638920964.js";import"./isUndefined-1731638920964.js";import"./difference-1731638920964.js";import"./flattenDeep-1731638920964.js";import"./sortBy-1731638920964.js";import"./unionBy-1731638920964.js";import"./uniqBy-1731638920964.js";import"./toLower-1731638920964.js";import"./encodeQuery-1731638920964.js";const G=U({name:"BaseForm"}),H=U({...G,props:{type:{type:String,required:!0,default:"product"},value:{type:Object,default:()=>({})},modelType:{type:String,default:""}},setup(e){const u=e,k=R();(u.modelType==="events"||u.modelType==="tags")&&(u.value.expands||(u.value.expands={}));const C=L(),j=O(),x=X([]),T=F(async()=>{var r;const{valueType:y,id:a}=u.value,{type:i}=y||{},n=u.type==="product"?(r=C.current)==null?void 0:r.id:j.current.id;if(!n||!a||!i)return;const d={deviceId:n,metadata:{id:a,type:"property",dataType:i}},f=u.type==="product"?await P(d):await Z(d);f.status===200&&(x.value=f.result)},500);Y(()=>{u.modelType==="properties"&&T()});const S=y=>{var a;u.type==="product"&&["int","float","double","long","date","string","boolean"].includes(y)?u.value.expands.metrics=[]:(a=u.value.expands)==null||delete a.metrics,T()};return(y,a)=>{const i=I,n=V,d=B,f=E,r=M,q=w;return m(),v(p,null,[l(n,{label:"标识",name:"id",rules:[{required:!0,message:"请输入标识"},{max:64,message:"最多可输入64个字符"},{pattern:/^[a-zA-Z0-9_\-]+$/,message:"标识只能由数字、字母、下划线、中划线组成"}]},{default:o(()=>[l(i,{value:e.value.id,"onUpdate:value":a[0]||(a[0]=t=>e.value.id=t),size:"small",onChange:s(T),disabled:s(k).model.action==="edit",placeholder:"请输入标识"},null,8,["value","onChange","disabled"])]),_:1}),l(n,{label:"名称",name:"name",rules:[{required:!0,message:"请输入名称"},{max:64,message:"最多可输入64个字符"}]},{default:o(()=>[l(i,{value:e.value.name,"onUpdate:value":a[1]||(a[1]=t=>e.value.name=t),size:"small",placeholder:"请输入名称"},null,8,["value"])]),_:1}),e.modelType==="properties"?(m(),v(p,{key:0},[l(c,{name:["valueType"],value:e.value.valueType,"onUpdate:value":a[2]||(a[2]=t=>e.value.valueType=t),key:"property",title:"数据类型",onChangeType:S},null,8,["value"]),l(N,{name:["expands"],value:e.value.expands,"onUpdate:value":a[3]||(a[3]=t=>e.value.expands=t),type:e.type,id:e.value.id,config:s(x),valueType:e.value.valueType},null,8,["value","type","id","config","valueType"])],64)):g("",!0),e.modelType==="functions"?(m(),v(p,{key:1},[l(n,{label:"是否异步",name:"async",rules:[{required:!0,message:"请选择是否异步"}]},{default:o(()=>[l(f,{value:e.value.async,"onUpdate:value":a[4]||(a[4]=t=>e.value.async=t)},{default:o(()=>[l(d,{value:!0},{default:o(()=>[b("是")]),_:1}),l(d,{value:!1},{default:o(()=>[b("否")]),_:1})]),_:1},8,["value"])]),_:1}),l(n,{label:"输入参数",name:"inputs",rules:[{validator:(t,z)=>s(D)(t,z,"输入参数",!1)}]},{default:o(()=>[l(A,{value:e.value.inputs,"onUpdate:value":a[5]||(a[5]=t=>e.value.inputs=t),name:["inputs"],"is-sub":!1},null,8,["value"])]),_:1},8,["rules"]),l(c,{name:["output"],value:e.value.output,"onUpdate:value":a[6]||(a[6]=t=>e.value.output=t),key:"function",title:"输出参数",required:!1},null,8,["value"])],64)):g("",!0),e.modelType==="events"?(m(),v(p,{key:2},[l(n,{label:"级别",name:["expands","level"],rules:[{required:!0,message:"请选择级别"}]},{default:o(()=>[l(r,{value:e.value.expands.level,"onUpdate:value":a[7]||(a[7]=t=>e.value.expands.level=t),options:s($),size:"small",placeholder:"请选择级别"},null,8,["value","options"])]),_:1}),l(c,{name:["valueType"],value:e.value.valueType,"onUpdate:value":a[8]||(a[8]=t=>e.value.valueType=t),key:"function",title:"输出参数","only-object":""},null,8,["value"])],64)):g("",!0),e.modelType==="tags"?(m(),v(p,{key:3},[l(c,{name:["valueType"],value:e.value.valueType,"onUpdate:value":a[9]||(a[9]=t=>e.value.valueType=t),key:"property",title:"数据类型"},null,8,["value"]),l(n,{label:"读写类型",name:["expands","type"],rules:[{required:!0,message:"请选择读写类型"}]},{default:o(()=>[l(r,{value:e.value.expands.type,"onUpdate:value":a[10]||(a[10]=t=>e.value.expands.type=t),options:s(K),mode:"multiple",size:"small",placeholder:"请选择读写类型"},null,8,["value","options"])]),_:1})],64)):g("",!0),l(n,{label:"说明",name:"description",rules:[{max:200,message:"最多可输入200个字符"}]},{default:o(()=>[l(q,{value:e.value.description,"onUpdate:value":a[11]||(a[11]=t=>e.value.description=t),size:"small",placeholder:"请输入说明"},null,8,["value"])]),_:1})],64)}}});const Se=J(H,[["__scopeId","data-v-f767a155"]]);export{Se as default};