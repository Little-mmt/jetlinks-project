import{dR as ae,o as E,dS as ne,dO as de,dI as oe,dN as se,aH as le,d as re,e as ie,$ as ce,aD as ue,a6 as pe,v as me,ds as _e,Z as fe,aT as Ie,F as ve,aI as ye,A as ge,af as he,dM as ke}from"./index-1731638920964.js";import"./index-1731638920964288.js";import"./index-1731638920964282.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import{u as xe}from"./instance-1731638920964.js";import{_ as P}from"./MSelect.vue_vue_type_script_setup_true_lang-1731638920964.js";import Ce from"./PatchMapping-1731638920964.js";import{d as Se,c as we,k as y,r as be,s as je,ab as De,u as c,U as r,V as m,X as n,f as o,E as x,Z as V,F as N,Y as g,a1 as Le,$ as Ee}from"./vue-1731638920964.js";const Re=Se({__name:"index",props:["productList"],emits:["close","getEdgeMap"],setup(R,{emit:C}){const M=R,q=[{title:"名称",dataIndex:"metadataName",key:"metadataName",width:"20%"},{title:"通道",dataIndex:"channelId",key:"channelId",width:"20%"},{title:"采集器",dataIndex:"collectorId",key:"collectorId",width:"20%"},{title:"点位",key:"pointId",dataIndex:"pointId",width:"20%"},{title:"状态",key:"id",dataIndex:"id",width:"10%"},{title:"操作",key:"action",width:"10%"}],B=we("validate"),I=y(),$=(a,t)=>t.label.toLowerCase().indexOf(a.toLowerCase())>=0,e=xe();let h=y();const S=y(!1),w=y([]),v=be({dataSource:[]}),O=y(),T=y(),k=y(!1),A=async()=>{var a,t,s;if((a=e.current)!=null&&a.id){const u=await ke(e.current.id);u.status===200&&(w.value=(s=(t=u.result)==null?void 0:t[0])==null?void 0:s.map(_=>({label:_.name,value:_.id,provider:_.provider})))}},Z=async()=>{S.value=!0,A(),v.dataSource=h.value,S.value=!1},H=a=>{var t;if(a){const s=ae(((t=e.current)==null?void 0:t.id)||"",{deviceId:e.current.parentId,idList:[a]});return s.then(u=>{u.status===200&&(E("操作成功！"),C("getEdgeMap"))}),s}},Q=()=>{k.value=!1,C("close")};je(()=>{var a,t;(a=e.current)!=null&&a.metadata?h.value=(t=e.current)==null?void 0:t.metadata:h.value={},Z()});const X=async()=>{I.value=await B(),I.value&&T.value.validateFields().then(async()=>{var a,t,s;if(v.dataSource.length===0)E("请配置物模型","error");else{w.value.forEach(i=>{v.dataSource.forEach(f=>{i.value===f.channelId&&(f.provider=i.provider)})});const u={...I.value,productName:M.productList.find(i=>{var f;return i.id===((f=I.value)==null?void 0:f.productId)}).name,parentId:e.current.id,id:e.current.parentId?e.current.parentId:void 0},_=e.current.parentId?await ne(u):await de(u);if(_.status===200){const i=v.dataSource.filter(j=>j.channelId),f={info:[{deviceId:(a=_.result)==null?void 0:a.id,deviceName:u.name}]};e.current.parentId||await oe(e.current.id,f);const b={deviceId:e.current.parentId?e.current.parentId:(t=_.result)==null?void 0:t.id,provider:(s=i==null?void 0:i[0])==null?void 0:s.provider,requestList:i};Y(b)}}})},Y=async a=>{(await se(e.current.id,a)).status===200&&(E("保存成功"),C("close"))},z=async()=>{if(I.value=await B(),I.value){const a={...I.value,productName:M.productList.find(t=>{var s;return t.id===((s=I.value)==null?void 0:s.productId)}).name,parentId:e.current.id};O.value=a}k.value=!0};return(a,t)=>{var J;const s=le,u=re,_=ie,i=De("AIcon"),f=ce,b=ue,j=pe,D=me,U=_e,G=fe,K=Ie,W=ve,F=ye,ee=ge,te=he;return(J=c(h))!=null&&J.length?(r(),m(ee,{key:0,spinning:c(S)},{default:n(()=>[o(F,{bordered:!1},{title:n(()=>[o(s,{data:"点位映射"})]),extra:n(()=>[o(_,null,{default:n(()=>[o(u,{onClick:z},{default:n(()=>[x("批量映射")]),_:1}),o(u,{type:"primary",onClick:X},{default:n(()=>[x("保存并应用")]),_:1})]),_:1})]),default:n(()=>[o(W,{ref_key:"formRef",ref:T,model:c(v)},{default:n(()=>[o(K,{dataSource:c(v).dataSource,columns:q},{headerCell:n(({column:d})=>[d.key==="collectorId"?(r(),V(N,{key:0},[x(" 采集器 "),o(f,{title:"边缘网关代理的真实物理设备"},{default:n(()=>[o(i,{type:"QuestionCircleOutlined"})]),_:1})],64)):g("",!0)]),bodyCell:n(({column:d,record:l,index:L})=>[d.dataIndex==="channelId"?(r(),m(D,{key:0,name:["dataSource",L,"channelId"]},{default:n(()=>[o(j,{style:{width:"100%"},value:l[d.dataIndex],"onUpdate:value":p=>l[d.dataIndex]=p,placeholder:"请选择",allowClear:"","filter-option":$},{default:n(()=>[(r(!0),V(N,null,Le(c(w),p=>(r(),m(b,{key:p.value,value:p.value,label:p.label},{default:n(()=>[x(Ee(p.label),1)]),_:2},1032,["value","label"]))),128))]),_:2},1032,["value","onUpdate:value"])]),_:2},1032,["name"])):g("",!0),d.dataIndex==="collectorId"?(r(),m(D,{key:1,name:["dataSource",L,"collectorId"],rules:[{required:!!l.channelId,message:"请选择采集器"}]},{default:n(()=>[o(P,{modelValue:l[d.dataIndex],"onUpdate:modelValue":p=>l[d.dataIndex]=p,id:l.channelId,type:"COLLECTOR",edgeId:c(e).current.id},null,8,["modelValue","onUpdate:modelValue","id","edgeId"])]),_:2},1032,["name","rules"])):g("",!0),d.dataIndex==="pointId"?(r(),m(D,{key:2,name:["dataSource",L,"pointId"],rules:[{required:!!l.channelId,message:"请选择点位"}]},{default:n(()=>[o(P,{modelValue:l[d.dataIndex],"onUpdate:modelValue":p=>l[d.dataIndex]=p,id:l.collectorId,type:"POINT",edgeId:c(e).current.id},null,8,["modelValue","onUpdate:modelValue","id","edgeId"])]),_:2},1032,["name","rules"])):g("",!0),d.dataIndex==="id"?(r(),V(N,{key:3},[l[d.dataIndex]?(r(),m(U,{key:0,status:"success",text:"已绑定"})):(r(),m(U,{key:1,status:"error",text:"未绑定"}))],64)):g("",!0),d.key==="action"?(r(),m(G,{key:4,type:"link",tooltip:{title:"解绑"},disabled:!l.id,popConfirm:{title:"确认解绑",onConfirm:()=>H(l.id)}},{default:n(()=>[o(i,{type:"icon-jiebang"})]),_:2},1032,["disabled","popConfirm"])):g("",!0)]),_:1},8,["dataSource"])]),_:1},8,["model"])]),_:1}),c(k)?(r(),m(Ce,{key:0,deviceId:c(e).current.parentId,onClose:t[0]||(t[0]=d=>k.value=!1),onSave:Q,metaData:c(v).dataSource,edgeId:c(e).current.id,deviceData:c(O)},null,8,["deviceId","metaData","edgeId","deviceData"])):g("",!0)]),_:1},8,["spinning"])):(r(),m(F,{key:1},{default:n(()=>[o(te,{description:"暂无数据，请配置物模型",style:{margin:"10% 0"}})]),_:1}))}}});export{Re as _};