import{d as R,k as l,ac as j,w as A,ab as g,U as m,Z as x,f as o,X as n,u as s,E,F as O,a1 as L,V as I,G as N,Y as $}from"./vue-1730252110824.js";import{X as D,Z as b,e as J,a3 as M,o as C,g as U}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{_ as X}from"./AddDialog.vue_vue_type_script_setup_true_lang-1730252110824.js";import{i as Z,j as z}from"./role-1730252110824.js";const G={class:"role-container"},Y=R({name:"Role"}),H=R({...Y,props:{groupId:{type:String,default:""}},setup(k){const d=k,P="system/Role",{jumpPage:T}=D(),_=l("add"),v=l(),S=!!j().query.save,y=l({terms:[]}),f=l(),r=l(S),h=[{title:"标识",dataIndex:"id",key:"id",ellipsis:!0,fixed:"left",search:{type:"string"}},{title:"名称",dataIndex:"name",key:"name",ellipsis:!0,search:{type:"string"}},{title:"说明",key:"description",ellipsis:!0,dataIndex:"description",search:{type:"string"}},{title:"操作",dataIndex:"action",key:"action",width:120,fixed:"right",scopedSlots:!0}],q=(t,a)=>{if(!t)return[];const p=[{key:"update",text:"编辑",tooltip:{title:"编辑"},icon:"EditOutlined",onClick:()=>{r.value=!0,_.value="edit",v.value=t}},{key:"update",text:"权限配置",tooltip:{title:"权限配置"},onClick:()=>{T("system/Role/Detail",{id:t.id})},icon:"FormOutlined"},{key:"delete",text:"删除",tooltip:{title:"删除"},popConfirm:{title:"确认删除?",placement:"topRight",onConfirm:async()=>{var c;(await z(t.id)).status===200?(C("操作成功!"),(c=f.value)==null||c.reload()):C("操作失败!","error")}},icon:"DeleteOutlined"}];return a==="card"?p.filter(i=>i.key!=="view"):p},w=()=>{r.value=!0,_.value="add"},B=t=>{y.value.terms=d.groupId?[{value:d.groupId,termType:"eq",column:"groupId"},...t.terms]:[...t.terms]};return A(()=>d.groupId,t=>{y.value=t?{terms:[{value:d.groupId,termType:"eq",column:"groupId"}]}:{terms:[]}}),(t,a)=>{const p=g("pro-search"),i=g("AIcon"),c=J,F=M,V=g("FullPage");return m(),x("div",G,[o(p,{columns:h,target:"system-role",onSearch:B}),o(V,null,{default:n(()=>[o(F,{ref_key:"tableRef",ref:f,columns:h,request:s(Z),model:"TABLE",params:s(y),defaultParams:{sorts:[{name:"createTime",order:"desc"},{name:"id",order:"desc"}]}},{headerTitle:n(()=>[o(b,{type:"primary",hasPermission:`${P}:add`,onClick:w},{default:n(()=>[o(i,{type:"PlusOutlined"}),E("新增 ")]),_:1},8,["hasPermission"])]),action:n(u=>[o(c,{size:16},{default:n(()=>[(m(!0),x(O,null,L(q(u,"table"),e=>(m(),I(b,{key:e.key,disabled:e.disabled,popConfirm:e.popConfirm,tooltip:{...e.tooltip},onClick:e.onClick,type:"link",style:{padding:"0 5px"},danger:e.key==="delete",hasPermission:"system/Role:"+e.key},{icon:n(()=>[o(i,{type:e.icon},null,8,["type"])]),_:2},1032,["disabled","popConfirm","tooltip","onClick","danger","hasPermission"]))),128))]),_:2},1024)]),_:1},8,["request","params"])]),_:1}),s(r)?(m(),I(X,{key:0,visible:s(r),"onUpdate:visible":a[0]||(a[0]=u=>N(r)?r.value=u:null),groupId:k.groupId,modalType:s(_),current:s(v),onRefresh:a[1]||(a[1]=u=>{var e;return(e=s(f))==null?void 0:e.reload()})},null,8,["visible","groupId","modalType","current"])):$("",!0)])}}});const ie=U(H,[["__scopeId","data-v-eba34028"]]);export{ie as default};