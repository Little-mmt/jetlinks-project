import{dw as w,v as I,aT as E,F as B,g as j}from"./index-1730252110824.js";import"./index-1730252110824282.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import{d as C,r as R,k as U,s as q,U as o,V as r,X as s,f,u as v,_ as F,Z as y,$ as b}from"./vue-1730252110824.js";const N={key:0},$={key:1},A=C({__name:"EditTable",props:{modelValue:{type:Array,default:""}},emits:["update:modelValue"],setup(T,{expose:V,emit:x}){const n=T,h=[{title:"参数名称",dataIndex:"name",with:"33%"},{title:"类型",dataIndex:"valueType",with:"33%"},{title:"值",dataIndex:"value",with:"34%"}],a=R({dataSource:[]}),u=U(null);return q(()=>{a.dataSource=(n==null?void 0:n.modelValue)||[],console.log(a.dataSource)}),V({onSave:()=>new Promise((d,m)=>{var t;(t=u.value)==null||t.validate().then(_=>{x("update:modelValue",a.dataSource),d(!0)}).catch(()=>{m(!1)})})}),(d,m)=>{const t=w,_=I,S=E,k=B;return o(),r(k,{ref_key:"formRef",ref:u,model:v(a)},{default:s(()=>[f(S,{columns:h,"data-source":v(a).dataSource,pagination:!1},{bodyCell:s(({column:p,text:i,record:e,index:g})=>[F("div",null,[["name"].includes(p.dataIndex)?(o(),y("span",N,b(i),1)):["valueType"].includes(p.dataIndex)?(o(),y("span",$,b(i.type),1)):(o(),r(_,{key:2,name:["dataSource",g,"value"],rules:[{required:!!e.required,message:"该字段为必填字段"}]},{default:s(()=>{var c;return[f(t,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,itemType:e.valueType.type,options:e.valueType.type==="enum"?(((c=e==null?void 0:e.valueType)==null?void 0:c.elements)||[]).map(l=>({label:l.text,value:l.value})):e.valueType.type==="boolean"?[{label:"是",value:!0},{label:"否",value:!1}]:void 0},null,8,["modelValue","onUpdate:modelValue","itemType","options"])]}),_:2},1032,["name","rules"]))])]),_:1},8,["data-source"])]),_:1},8,["model"])}}});const J=j(A,[["__scopeId","data-v-86586bb5"]]);export{J as default};