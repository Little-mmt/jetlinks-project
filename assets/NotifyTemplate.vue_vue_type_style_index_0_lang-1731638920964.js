import{a0 as J,a1 as M,a2 as z,a3 as F}from"./index-1731638920964.js";import"./index-1731638920964278.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import"./index-1731638920964282.js";import"./index-1731638920964283.js";import{T as y}from"./template-1731638920964.js";import{M as K,N as V}from"./const-17316389209642.js";import{d as $,k as _,w as A,ab as k,U as G,Z as H,f as l,_ as u,X as c,W,u as d,R as X,$ as v,E as Y,F as Z}from"./vue-1731638920964.js";const P={style:{height:"400px","overflow-y":"auto"}},Q=["src"],ee={style:{"font-size":"16px","font-weight":"600"}},te=u("div",{class:"card-item-content-text"}," 通知方式 ",-1),ae=u("div",{class:"card-item-content-text"},"说明",-1),fe=$({__name:"NotifyTemplate",props:{notifierId:{type:String,default:""},value:{type:String,default:""},notifyType:{type:String,default:""}},emits:["update:value","change","update:detail"],setup(b,{emit:p}){const s=b,L=(e,t)=>{var a;return(a=K[e].find(n=>n.value===t))==null?void 0:a.logo},R=e=>{var t;return(t=V.find(a=>a.value===e))==null?void 0:t.label},h=_({}),r=_([]),E=_(),T=[{title:"名称",dataIndex:"name",key:"name",search:{type:"string"}},{title:"ID",dataIndex:"id",key:"id",search:{type:"string"}},{title:"说明",dataIndex:"description",key:"description",search:{type:"string"}}],D=e=>{h.value=e},w={weixin:"wechat",dingTalk:"dingtalk"},I=async e=>{var a,n;if(!(s.notifyType&&s.notifierId))return"";const t=await y.getUser(w[s.notifyType],s.notifierId);return t.status===200?(n=(a=t.result)==null?void 0:a.find(i=>i.id===e))==null?void 0:n.name:""},x=async e=>{var a,n;if(!(s.notifyType&&s.notifierId))return"";const t=await y.getDept(w[s.notifyType],s.notifierId);return t.status===200?(n=(a=t.result)==null?void 0:a.find(i=>i.id===e))==null?void 0:n.name:""},j=async e=>{var a,n;if(!s.notifierId)return"";const t=await y.getTags(s.notifierId);return t.status===200?(n=(a=t.result)==null?void 0:a.find(i=>i.id===e))==null?void 0:n.name:""},q=async e=>{var a,n,i,m,f,g,o,N,S,C;const t={};return s.notifyType==="weixin"&&((a=e==null?void 0:e.template)!=null&&a.toParty&&(t.orgName=await x((n=e==null?void 0:e.template)==null?void 0:n.toParty)),(i=e==null?void 0:e.template)!=null&&i.toUser&&(t.sendTo=await I((m=e==null?void 0:e.template)==null?void 0:m.toUser)),(f=e==null?void 0:e.template)!=null&&f.toTag&&(t.tagName=await j((g=e==null?void 0:e.template)==null?void 0:g.toTag))),s.notifyType==="dingTalk"&&((o=e==null?void 0:e.template)!=null&&o.departmentIdList&&(t.orgName=await x((N=e==null?void 0:e.template)==null?void 0:N.departmentIdList)),(S=e==null?void 0:e.template)!=null&&S.userIdList&&(t.sendTo=await I((C=e==null?void 0:e.template)==null?void 0:C.userIdList))),t},B=async e=>{if(console.log(e,"dt"),r.value.includes(e.id))r.value=[],p("update:value",void 0),p("change",{templateName:void 0,orgName:void 0,sendTo:void 0,tagName:void 0}),p("update:detail",void 0);else{const t=await q(e);r.value=[e.id],p("change",{templateName:e==null?void 0:e.name,...t}),p("update:value",e.id),p("update:detail",e)}},O=e=>{r.value=[...e]},U=async e=>{const t=[{name:"id",value:s.value},{name:"createTime",order:"desc"}],a=await y.getListByConfigId(s.notifierId,{...e,sorts:t});return{code:a.message,result:{data:a.result?a.result:[],pageIndex:0,pageSize:a.result.length,total:a.result.length},status:a.status}};return A(()=>s.value,e=>{e?r.value=[e]:r.value=[]},{deep:!0,immediate:!0}),(e,t)=>{const a=k("pro-search"),n=k("Ellipsis"),i=J,m=M,f=z,g=F;return G(),H(Z,null,[l(a,{columns:T,type:"simple",target:"action-notice-template",onSearch:D,class:"action-search"}),u("div",P,[l(g,{columns:T,request:o=>U(o),model:"CARD",bodyStyle:{padding:0},ref_key:"tableRef",ref:E,params:d(h),gridColumn:2,noPagination:!0,alertRender:!1,rowSelection:{selectedRowKeys:d(r),onChange:O}},{card:c(o=>[l(f,W({showStatus:!1,value:o,showTool:!1,actions:[]},o,{onClick:B,active:d(r).includes(o.id)}),{img:c(()=>[X(e.$slots,"img",{},()=>[u("img",{src:L(o.type,o.provider),class:"notify-logo"},null,8,Q)])]),content:c(()=>[l(n,{style:{width:"calc(100% - 100px)"}},{default:c(()=>[u("span",ee,v(o.name),1)]),_:2},1024),l(m,null,{default:c(()=>[l(i,{span:12},{default:c(()=>[te,u("div",null,v(R(o.type)),1)]),_:2},1024),l(i,{span:12},{default:c(()=>[ae,l(n,null,{default:c(()=>[Y(v(o.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1040,["value","active"])]),_:3},8,["request","params","rowSelection"])])],64)}}});export{fe as _};