import{X as se,o as S,eX as J,Z as le,as as ie,e as re,a0 as ce,a1 as pe,d as de,aL as ue,aM as _e,aN as me,$ as fe,a2 as ye,a3 as ge,g as ke}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{T as O}from"./template-1730252110824.js";import{M as j,N as M}from"./const-17302521108242.js";import he from"./index-1730252110824192.js";import ve from"./index-1730252110824194.js";import{d as Ce,k as _,ab as g,U as c,V as u,X as e,f as n,u as m,E as k,R as xe,_ as r,$ as p,W as be,Z as $,F as L,a1 as R,G as Te,Y as Se,af as je,ag as Pe}from"./vue-1730252110824.js";import"./ToUser.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./ToOrg.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./ToTag.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./validate-1730252110824.js";import"./regular-1730252110824.js";import"./Record.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./vue-json-viewer-1730252110824.js";const A=h=>(je("data-v-8a682535"),h=h(),Pe(),h),we=["src"],Oe={class:"card-item-content-title"},Ee=A(()=>r("div",{class:"card-item-content-text"}," 通知方式 ",-1)),Ie=A(()=>r("div",{class:"card-item-content-text"}," 说明 ",-1)),Be=Ce({__name:"index",setup(h){const E=se();let P=[];Object.keys(j).forEach(t=>{P=[...P,...j[t]]});const v=_({}),I=_({}),B=[{title:"模板名称",dataIndex:"name",key:"name",ellipsis:!0,search:{type:"string"}},{title:"通知方式",dataIndex:"type",key:"type",scopedSlots:!0,search:{type:"select",options:M,handleValue:t=>t}},{title:"类型",dataIndex:"provider",key:"provider",scopedSlots:!0,search:{type:"select",options:P,handleValue:t=>t}},{title:"说明",dataIndex:"description",key:"description",scopedSlots:!0,ellipsis:!0,search:{type:"string"}},{title:"操作",key:"action",fixed:"right",width:180,scopedSlots:!0}],F=t=>{I.value=t},U=(t,i)=>{var s;return(s=j[t].find(l=>l.value===i))==null?void 0:s.logo},D=t=>{var i;return(i=M.find(s=>s.value===t))==null?void 0:i.label},X=(t,i)=>{var s;return(s=j[t].find(l=>l.value===i))==null?void 0:s.label},q=()=>{E.jumpPage("notice/Template/Detail",{id:":id"})},G=t=>{const i=new FileReader;return i.readAsText(t),i.onload=async s=>{var f;const l=(f=s.target)==null?void 0:f.result;if(console.log("text: ",l),!t.type.includes("json"))return S("请上传json格式文件","error"),!1;try{const d=JSON.parse(l||"{}"),{success:b}=await O.update(d);return b&&(S("操作成功"),v.value.reload()),!0}catch{}return!0},!1},Y=()=>{J(v.value._dataSource,"通知模板数据")};_(!1);const C=_(!1),w=_(!1),x=_(),N=(t,i)=>{if(!t)return[];const s=[{key:"update",text:"编辑",tooltip:{title:"编辑"},icon:"EditOutlined",onClick:()=>{E.jumpPage("notice/Template/Detail",{id:t.id})}},{key:"debug",text:"调试",tooltip:{title:"调试"},icon:"BugOutlined",onClick:()=>{C.value=!0,x.value=t}},{key:"delete",text:"删除",popConfirm:{title:"确认删除?",onConfirm:async()=>{var d;(await O.del(t.id)).status===200?(S("操作成功！"),(d=v.value)==null||d.reload()):S("操作失败！","error")}},icon:"DeleteOutlined"}],l={key:"others",text:"其他",icon:"EllipsisOutlined",children:[{key:"export",text:"导出",tooltip:{title:"导出"},icon:"ArrowDownOutlined",onClick:()=>{J(t,`${t.name}`)}},{key:"log",text:"通知记录",tooltip:{title:"通知记录"},icon:"BarsOutlined",onClick:()=>{w.value=!0,x.value=t}}]};return i==="card"?s.splice(s.length-1,0,l):s.splice(s.length-1,0,...l.children),s};return(t,i)=>{const s=g("pro-search"),l=le,f=ie,d=re,b=ce,V=g("Ellipsis"),Z=pe,y=g("AIcon"),z=de,H=ue,W=_e,K=me,Q=fe,ee=ye,te=ge,oe=g("FullPage"),ne=g("page-container");return c(),u(ne,null,{default:e(()=>[n(s,{columns:B,target:"notice-template",onSearch:F}),n(oe,null,{default:e(()=>[n(te,{ref_key:"configRef",ref:v,columns:B,request:m(O).list,defaultParams:{sorts:[{name:"createTime",order:"desc"}]},params:m(I),gridColumn:3},{headerTitle:e(()=>[n(d,null,{default:e(()=>[n(l,{type:"primary",onClick:q,hasPermission:"notice/Template:add"},{default:e(()=>[k(" 新增 ")]),_:1}),n(f,{name:"file",accept:".json",showUploadList:!1,"before-upload":G},{default:e(()=>[n(l,{hasPermission:"notice/Template:import"},{default:e(()=>[k(" 导入 ")]),_:1})]),_:1}),n(l,{hasPermission:"notice/Template:export",popConfirm:{title:"确认导出？",onConfirm:Y}},{default:e(()=>[k(" 导出 ")]),_:1},8,["popConfirm"])]),_:1})]),card:e(a=>[n(ee,{showStatus:!1,value:a,actions:N(a,"card"),statusNames:{}},{img:e(()=>[xe(t.$slots,"img",{},()=>[r("img",{src:U(a.type,a.provider),class:"logo"},null,8,we)],!0)]),content:e(()=>[r("h3",Oe,p(a.name),1),n(Z,null,{default:e(()=>[n(b,{span:12},{default:e(()=>[Ee,r("div",null,p(D(a.type)),1)]),_:2},1024),n(b,{span:12},{default:e(()=>[Ie,n(V,null,{default:e(()=>[k(p(a.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),actions:e(o=>[n(Q,be(o.tooltip,{title:o.disabled&&o.tooltip.title}),{default:e(()=>[o.key==="others"?(c(),u(K,{key:0,placement:"bottomRight"},{overlay:e(()=>[n(W,null,{default:e(()=>[(c(!0),$(L,null,R(o.children,(T,ae)=>(c(),u(H,{key:ae},{default:e(()=>[n(l,{type:"link",onClick:T.onClick,hasPermission:`notice/Template:${T.key}`},{icon:e(()=>[n(y,{type:T.icon},null,8,["type"])]),default:e(()=>[r("span",null,p(T.text),1)]),_:2},1032,["onClick","hasPermission"])]),_:2},1024))),128))]),_:2},1024)]),default:e(()=>[n(z,null,{default:e(()=>[n(y,{type:o.icon},null,8,["type"]),r("span",null,p(o.text),1)]),_:2},1024)]),_:2},1024)):o.key==="delete"?(c(),u(l,{key:1,disabled:o.disabled,hasPermission:`notice/Template:${o.key}`,popConfirm:o.popConfirm},{icon:e(()=>[n(y,{type:"DeleteOutlined"})]),_:2},1032,["disabled","hasPermission","popConfirm"])):(c(),u(l,{key:2,disabled:o.disabled,onClick:o.onClick,hasPermission:`notice/Template:${o.key}`},{icon:e(()=>[n(y,{type:o.icon},null,8,["type"])]),default:e(()=>[r("span",null,p(o.text),1)]),_:2},1032,["disabled","onClick","hasPermission"]))]),_:2},1040,["title"])]),_:2},1032,["value","actions"])]),type:e(a=>[r("span",null,p(D(a.type)),1)]),provider:e(a=>[r("span",null,p(X(a.type,a.provider)),1)]),description:e(a=>[n(V,null,{default:e(()=>[k(p(a.description),1)]),_:2},1024)]),action:e(a=>[n(d,{size:16},{default:e(()=>[(c(!0),$(L,null,R(N(a,"table"),o=>(c(),u(l,{key:o.key,danger:o.key==="delete",disabled:o.disabled,popConfirm:o.popConfirm,tooltip:{...o.tooltip},onClick:o.onClick,type:"link",style:{padding:"0px"},hasPermission:"notice/Template:"+o.key},{icon:e(()=>[n(y,{type:o.icon},null,8,["type"])]),_:2},1032,["danger","disabled","popConfirm","tooltip","onClick","hasPermission"]))),128))]),_:2},1024)]),_:3},8,["request","params"])]),_:3}),n(he,{visible:m(C),"onUpdate:visible":i[0]||(i[0]=a=>Te(C)?C.value=a:null),data:m(x)},null,8,["visible","data"]),m(w)?(c(),u(ve,{key:0,data:m(x),onCancel:i[1]||(i[1]=a=>w.value=!1)},null,8,["data"])):Se("",!0)]),_:3})}}});const Ke=ke(Be,[["__scopeId","data-v-8a682535"]]);export{Ke as default};