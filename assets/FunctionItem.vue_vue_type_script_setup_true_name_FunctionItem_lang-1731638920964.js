import{a4 as g,I as x}from"./index-1731638920964.js";import O from"./index-1731638920964223.js";import"./Array.vue_vue_type_style_index_0_scoped_59b5dd9b_lang-1731638920964.js";import"./Double.vue_vue_type_script_setup_true_name_DoubleParamsDropdown_lang-1731638920964.js";import{h as V}from"./index-1731638920964310.js";import{d as v,k as d,e as p,s as S,U as k,V as I,X as K,f as T,u as o,G as f}from"./vue-1731638920964.js";const D=v({name:"FunctionItem"}),L=v({...D,props:{data:{type:Object,default:()=>{}},builtInList:{type:Array,default:()=>[]},value:{type:String},upperKey:{type:String},source:{type:String,default:"fixed"}},emits:["update:value","update:source","update:upperKey","change"],setup(y,{emit:s}){const u=y,l=d(),n=d(),m=p(()=>{var e,a;return[{label:"手动输入",component:(a=(e=u.data)==null?void 0:e.valueType)==null?void 0:a.type,key:"fixed"},{label:"内置参数",component:"tree",key:"upper"}]}),b=p(()=>{var r;const e=((r=u.data)==null?void 0:r.valueType)||"int",a=e==null?void 0:e.type;return a==="boolean"?[{label:e.trueText||!0,value:e.trueValue||!0,id:String(e.trueValue||!0)},{label:e.falseText||!1,value:e.falseValue||!1,id:String(e.falseValue||!1)}]:a==="enum"?e==null?void 0:e.elements.map(t=>({label:t.text,value:t.value,id:t.value})):[]}),c=(e,a)=>{if(e&&a){const r=a.filter(t=>{if(t.children){const i=c(e,t.children);return t.children=i,!!i.length}else if(t.type===e)return!0;return!1});return V(r)}return a||[]},h=p(()=>{var e;return c((e=u.data.valueType)==null?void 0:e.type,g(u==null?void 0:u.builtInList))}),_=(e,a,r)=>{const t={source:n.value,value:l.value};n.value==="upper"&&(t.upperKey=l.value,s("update:upperKey",l.value)),s("update:value",l.value),s("update:source",n.value),s("change",t,e,r,u.data)};return S(()=>{l.value=u.value,n.value=u.source||"fixed"}),(e,a)=>{const r=x;return k(),I(o(O),{options:o(b),tabsOptions:o(m),metricOptions:o(h),value:o(l),"onUpdate:value":a[0]||(a[0]=t=>f(l)?l.value=t:null),source:o(n),"onUpdate:source":a[1]||(a[1]=t=>f(n)?n.value=t:null),valueName:"id",treeKey:"id",onSelect:_},{default:K(({label:t})=>[T(r,{value:t,readonly:"",placeholder:"请选择"},null,8,["value"])]),_:1},8,["options","tabsOptions","metricOptions","value","source"])}}});export{L as _};