import{X as j,au as J,cY as M,Z as $,e as H,a3 as X}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{k as Z,a as O}from"./log-17302521108243.js";import{d as U,ac as G,k as n,w as K,s as Q,ab as _,U as m,V as y,X as s,f as i,u as a,E as C,$ as b,Z as W,F as ee,a1 as te,Y as D}from"./vue-1730252110824.js";import{a as ae}from"./alarm-1730252110824.js";import{_ as oe}from"./info.vue_vue_type_script_setup_true_lang-1730252110824.js";import{u as se}from"./useParams-1730252110824.js";import re from"./LogDetail-1730252110824.js";import"./index-1730252110824284.js";import"./vue-json-viewer-1730252110824.js";import"./useAlarmLevel-1730252110824.js";import"./useRequest-1730252110824.js";import"./config-1730252110824.js";const be=U({__name:"index",setup(ne){var h;const g=(h=G().params)==null?void 0:h.id,P=j(),{params:N}=se(),u=n(!1),I=n(),S=n({}),w=ae(),{data:k}=w,d=n(),v=n(),p=n(),x=n([{title:"告警时间",dataIndex:"alarmTime",key:"alarmTime",scopedSlots:!0,search:{type:"date"}},{title:"告警名称",dataIndex:"alarmConfigName",key:"alarmConfigName"},{title:"说明",dataIndex:"description",key:"description"},{title:"操作",dataIndex:"action",key:"action",scopedSlots:!0}]),B=(e,r)=>e?[{key:"view",text:"查看",tooltip:{title:"查看"},icon:"EyeOutlined",onClick:()=>{d.value=e,u.value=!0}}]:[],L=[{column:"alarmRecordId",termType:"eq$not",value:g,type:"and"}],R=async e=>{var r,o,f;if((r=k.current)!=null&&r.alarmConfigId){const t=await O((o=k.current)==null?void 0:o.alarmConfigId,{...e});if(t.status===200&&((f=t.result)!=null&&f.data))return v.value=t.result.data[0],{code:t.message,result:{data:t.result.data,pageIndex:t.result.pageIndex,pageSize:t.result.pageSize,total:t.result.total},status:t.status}}else return{code:200,result:{data:[],pageIndex:0,pageSize:0,total:0},status:200}},Y=e=>{P.jumpPage("device/Instance/Detail",{id:e,tab:"Running"})};K(()=>g,async()=>{var r,o;const e=await Z(g);e.status===200&&(k.current=e.result||{},(r=I.value)==null||r.reload(),p.value=(o=e.result)==null?void 0:o.targetType,p.value==="device"&&(x.value=[{title:"告警时间",dataIndex:"alarmTime",key:"alarmTime",scopedSlots:!0,search:{type:"date"}},{title:"触发条件",dataIndex:"triggerDesc",key:"triggerDesc"},{title:"告警源",dataIndex:"sourceName",key:"sourceName",scopedSlots:!0,search:{type:"string"}},{title:"告警原因",dataIndex:"actualDesc",key:"actualDesc",scopedSlots:!0,search:{type:"string"}},{title:"操作",dataIndex:"action",key:"action",scopedSlots:!0}]))},{deep:!0,immediate:!0});const A=e=>{S.value=e},T=()=>{u.value=!1};return Q(()=>{d.value=v.value,N.value.detail&&v.value&&(u.value=!0)}),(e,r)=>{const o=_("pro-search"),f=M,t=_("AIcon"),E=$,q=H,z=X,F=_("FullPage"),V=_("page-container");return m(),y(V,null,{default:s(()=>[i(o,{columns:a(x),target:"alarm-log-detail",onSearch:A},null,8,["columns"]),i(F,null,{default:s(()=>[i(z,{columns:a(x),model:"TABLE",ref_key:"tableRef",ref:I,request:R,params:a(S),defaultParams:{terms:L,sorts:[{name:"alarmTime",order:"desc"}]}},{alarmTime:s(l=>[C(b(a(J)(l.alarmTime).format("YYYY-MM-DD HH:mm:ss")),1)]),sourceName:s(l=>[C("设备名称："),i(f,{type:"link",onClick:()=>Y(l.sourceId)},{default:s(()=>[C(b(l.sourceName),1)]),_:2},1032,["onClick"])]),action:s(l=>[i(q,{size:16},{default:s(()=>[(m(!0),W(ee,null,te(B(l,"table"),c=>(m(),y(E,{key:c.key,disabled:c.disabled,popConfirm:c.popConfirm,tooltip:{...c.tooltip},onClick:c.onClick,type:"link",style:{padding:"0px"}},{icon:s(()=>[i(t,{type:c.icon},null,8,["type"])]),_:2},1032,["disabled","popConfirm","tooltip","onClick"]))),128))]),_:2},1024)]),_:1},8,["columns","params","defaultParams"])]),_:1}),a(u)&&a(p)!=="device"?(m(),y(oe,{key:0,data:a(d),onClose:T},null,8,["data"])):D("",!0),a(u)&&a(p)==="device"?(m(),y(re,{key:1,data:a(d),onClose:T},null,8,["data"])):D("",!0)]),_:1})}}});export{be as default};