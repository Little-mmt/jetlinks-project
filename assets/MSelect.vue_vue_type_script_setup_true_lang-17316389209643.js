import{eh as h,ei as C,aD as P,a6 as S}from"./index-1731638920964.js";import{d as V,k as r,s as u,U as n,V as i,X as c,Z as k,F as x,a1 as N,u as p,E as O,$ as I,G as b}from"./vue-1731638920964.js";const L=V({__name:"MSelect",props:{modelValue:{type:String,default:void 0},type:{type:String,default:"POINT"},id:{type:String,default:""}},emits:["update:modelValue"],setup(d,{emit:f}){const l=d,m=(e,t)=>t.label.toLowerCase().indexOf(e.toLowerCase())>=0,s=r([]),o=r(void 0);u(()=>{o.value=l.modelValue});const _=e=>{f("update:modelValue",e)},g=async e=>{if(e){const t=await h({paging:!1,terms:[{terms:[{column:"channelId",value:e}]}]});t.status===200&&(s.value=t.result)}else return[]},v=async e=>{if(e){const t=await C({paging:!1,terms:[{terms:[{column:"collectorId",value:e}]}]});t.status===200&&(s.value=t.result)}else return[]};return u(()=>{l.id?l.type==="POINT"?v(l.id):g(l.id):s.value=[]}),(e,t)=>{const y=P,w=S;return n(),i(w,{allowClear:"",value:p(o),"onUpdate:value":t[0]||(t[0]=a=>b(o)?o.value=a:null),onChange:_,placeholder:"请选择",style:{width:"100%"},"show-search":"","filter-option":m},{default:c(()=>[(n(!0),k(x,null,N(p(s),a=>(n(),i(y,{key:a.id,value:a.id,label:a.name},{default:c(()=>[O(I(a.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["value"])}}});export{L as _};