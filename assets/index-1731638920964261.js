import{d as U,k as l,e as V,w as h,U as x,Z as K,_ as p,R as E,Y as H,f as n,v as S,A as B,u as e,G as y,X as g,E as I,a0 as O}from"./vue-1731638920964.js";import{d as $,_ as z,f as G,g as L}from"./index-1731638920964.js";import q from"./HomePage-1731638920964.js";import{g as J,a as M}from"./apiPage-1731638920964.js";import{_ as X}from"./LeftTree.vue_vue_type_style_index_0_lang-1731638920964.js";import Y from"./ChooseApi-1731638920964.js";import Z from"./ApiDoes-1731638920964.js";import F from"./ApiTest-1731638920964.js";import{u as Q}from"./department-1731638920964.js";import"./index-1731638920964278.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import"./index-1731638920964282.js";import"./index-1731638920964283.js";import"./uniqBy-1731638920964.js";import"./InputCard-1731638920964.js";import"./utils-17316389209642.js";import"./monaco-1731638920964.js";import"./index-1731638920964285.js";import"./toLower-1731638920964.js";const W={class:"api-page-container"},ee={class:"top"},te={key:0,style:{"font-size":"16px","margin-bottom":"48px"}},se={class:"api-page-body"},oe={class:"tree-content"},ae={class:"api-page-detail"},ie={class:"url-page"},ne={key:0,class:"api-details"},le={class:"api-details-tabs"},pe=U({name:"apiPage"}),ce=U({...pe,props:{mode:{},showTitle:{type:Boolean},hasHome:{type:Boolean},code:{}},setup(j){const a=j,C=Q(),_=l(!!a.hasHome),v=l([]),D=V(()=>({padding:a.mode==="api"?0:"24px"})),N=(t,o={})=>{if(t.key==="home")return _.value=!0;if(k.value=o,!t.apiList)return;_.value=!1;const m=t.apiList,u=[];m==null||m.forEach(w=>{const{method:s,url:T}=w;for(const f in s)Object.prototype.hasOwnProperty.call(s,f)&&u.push({...s[f],url:T,method:f,id:s[f].operationId})}),v.value=u},r=l("does"),k=l({}),A={url:"",method:"",summary:"",parameters:[],responses:{},requestBody:{}},i=l(A),c=l([]),b=l([]),d=l({});P();function P(){R(),h(v,()=>{r.value="does",i.value=A}),h(()=>i.value.url,()=>r.value="does")}function R(){a.mode==="appManger"?J(a.code).then(t=>{c.value=t.result,b.value=[...t.result],d.value={}}):a.mode==="api"&&M().then(t=>{c.value=t.result,b.value=[...t.result]})}return h(()=>c.value,t=>{C.setSelectedKeys(t)}),h(()=>d.value,t=>{C.setChangedApis(t)}),(t,o)=>{const m=$,u=z,w=G;return x(),K("div",W,[p("div",ee,[E(t.$slots,"top",{},void 0,!0)]),p("div",{class:"api-page-content",style:O(e(D))},[a.showTitle?(x(),K("div",te," API文档 ")):H("",!0),p("div",se,[p("div",oe,[n(X,{onSelect:N,mode:a.mode,"has-home":a.hasHome,code:a.code},null,8,["mode","has-home","code"])]),p("div",ae,[S(n(q,null,null,512),[[B,e(_)]]),S(p("div",ie,[S(n(Y,{"click-api":e(i),"onUpdate:clickApi":o[0]||(o[0]=s=>y(i)?i.value=s:null),selectedRowKeys:e(c),"onUpdate:selectedRowKeys":o[1]||(o[1]=s=>y(c)?c.value=s:null),changedApis:e(d),"onUpdate:changedApis":o[2]||(o[2]=s=>y(d)?d.value=s:null),"table-data":e(v),"source-keys":e(b),mode:a.mode,onRefresh:R},null,8,["click-api","selectedRowKeys","changedApis","table-data","source-keys","mode"]),[[B,!e(i).url]]),e(i).url&&e(v).length>0?(x(),K("div",ne,[n(m,{onClick:o[3]||(o[3]=s=>i.value=A),style:{"margin-bottom":"24px",width:"80px"}},{default:g(()=>[I("返回")]),_:1}),p("div",le,[n(w,{activeKey:e(r),"onUpdate:activeKey":o[4]||(o[4]=s=>y(r)?r.value=s:null),type:"card"},{default:g(()=>[n(u,{key:"does",tab:"文档"},{default:g(()=>[n(Z,{"select-api":e(i),schemas:e(k)},null,8,["select-api","schemas"])]),_:1}),n(u,{key:"test",tab:"调试"},{default:g(()=>[n(F,{"select-api":e(i),schemas:e(k)},null,8,["select-api","schemas"])]),_:1})]),_:1},8,["activeKey"])])])):H("",!0)],512),[[B,!e(_)]])])])],4)])}}});const Ue=L(ce,[["__scopeId","data-v-0662524a"]]);export{Ue as default};