import{h as D,x as R,a0 as j,a1 as q,a2 as J,a3 as $,g as B}from"./index-1731638920964.js";import"./index-1731638920964278.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import"./index-1731638920964282.js";import"./index-1731638920964283.js";import"./index-1731638920964287.js";import{d as E,n as L,o as V,l as F}from"./product-17316389209644.js";import{q as O}from"./category-1731638920964.js";import{g as U}from"./department-17316389209642.js";import{a as z}from"./setting-17316389209642.js";import{d as x,k as g,o as A,ab as y,U as G,Z as M,f as s,X as r,R as Q,_ as c,u as v,$ as _,E as w,F as X,af as Z,ag as H}from"./vue-1731638920964.js";const I=d=>(Z("data-v-4d888fea"),d=d(),H(),d),W=["src"],Y={style:{width:"calc(100% - 100px)"}},P={style:{"font-size":"16px","font-weight":"600"}},ee=I(()=>c("div",{class:"card-item-content-text"},"设备类型",-1)),te=I(()=>c("div",{class:"card-item-content-text"},"接入方式",-1)),ae=x({name:"Product"}),se=x({...ae,props:{rowKey:{type:String,default:""},detail:{type:Object,default:()=>({})}},emits:["update:rowKey","update:detail","change"],setup(d,{emit:i}){const o=d,b=g(),m=g({}),h=[{title:"ID",dataIndex:"id",width:300,ellipsis:!0,fixed:"left",search:{type:"string"}},{title:"名称",dataIndex:"name",width:200,ellipsis:!0,search:{type:"string",first:!0}},{title:"网关类型",dataIndex:"accessProvider",width:150,ellipsis:!0,hideInTable:!0,search:{type:"select",options:()=>L().then(e=>{const t=e.result||[];return z(t)})}},{title:"接入方式",dataIndex:"accessName",width:150,ellipsis:!0,search:{type:"select",options:()=>V().then(e=>e.result.map(t=>({label:t.name,value:t.id})))}},{title:"设备类型",dataIndex:"deviceType",width:150,search:{type:"select",options:[{label:"直连设备",value:"device"},{label:"网关子设备",value:"childrenDevice"},{label:"网关设备",value:"gateway"}]}},{title:"状态",dataIndex:"state",width:"90px",search:{type:"select",options:[{label:"禁用",value:0},{label:"正常",value:1}]}},{title:"说明",dataIndex:"describe",ellipsis:!0,width:300},{dataIndex:"classifiedId",title:"分类",hideInTable:!0,search:{type:"treeSelect",options:()=>new Promise(e=>{O({paging:!1}).then(t=>{e(t.result)})}),componentProps:{fieldNames:{label:"name",value:"id"}}}},{dataIndex:"id$dim-assets",key:"id$dim-assets",title:"所属组织",hideInTable:!0,search:{type:"treeSelect",componentProps:{fieldNames:{label:"name",value:"value"}},options:()=>new Promise(e=>{U({paging:!1}).then(t=>{const l=u=>u.map(n=>(n.children&&(n.children=l(n.children)),{...n,value:JSON.stringify({assetType:"product",targets:[{type:"org",id:n.id}]})}));e(l(t.result)||[])})})}}],T=e=>{m.value=e},S=e=>{const t=[];return o.rowKey&&t.push({name:"id",value:o.rowKey}),t.push({name:"createTime",order:"desc"}),e.sorts=t,F(e)},C=e=>{(o==null?void 0:o.rowKey)===e.id?(i("update:rowKey",""),i("update:detail",{}),i("change",{})):(i("update:rowKey",e.id),i("update:detail",e),i("change",e))};return A(()=>{o.rowKey&&E(o.rowKey).then(e=>{e.status===200&&(i("update:detail",e.result),i("change",e.result,!0))})}),(e,t)=>{const l=y("pro-search"),u=R,n=y("Ellipsis"),f=j,K=q,N=J,k=$;return G(),M(X,null,[s(l,{columns:h,type:"simple",onSearch:T,class:"scene-search",target:"scene-trigger-device-product"}),s(u,{style:{margin:"0"}}),s(k,{ref_key:"actionRef",ref:b,model:"CARD",columns:h,params:v(m),request:S,gridColumn:2,bodyStyle:{paddingRight:0,paddingLeft:0}},{card:r(a=>[s(N,{value:a,active:d.rowKey===a.id,status:String(a.state),statusText:a.state===1?"正常":"禁用",statusNames:{1:"processing",0:"error"},onClick:p=>C(a)},{img:r(()=>[Q(e.$slots,"img",{},()=>[c("img",{width:80,height:80,src:a.photoUrl||v(D)("/device-product.png")},null,8,W)],!0)]),content:r(()=>[c("div",Y,[s(n,null,{default:r(()=>[c("span",P,_(a.name),1)]),_:2},1024)]),s(K,null,{default:r(()=>[s(f,{span:12},{default:r(()=>[ee,s(n,null,{default:r(()=>{var p;return[w(_((p=a.deviceType)==null?void 0:p.text),1)]}),_:2},1024)]),_:2},1024),s(f,{span:12},{default:r(()=>[te,s(n,null,{default:r(()=>[w(_((a==null?void 0:a.accessName)||"未接入"),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["value","active","status","statusText","onClick"])]),_:3},8,["params"])],64)}}});const ge=B(se,[["__scopeId","data-v-4d888fea"]]);export{ge as default};