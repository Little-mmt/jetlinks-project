import{a4 as U,b4 as B,aD as L,a6 as $,v as q,a0 as E,I as J,a1 as K,F as A}from"./index-1730252110824.js";import W from"./index-1730252110824223.js";import"./Array.vue_vue_type_style_index_0_scoped_59b5dd9b_lang-1730252110824.js";import"./Double.vue_vue_type_script_setup_true_name_DoubleParamsDropdown_lang-1730252110824.js";import{h as X}from"./index-1730252110824310.js";import{d as Y,k,r as Z,e as m,w as z,U as _,V as b,X as p,f as c,u as n,Z as G,F as H,a1 as Q,E as M,$ as R,Y as ee}from"./vue-1730252110824.js";const le=Y({__name:"WriteProperty",props:{value:{type:Object,default:()=>{}},metadata:{type:Object,default:()=>({properties:[]})},builtInList:{type:Array,default:()=>[]},columnMap:{type:Object,default:()=>({})}},emits:["update:value","change","update:columnMap"],setup(V,{expose:T,emit:d}){const i=V,h=k(),f=k(i.columnMap||{}),e=Z({properties:void 0,propertiesValue:void 0,source:"fixed"}),v=m(()=>i.metadata.properties.find(t=>t.id===e.properties)),S=m(()=>{var t,a;return[{label:"手动输入",component:(a=(t=v.value)==null?void 0:t.valueType)==null?void 0:a.type,key:"fixed"},{label:"内置参数",component:"tree",key:"upper"}]}),x=(t,a)=>{if(t&&a){const u=a.filter(r=>{if(r.children){const s=x(t,r.children);return r.children=s,!!s.length}else if(r.type===t)return!0;return!1});return X(u)}return a||[]},C=m(()=>{var a,u;return x((u=(a=v.value)==null?void 0:a.valueType)==null?void 0:u.type,U(i==null?void 0:i.builtInList))}),w=m(()=>{var u;const t=(u=v.value)==null?void 0:u.valueType,a=t==null?void 0:t.type;return a==="boolean"?[{label:t.trueText||!0,name:t.trueText||!0,value:t.trueValue||!0,id:String(t.trueValue||!0)},{label:t.falseText||!1,name:t.falseText||!1,value:t.falseValue||!1,id:String(t.falseValue||!1)}]:a==="enum"?t==null?void 0:t.elements.map(r=>({label:r.text,name:r.text,value:r.value,id:r.value})):[]}),D=()=>{e.propertiesValue=void 0,e.source="fixed",f.value={},d("update:value",{[`${e.properties}`]:{value:e==null?void 0:e.propertiesValue,source:e==null?void 0:e.source}})},F=(t,a)=>{const u=B(t)&&t.metadata?[t.column]:[],r={value:e==null?void 0:e.propertiesValue,source:e==null?void 0:e.source};(e==null?void 0:e.source)==="upper"&&(r.upperKey=e==null?void 0:e.propertiesValue);const s={[`${e.properties}`]:r};f.value={[e.properties]:(e==null?void 0:e.source)==="upper"?t.column:void 0},d("update:value",s),d("update:columnMap",f.value),d("change",a||t,u)};return z(()=>i.value,t=>{var a,u,r;if(t){const s=(a=Object.keys(t))==null?void 0:a[0];s&&(e.properties=s,e.propertiesValue=(u=t[s])==null?void 0:u.value,e.source=(r=t[s])==null?void 0:r.source)}},{deep:!0,immediate:!0}),T({onSave:()=>new Promise((t,a)=>{h.value.validate().then(()=>{t(!0)}).catch(u=>{a(u)})})}),(t,a)=>{const u=L,r=$,s=q,y=E,P=J,I=K,N=A;return _(),b(N,{layout:"vertical",ref_key:"propertyFormRef",ref:h,model:n(e)},{default:p(()=>[c(I,{gutter:24},{default:p(()=>[c(y,{span:12},{default:p(()=>[c(s,{name:"properties",label:"设置属性",rules:[{required:!0,message:"请选择设置属性"}]},{default:p(()=>[c(r,{showSearch:"",placeholder:"请选择属性",value:n(e).properties,"onUpdate:value":a[0]||(a[0]=l=>n(e).properties=l),onChange:D},{default:p(()=>{var l,g;return[(_(!0),G(H,null,Q(((g=((l=V.metadata)==null?void 0:l.properties)||[])==null?void 0:g.filter(o=>{var j,O;return(O=(j=o==null?void 0:o.expands)==null?void 0:j.type)==null?void 0:O.includes("write")}))||[],o=>(_(),b(u,{value:o==null?void 0:o.id,key:o==null?void 0:o.id},{default:p(()=>[M(R(o==null?void 0:o.name),1)]),_:2},1032,["value"]))),128))]}),_:1},8,["value"])]),_:1})]),_:1}),n(e).properties?(_(),b(y,{key:0,span:12},{default:p(()=>[c(s,{name:"propertiesValue",label:"属性值",rules:[{required:!0,message:"请选择"}]},{default:p(()=>[c(n(W),{options:n(w),tabsOptions:n(S),metricOptions:n(C),value:n(e).propertiesValue,"onUpdate:value":a[1]||(a[1]=l=>n(e).propertiesValue=l),source:n(e).source,"onUpdate:source":a[2]||(a[2]=l=>n(e).source=l),valueName:"id",treeKey:"id",onSelect:F},{default:p(({label:l})=>[c(P,{readonly:"",value:l,placeholder:"请选择"},null,8,["value"])]),_:1},8,["options","tabsOptions","metricOptions","value","source"])]),_:1})]),_:1})):ee("",!0)]),_:1})]),_:1},8,["model"])}}});export{le as _};