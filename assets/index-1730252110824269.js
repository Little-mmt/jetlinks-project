import{d as k,ac as B,k as m,ab as h,U as x,Z as T,f as o,X as l,E as f,$ as U,u as c,V as $,G as A,Y as D}from"./vue-1730252110824.js";import{Z as g,au as N,o as S,d as V,e as Y,ax as j,a3 as L,g as q}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{_ as E}from"./AddUserDialog.vue_vue_type_script_setup_true_lang-1730252110824.js";import{a as J,b as M}from"./role-1730252110824.js";const O={class:"role-user-container"},z=k({name:"RoleUser"}),H=k({...z,setup(K){const _=B().params.id,y=[{title:"姓名",dataIndex:"name",key:"name",search:{type:"string"}},{title:"用户名",dataIndex:"username",key:"username",search:{type:"string"}},{title:"创建时间",dataIndex:"createTime",key:"createTime",search:{type:"date"},scopedSlots:!0},{title:"状态",dataIndex:"status",key:"status",search:{type:"select",options:[{label:"正常",value:1},{label:"禁用",value:0}]},scopedSlots:!0},{title:"操作",dataIndex:"action",key:"action",width:"200px",scopedSlots:!0}],v=m({}),b=m({}),n=m([]),u={getList:t=>{const e={...t,terms:[{terms:[{column:"id$in-dimension$role",value:_}]}]};return t.terms[0]&&e.terms.unshift({terms:t.terms[0].terms}),J(e)},unbind:t=>{const e=t||n.value;if(!e.length){S("请勾选数据","warning");return}const s=M(_,e);return s.then(r=>{r.status===200&&(S("操作成功"),u.refresh())}),s},refresh:()=>{b.value.reload(),n.value=[]}},R=(t,e)=>{const s=new Set(n.value);e?s.add(t.id):s.delete(t.id),n.value=[...s.values()]},C=(t,e,s)=>{if(t)s.map(r=>{n.value.includes(r.id)||n.value.push(r.id)});else{const r=s.map(i=>i.id),d=[];n.value.map(i=>{r.includes(i)||d.push(i)}),n.value=d}},p=m(!1);return(t,e)=>{const s=h("pro-search"),r=h("AIcon"),d=V,i=Y,I=j,w=L;return x(),T("div",O,[o(s,{columns:y,target:"system-role-user",onSearch:e[0]||(e[0]=a=>v.value={...a})}),o(w,{ref_key:"tableRef",ref:b,columns:y,request:u.getList,model:"TABLE",params:c(v),rowSelection:{selectedRowKeys:c(n),onSelect:R,onSelectAll:C,onSelectNone:()=>n.value=[]},size:"small"},{headerTitle:l(()=>[o(i,null,{default:l(()=>[o(d,{type:"primary",onClick:e[1]||(e[1]=a=>p.value=!0)},{default:l(()=>[o(r,{type:"PlusOutlined"}),f("新增 ")]),_:1}),o(g,{popConfirm:{title:"确认批量解除绑定？",placement:"topRight",onConfirm:()=>u.unbind()}},{default:l(()=>[o(r,{type:"DisconnectOutlined"}),f("批量解绑 ")]),_:1},8,["popConfirm"])]),_:1})]),status:l(a=>[o(I,{status:a.status,text:a.status?"正常":"禁用",statusNames:{1:"success",0:"error"}},null,8,["status","text"])]),createTime:l(a=>[f(U(c(N)(a.createTime).format("YYYY-MM-DD HH:mm:ss")),1)]),action:l(a=>[o(i,{size:16},{default:l(()=>[o(g,{type:"link",tooltip:{title:"解绑"},"pop-confirm":{title:"确认解绑",onConfirm:()=>u.unbind([a.id])}},{default:l(()=>[o(r,{type:"DisconnectOutlined"})]),_:2},1032,["pop-confirm"])]),_:2},1024)]),_:1},8,["request","params","rowSelection"]),c(p)?(x(),$(E,{key:0,visible:c(p),"onUpdate:visible":e[2]||(e[2]=a=>A(p)?p.value=a:null),"role-id":c(_),onRefresh:u.refresh},null,8,["visible","role-id","onRefresh"])):D("",!0)])}}});const ae=q(H,[["__scopeId","data-v-5816bc82"]]);export{ae as default};