import{eQ as G,o as Q,dp as X,d as Y,$ as H,Z as K,e as P,a3 as ee,A as te,eR as ne,dk as ae}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import oe from"./PropertyCard-1730252110824.js";import{V as ie}from"./ValueRender-1730252110824.js";import{_ as re}from"./Save.vue_vue_type_script_setup_true_lang-17302521108244.js";import{_ as le}from"./index.vue_vue_type_script_setup_true_lang-173025211082420.js";import se from"./Indicators-1730252110824.js";import{u as ue}from"./instance-1730252110824.js";import{t as ce}from"./throttle-1730252110824.js";import{l as E,t as pe,g as de}from"./lodash.default-1730252110824.js";import{m as me}from"./map-17302521108242.js";import{d as fe,k as c,r as ye,w as ve,b as _e,ab as ge,U as y,Z as z,f as m,X as p,u as s,G as ke,E as be,$ as Ce,F as A,a1 as he,V as C,a9 as xe,W as Se,Y as R}from"./vue-1730252110824.js";const Ue=fe({__name:"index",props:{data:{type:Array,default:()=>[]}},setup(J){const O=J,q=[{title:"名称",dataIndex:"name",key:"name",ellipsis:!0},{title:"值",dataIndex:"value",key:"value",scopedSlots:!0},{title:"更新时间",dataIndex:"time",key:"time",scopedSlots:!0},{title:"操作",dataIndex:"action",key:"action",scopedSlots:!0}],h=c(""),_=c([]),S=c([]),I=c(!1),$=c(!1),g=c({}),f=ue(),w=c(!1),V=c(!1),k=c({}),j=ye({name:""}),B=c(),b=c(),D=e=>{var i,a,l,u,o,d;const t=[];return(a=(i=e.expands)==null?void 0:i.type)!=null&&a.includes("write")&&t.push({key:"edit",tooltip:{title:"设置属性至设备"},icon:"EditOutlined",onClick:()=>{I.value=!0,g.value=e}}),(((l=e.expands)==null?void 0:l.metrics)||[]).length&&["int","long","float","double","string","boolean","date"].includes(((u=e.valueType)==null?void 0:u.type)||"")&&t.push({key:"metrics",tooltip:{title:"指标"},icon:"ClockCircleOutlined",onClick:()=>{w.value=!0,g.value=e}}),(d=(o=e.expands)==null?void 0:o.type)!=null&&d.includes("read")&&t.push({key:"read",tooltip:{title:"获取最新属性值"},icon:"SyncOutlined",onClick:async()=>{f.current.id&&e.id&&(await G(f.current.id,e.id)).status===200&&Q("操作成功！")}}),t.push({key:"detail",text:"详情",tooltip:{title:"详情"},icon:"BarsOutlined",onClick:()=>{$.value=!0,g.value=e}}),t},F=e=>{(e||[]).sort((t,i)=>t.timestamp-i.timestamp).forEach(t=>{const{value:i}=t;k.value[i==null?void 0:i.property]={...t,...i}})};let T=new Map;const N=ce(()=>{const e=[...T.values()];F(e)},500),U=()=>{var i;const e=`instance-info-property-${f.current.id}-${f.current.productId}-${_.value.map(a=>a.id).join("-")}`,t=`/dashboard/device/${f.current.productId}/properties/realTime`;b.value=(i=ae(e,t,{deviceId:f.current.id,properties:_.value.map(a=>a.id),history:1}))==null?void 0:i.pipe(me(a=>a.payload)).subscribe(a=>{var l,u;(l=a.value)!=null&&l.property&&(T.set((u=a.value)==null?void 0:u.property,a),N())})},L=async()=>{var i,a;if(!((i=_.value)!=null&&i.length))return;const e=[{dashboard:"device",object:f.current.productId,measurement:"properties",dimension:"history",params:{deviceId:f.current.id,history:1,properties:_.value.map(l=>l.id)}}];V.value=!0;const t=await ne(e);if(t.status===200){const l=(t.result||[]).map(o=>{var d,v,x;return{timeString:(d=o.data)==null?void 0:d.timeString,timestamp:(v=o.data)==null?void 0:v.timestamp,...(x=o==null?void 0:o.data)==null?void 0:x.value}}),u={};pe(de(l,"property")).map(o=>({list:o.sort((d,v)=>v.timestamp-d.timestamp),property:o[0].property})).forEach(o=>{u[o.property]=o.list[0]}),k.value={...s(k),...u}}b.value&&((a=b.value)==null||a.unsubscribe()),U(),V.value=!1},M=e=>new Promise(t=>{const i=e.pageIndex*e.pageSize,a=(e.pageIndex+1)*e.pageSize;let l=E.cloneDeep(S.value);if(e!=null&&e.name){const u=S.value.filter(o=>(o==null?void 0:o.name.indexOf(e.name))!==-1);l=E.cloneDeep(u)}_.value=l.slice(i,a),T.clear(),t({result:{data:_.value,pageIndex:e.pageIndex||0,pageSize:e.pageSize||12,total:l.length},status:200}),L()});ve(()=>O.data,e=>{var t;e.length&&(S.value=e,j.name="",console.log(B.value,"ref"),(t=B.value)==null||t.reload())},{deep:!0,immediate:!0});const W=()=>{j.name=h.value};return _e(()=>{var e;b.value&&((e=b.value)==null||e.unsubscribe())}),(e,t)=>{const i=X,a=ge("AIcon"),l=Y,u=H,o=K,d=P,v=ee,x=te;return y(),z(A,null,[m(x,{spinning:s(V)},{default:p(()=>[m(v,{ref_key:"tableRef",ref:B,columns:q,request:M,params:s(j),bodyStyle:{padding:"0 0 0 20px"},scroll:{y:450}},{headerTitle:p(()=>[m(i,{placeholder:"请输入名称",style:{width:"300px","margin-bottom":"10px"},onSearch:W,value:s(h),"onUpdate:value":t[0]||(t[0]=n=>ke(h)?h.value=n:null),allowClear:!0},null,8,["value"])]),card:p(n=>[m(oe,{data:{...n,...s(k)[n==null?void 0:n.id]},actions:D(n)},null,8,["data","actions"])]),value:p(n=>[m(ie,{type:"table",data:n,value:s(k)[n==null?void 0:n.id]},null,8,["data","value"])]),time:p(n=>{var r;return[be(Ce(((r=s(k)[n==null?void 0:n.id])==null?void 0:r.timeString)||"--"),1)]}),action:p(n=>[m(d,{size:16},{default:p(()=>[(y(!0),z(A,null,he(D(n),r=>(y(),z(A,{key:r.key},[r.key!=="edit"?(y(),C(u,xe(Se({key:0},r.tooltip)),{default:p(()=>[m(l,{style:{padding:"0"},type:"link",disabled:r.disabled,onClick:Z=>r.onClick&&r.onClick(n)},{default:p(()=>[m(a,{type:r.icon},null,8,["type"])]),_:2},1032,["disabled","onClick"])]),_:2},1040)):(y(),C(o,{key:1,disabled:r.disabled,popConfirm:r.popConfirm,tooltip:r.tooltip,onClick:Z=>r.onClick&&r.onClick(n),type:"link",style:{padding:"0px"},hasPermission:"device/Instance:update"},{icon:p(()=>[m(a,{type:r.icon},null,8,["type"])]),_:2},1032,["disabled","popConfirm","tooltip","onClick"]))],64))),128))]),_:2},1024)]),_:1},8,["params"])]),_:1},8,["spinning"]),s(I)?(y(),C(re,{key:0,onClose:t[1]||(t[1]=n=>I.value=!1),data:s(g)},null,8,["data"])):R("",!0),s(w)?(y(),C(se,{key:1,onClose:t[2]||(t[2]=n=>w.value=!1),data:s(g)},null,8,["data"])):R("",!0),s($)?(y(),C(le,{key:2,data:s(g),onClose:t[3]||(t[3]=n=>$.value=!1)},null,8,["data"])):R("",!0)],64)}}});export{Ue as _};