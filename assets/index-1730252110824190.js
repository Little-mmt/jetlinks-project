import{d as E,k as d,w as A,o as pe,ab as me,U as w,Z as F,f as o,X as r,u as l,G as V,at as fe,V as N,Y as j,E as _e,F as ye,a1 as ve,W as ge}from"./vue-1730252110824.js";import{F as z,o as x,I as he,dg as Ie,af as ke,a0 as Ce,d as we,ds as be,e as xe,Z as Ue,aT as Te,a1 as Ne,aa as Pe,a6 as Se,v as Be,g as $e}from"./index-1730252110824.js";import"./index-1730252110824282.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import{C as u}from"./config-17302521108242.js";const je=E({name:"SyncUser"}),Le=E({...je,props:{data:{type:Object,default:()=>({})}},emits:["cancel"],setup(K,{emit:Oe}){const a=K,R=z.useForm,P=d([]),I=d(""),k=d(""),U=async()=>{var i,n;let e=null;a.data.type==="dingTalk"?e=await u.dingTalkDept(a.data.id):a.data.type==="weixin"&&(e=await u.weChatDept(a.data.id));let t=e==null?void 0:e.result;I.value&&(t=(i=e==null?void 0:e.result)==null?void 0:i.filter(f=>f.name.indexOf(I.value)>-1)),P.value=t,t.length&&(k.value=(n=t[0])==null?void 0:n.id)},M=e=>{e.length&&(k.value=e[0],$.value=12,B.value=1)},W=[{title:a.data.type==="weixin"?"企业微信用户名":"钉钉用户名",dataIndex:"thirdPartyUserName",key:"thirdPartyUserName"},{title:"用户",dataIndex:"userName",key:"userName",scopedSlots:!0},{title:"绑定状态",dataIndex:"status",key:"status",scopedSlots:!0},{title:"操作",dataIndex:"action",key:"action",scopedSlots:!0}],Z=(e,t)=>{if(!e)return[];const i=[{key:"bind",text:"绑定",tooltip:{title:"绑定"},icon:"EditOutlined",onClick:()=>{ae(e)}},{key:"unbind",text:"解绑",icon:"DisconnectOutlined",popConfirm:{title:"确认解绑?",onConfirm:()=>{const n=u.unBindUser({bindingId:e.bindId},e.bindId);return n.then(()=>{x("操作成功"),y()}),n}}}];return e.status.value==="success"?i:i.filter(n=>n.key!=="unbind")},q=async()=>{await y([{column:`id$user-third$${a.data.type}_${a.data.provider}$not`}]);const e=b.value.filter(t=>t.userId&&t.status.value==="error").map(t=>({userId:t.userId,providerName:t.thirdPartyUserName,thirdPartyUserId:t.thirdPartyUserId}));a.data.type==="dingTalk"?u.dingTalkBindUser(e,a.data.id).then(()=>{x("操作成功"),y()}):a.data.type==="weixin"&&u.weChatBindUser(e,a.data.id).then(()=>{x("操作成功"),y()})},G=async()=>{let e=null;return a.data.type==="dingTalk"?e=await u.getDingTalkUsers(a.data.id,k.value):a.data.type==="weixin"&&(e=await u.getWeChatUsers(a.data.id,k.value)),e==null?void 0:e.result},X=async()=>{let e=null;return a.data.type==="dingTalk"?e=await u.getDingTalkBindUsers(a.data.id):a.data.type==="weixin"&&(e=await u.getWeChatBindUsers(a.data.id)),e==null?void 0:e.result},L=d([]),O=async e=>{const t={paging:!1,terms:e},{result:i}=await u.getPlatformUsers(t);return L.value=i.map(n=>({label:n.name+` (${n.username})`,value:n.id,...n})),i},b=d([]),S=d(!1),y=e=>{S.value=!0,Promise.all([G(),X(),O(e)]).then(t=>{b.value=[];const[i,n,f]=t;(i||[]).forEach(c=>{let m=f.find(g=>g.id===(c==null?void 0:c.id));const s=n.find(g=>g.thirdPartyUserId===c.id);s&&(m=f.find(g=>g.id===s.userId)),b.value.push({thirdPartyUserId:c.id,thirdPartyUserName:c.name,bindId:s==null?void 0:s.id,userId:m==null?void 0:m.id,userName:m?`${m.name}(${m.username})`:s==null?void 0:s.providerName,status:{text:s!=null&&s.providerName?"已绑定":"未绑定",value:s!=null&&s.providerName?"success":"error"}})})}).finally(()=>{S.value=!1})},B=d(1),$=d(12),Y=e=>{B.value=e.current,$.value=e.pageSize},v=d(!1),T=d(!1),_=d({userId:"",thirdPartyUserId:"",thirdPartyUserName:"",bindId:""}),H=d({userId:[{required:!0,message:"请选择用户",trigger:"change"}]}),{resetFields:Q,validate:ee,validateInfos:te,clearValidate:De}=R(_.value,H.value),ae=e=>{v.value=!0,Object.assign(_.value,e),O([{column:`id$user-third$${a.data.type}_${a.data.provider}$not`}])},ne=(e,t)=>{var n,f,c;return(((c=(f=(n=t==null?void 0:t.componentOptions)==null?void 0:n.children)==null?void 0:f[0])==null?void 0:c.text)||t.label).toLowerCase().indexOf(e.toLowerCase())>=0},se=()=>{ee().then(async()=>{const e={providerName:_.value.thirdPartyUserName,thirdPartyUserId:_.value.thirdPartyUserId,userId:_.value.userId,id:_.value.bindId};T.value=!0,a.data.type==="dingTalk"?u.dingTalkBindUser([e],a.data.id).then(()=>{x("操作成功"),v.value=!1,y()}).finally(()=>{T.value=!1}):a.data.type==="weixin"&&u.weChatBindUser([e],a.data.id).then(()=>{x("操作成功"),v.value=!1,y()}).finally(()=>{T.value=!1})})},oe=()=>{v.value=!1,Q()};return A(()=>k.value,()=>{y()}),A(()=>I.value,e=>{e||U()}),pe(()=>{U()}),(e,t)=>{const i=me("AIcon"),n=he,f=Ie,c=ke,m=Ce,s=we,g=be,D=xe,le=Ue,ie=Te,re=Ne,J=Pe,de=Se,ue=Be,ce=z;return w(),F("div",null,[o(J,{visible:"",title:"同步用户",footer:null,onCancel:t[1]||(t[1]=p=>e.$emit("cancel")),width:"80%"},{default:r(()=>[o(re,{gutter:10,class:"model-body"},{default:r(()=>[o(m,{span:4},{default:r(()=>[o(n,{value:l(I),"onUpdate:value":t[0]||(t[0]=p=>V(I)?I.value=p:null),onKeyup:fe(U,["enter"]),allowClear:"",placeholder:"请输入部门名称",style:{"margin-bottom":"8px"}},{addonAfter:r(()=>[o(i,{type:"SearchOutlined",style:{cursor:"pointer"},onClick:U})]),_:1},8,["value","onKeyup"]),o(f,{"tree-data":l(P),fieldNames:{title:"name",key:"id"},selectedKeys:[l(k)],onSelect:M,showLine:{showLeafIcon:!1},"show-icon":!0},null,8,["tree-data","selectedKeys"]),l(P).length?j("",!0):(w(),N(c,{key:0}))]),_:1}),o(m,{span:20},{default:r(()=>[o(s,{type:"primary",onClick:q},{default:r(()=>[_e(" 自动绑定 ")]),_:1}),o(ie,{ref:"tableRef",columns:W,dataSource:l(b),loading:l(S),pagination:{total:l(b).length,current:l(B),pageSize:l($),pageSizeOptions:["12","24","48","96"],showSizeChanger:!0,hideOnSinglePage:!1,showTotal:(p,C)=>`第 ${C[0]} - ${C[1]} 条/总共 ${p} 条`},onChange:Y},{bodyCell:r(({column:p,record:C,index:Je})=>[p.dataIndex==="status"?(w(),N(D,{key:0},{default:r(()=>[o(g,{status:C.status.value,text:C.status.text},null,8,["status","text"])]),_:2},1024)):j("",!0),p.dataIndex==="action"?(w(),N(D,{key:1},{default:r(()=>[(w(!0),F(ye,null,ve(Z(C,"table"),h=>(w(),N(le,{key:h.key,disabled:h.disabled,popConfirm:h.popConfirm,tooltip:{...h.tooltip},onClick:h.onClick,type:"link",style:{padding:"0 5px"},danger:h.key==="delete"},{icon:r(()=>[o(i,{type:h.icon},null,8,["type"])]),_:2},1032,["disabled","popConfirm","tooltip","onClick","danger"]))),128))]),_:2},1024)):j("",!0)]),_:1},8,["dataSource","loading","pagination"])]),_:1})]),_:1})]),_:1}),o(J,{visible:l(v),"onUpdate:visible":t[3]||(t[3]=p=>V(v)?v.value=p:null),title:"绑定用户",maskClosable:!1,"confirm-loading":l(T),onCancel:oe,onOk:se},{default:r(()=>[o(ce,{layout:"vertical"},{default:r(()=>[o(ue,ge({label:"用户"},l(te).userId),{default:r(()=>[o(de,{value:l(_).userId,"onUpdate:value":t[2]||(t[2]=p=>l(_).userId=p),options:l(L),allowClear:"","show-search":"","option-filter-prop":"children","filter-option":ne,placeholder:"请选择用户"},null,8,["value","options"])]),_:1},16)]),_:1})]),_:1},8,["visible","confirm-loading"])])}}});const Me=$e(Le,[["__scopeId","data-v-004b6084"]]);export{Me as default};