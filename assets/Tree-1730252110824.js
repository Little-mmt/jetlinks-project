import{cW as D,cX as X,cY as q,af as z,A as J,g as W}from"./index-1730252110824.js";import"./index-1730252110824292.js";import"./index-1730252110824293.js";import{f as Y,h as Z}from"./collector-1730252110824.js";import{d as $,k as l,e as G,w as H,o as Q,ab as R,U as o,Z as m,f as g,X as k,F as E,a1 as K,u as i,V as L,_ as b,$ as x,E as ee,a4 as te,af as ae,ag as ce}from"./vue-1730252110824.js";const se=u=>(ae("data-v-9c89acfd"),u=u(),ce(),u),ne={class:"tree-content"},re=se(()=>b("div",{class:"tree-header"},[b("div",null,"数据源")],-1)),oe={href:"javascript:void(0);"},le={key:0,class:"treeContainer"},ie=["onClick"],ue=$({__name:"Tree",props:{data:{type:Array,default:()=>[]},unSelectKeys:{type:String||Array,default:""}},emits:["change","cancelAll","addAll"],setup(u,{emit:I}){var j;const A=u,S=(j=A.data)==null?void 0:j.channelId,r=l([]),N=l([]),d=l(!1);l(!1);const p=l(),_=l([{breadcrumbName:"全部",nodeId:void 0}]),T=G(()=>{var t;return(t=p.value)==null?void 0:t.some(e=>r.value.some(s=>s===e.id))}),O=t=>{var v,y,n,h,B,M;const e={...t},s=[],c=s.length?s[s.length-1]:void 0;if(s.map(w=>w==null?void 0:w.id).includes(e.id))return;const a={features:{value:c?(v=c==null?void 0:c.features)==null?void 0:v.value:((e==null?void 0:e.features)||[]).includes("changedOnly"),check:!0},id:(e==null?void 0:e.id)||"",name:(e==null?void 0:e.name)||"",accessModes:{value:c?(y=c==null?void 0:c.accessModes)==null?void 0:y.value:(e==null?void 0:e.accessModes)||[],check:!0},type:e==null?void 0:e.type,configuration:{...e==null?void 0:e.configuration,interval:{value:c?(h=(n=c==null?void 0:c.configuration)==null?void 0:n.interval)==null?void 0:h.value:((B=e==null?void 0:e.configuration)==null?void 0:B.interval)||3e3,check:!0},nodeId:e==null?void 0:e.id}};((M=r.value)==null?void 0:M.includes(e.id))||(r.value.push(e.id),I("change",a,!0))},P=async t=>{t!=null&&t.folder?(C(t.key),_.value.push({breadcrumbName:t.name,nodeId:t.key})):O(t)},V=async()=>{var e;d.value=!0;const t=await Y({paging:!1,terms:[{terms:[{column:"collectorId",value:(e=A.data)==null?void 0:e.id}]}]});t.status===200&&(N.value=t.result.map(s=>s.pointKey)),C(void 0),d.value=!1},F=()=>{var e;const t=[];(e=p.value)==null||e.forEach(s=>{var c;if(!s.folder){const a={...s},f={features:{value:((a==null?void 0:a.features)||[]).includes("changedOnly"),check:!0},id:(a==null?void 0:a.id)||"",name:(a==null?void 0:a.name)||"",accessModes:{value:(a==null?void 0:a.accessModes)||[],check:!0},type:a==null?void 0:a.type,configuration:{...a==null?void 0:a.configuration,interval:{value:((c=a==null?void 0:a.configuration)==null?void 0:c.interval)||3e3,check:!0},nodeId:a==null?void 0:a.id}};t.push(f)}}),T.value?I("cancelAll",t):(t.forEach(s=>{r.value.push(s.id)}),I("addAll",t))},C=async t=>{const e=t?{id:S,nodeId:t}:{id:S};d.value=!0;const s=await Z(e);p.value=s.result.map(c=>({...c,key:c.id,title:c.name})),d.value=!1},U=(t,e)=>{_.value.splice(t+1,_.value.length-1),C(e)};return H(()=>A.unSelectKeys,t=>{typeof t=="string"?r.value=r.value.filter(e=>e!==t):r.value=r.value.filter(e=>!(t!=null&&t.some(s=>s===e)))},{deep:!0}),Q(()=>{V()}),(t,e)=>{const s=D,c=X,a=q,f=R("AIcon"),v=z,y=J;return o(),m("div",ne,[re,g(y,{spinning:i(d)},{default:k(()=>[g(c,null,{default:k(()=>[(o(!0),m(E,null,K(i(_),(n,h)=>(o(),L(s,{onClick:()=>U(h,n.nodeId)},{default:k(()=>[b("a",oe,x(n.breadcrumbName),1)]),_:2},1032,["onClick"]))),256))]),_:1}),g(a,{onClick:F,block:"",style:{"margin-bottom":"10px"}},{default:k(()=>[ee(x(i(T)?"全部撤销":"全部添加"),1)]),_:1}),i(p)?(o(),m("div",le,[(o(!0),m(E,null,K(i(p),n=>(o(),m("div",{class:"treeItem",onClick:()=>P(n)},[g(f,{type:n!=null&&n.folder?"icon-wenjianjia":"icon-dianwei",style:{"margin-right":"10px"}},null,8,["type"]),b("span",{class:te([i(N).includes(n.key)?"tree-selected":"tree-title"])},x(n.name),3)],8,ie))),256))])):(o(),L(v,{key:1,style:{"margin-top":"22%"}}))]),_:1},8,["spinning"])])}}});const ve=W(ue,[["__scopeId","data-v-9c89acfd"]]);export{ve as default};