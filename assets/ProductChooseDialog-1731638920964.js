import{j as g,a6 as h,v as C,F as b,aa as I,g as P}from"./index-1731638920964.js";import{b as D}from"./home-1731638920964.js";import{d as k,k as _,r as x,U as y,V as j,X as n,f as r,u as e}from"./vue-1731638920964.js";const w=k({__name:"ProductChooseDialog",props:{visible:{type:Boolean}},emits:["confirm","update:visible"],setup(B,{emit:l}){const{t:s}=g(),c=_(),a=x({productId:void 0}),d=_([]);(()=>{D().then(({result:t})=>{d.value=t.filter(o=>!(o!=null&&o.accessId)).map(o=>({label:o.name,value:o.id}))})})();const u=()=>{var t;(t=c.value)==null||t.validate().then(()=>{l("confirm",a.productId),l("update:visible",!1)})};return(t,o)=>{const p=h,m=C,f=b,v=I;return y(),j(v,{visible:"",title:e(s)("dialogs.ProductChooseDialog.926510-0"),width:"700px",onOk:u,onCancel:o[1]||(o[1]=i=>l("update:visible",!1)),maskClosable:!1,class:"access-method-dialog-container"},{default:n(()=>[r(f,{model:e(a),ref_key:"formRef",ref:c,layout:"vertical"},{default:n(()=>[r(m,{label:e(s)("dialogs.ProductChooseDialog.926510-1"),name:"productId",rules:[{required:!0,message:e(s)("dialogs.ProductChooseDialog.926510-2")}]},{default:n(()=>[r(p,{value:e(a).productId,"onUpdate:value":o[0]||(o[0]=i=>e(a).productId=i),style:{width:"100%"},"show-search":"",options:e(d),placeholder:e(s)("dialogs.ProductChooseDialog.926510-2")},null,8,["value","options","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["title"])}}});const U=P(w,[["__scopeId","data-v-614f7c36"]]);export{U as default};