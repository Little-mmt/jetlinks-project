import{gi as W,gj as ee,o as T,gk as se,gl as oe,gm as te,gf as ne,U as le,gn as ae,Z as ie,J as re,dg as ue,v as ce,I as de,a0 as pe,a1 as me,F as _e,aa as ve,g as fe}from"./index-1731638920964.js";import"./index-1731638920964281.js";import ye from"./ChooseIconDialog-1731638920964.js";import{d as O,k as u,o as ge,ab as he,U as d,V as C,X as a,_ as r,E as y,f as t,u as i,$ as ke,Y as b,Z as j,G as Ce,af as be,ag as Ie}from"./vue-1731638920964.js";import"./index-1731638920964279.js";const xe=_=>(be("data-v-feba2f6e"),_=_(),Ie(),_),we={style:{display:"flex"}},Me={class:"menuList"},Pe={class:"content"},Te={class:"treeContainer"},je={class:"tree-item"},$e={class:"title"},De={class:"menuControls"},Ee={key:0,class:"configuration"},Ve={class:"content"},Ue={class:"saveBtn"},qe={class:"row",style:{display:"flex"}},Be={key:0,class:"icon-upload has-icon"},Fe=xe(()=>r("p",null,"点击选择图标",-1)),Ne=O({name:"ThirdMenu"}),Oe=O({...Ne,props:{data:{type:Object,default:()=>({})}},emits:["cancel"],setup(_,{emit:J}){const $=_,v="system/Menu",g=u(),D=u([]),l=u({icon:"",name:"",code:"",url:"",sortIndex:0}),I=u(),p=u(!1),E=u(),h=u(!1),m=u(),x=u(!1),V=u(0),L={sorts:[{name:"sortIndex",order:"asc"}],paging:!1,terms:[{terms:[{column:"owner",termType:"eq",value:"iot"},{column:"owner",termType:"isnull",value:"1",type:"or"}]},{terms:[{terms:[{value:'%show":false%',termType:"nlike",column:"options",type:"and"},{value:'%owner"%',termType:"nlike",column:"options",type:"and"}]},{terms:[{value:`%owner":"${$.data.id}%`,termType:"like",column:"options"}],type:"or"}]}]},R=s=>{var e,n;(e=g.value)==null||e.clearValidate(),w(),h.value=!0,m.value="add",l.value.parentId=s==null?void 0:s.id,l.value.url=s==null?void 0:s.url,l.value.sortIndex=((n=s==null?void 0:s.children)==null?void 0:n.length)+1||0},S=()=>{w(),l.value.sortIndex=V.value,I.value="",h.value=!0,m.value="add"},z=s=>{var e;(e=g.value)==null||e.clearValidate(),w(),h.value=!0,m.value="edit",W(s.id).then(n=>{var c;l.value=n.result,I.value=(c=n.result)==null?void 0:c.code})},A=s=>{const e=ee(s.id);return e.then(n=>{n.status===200&&(T("操作成功"),M())}),e},w=()=>{l.value={icon:"",name:"",code:"",url:""}},Z=s=>{var e;l.value.icon=s,(e=E.value)==null||e.clearValidate()},G=()=>{g.value.validate().then(()=>{var n;const s=m.value==="add"?se:oe;x.value=!0;const e={...l.value,owner:"iot",options:{show:!0,owner:(n=$.data)==null?void 0:n.id}};s(e).then(c=>{c.status===200?(T("操作成功"),M()):T("操作失败")}).finally(()=>x.value=!1)})},X=async(s,e)=>e?e.length>64?Promise.reject("最多可输入64个字符"):(m.value=e===I.value)?Promise.resolve(""):(await te({code:e,owner:"iot"})).result.passed?Promise.resolve():Promise.reject("该编码重复"):Promise.reject(""),U=()=>{J("cancel")},M=()=>{ne(L).then(s=>{var n;D.value=(n=s.result)==null?void 0:n.filter(c=>![le,ae].includes(c.code));const e=s.result[s.result.length-1];V.value=e?e.sortIndex+1:1})};return ge(()=>{M()}),(s,e)=>{const n=ie,c=re,f=he("AIcon"),Y=ue,k=ce,P=de,q=pe,H=me,K=_e,Q=ve;return d(),C(Q,{class:"edit-dialog-container",title:"集成菜单",visible:"",width:"800px",maskClosable:!1,onCancel:U,onOk:U},{default:a(()=>[r("div",we,[r("div",Me,[y(" 菜单列表 "),r("div",Pe,[t(n,{type:"link",hasPermission:`${v}:add`,onClick:S},{default:a(()=>[y(" + 新增菜单 ")]),_:1},8,["hasPermission"]),r("div",Te,[t(Y,{fieldNames:{title:"name",key:"id",children:"children"},treeData:i(D)},{title:a(o=>{var B,F,N;return[r("div",je,[r("div",$e,[t(c,null,{default:a(()=>[y(ke(o.name),1)]),_:2},1024)]),r("div",De,[(B=o.options)!=null&&B.owner?(d(),C(n,{key:0,type:"link",hasPermission:`${v}:update`,tooltip:"编辑",onClick:()=>z(o)},{default:a(()=>[t(f,{type:"EditOutlined"})]),_:2},1032,["hasPermission","onClick"])):b("",!0),t(n,{type:"link",hasPermission:`${v}:add`,tooltip:{title:o.level>=3?"仅支持3级菜单":"新增子菜单"},disabled:o.level>=3||((F=o.options)==null?void 0:F.LowCode),onClick:()=>R(o)},{default:a(()=>[t(f,{type:"PlusCircleOutlined"})]),_:2},1032,["hasPermission","tooltip","disabled","onClick"]),(N=o.options)!=null&&N.owner?(d(),C(n,{key:1,type:"link",hasPermission:`${v}:delete`,tooltip:"删除",popConfirm:{title:"是否删除该菜单",onConfirm:()=>A(o)}},{default:a(()=>[t(f,{type:"DeleteOutlined"})]),_:2},1032,["hasPermission","popConfirm"])):b("",!0)])])]}),_:1},8,["treeData"])])])]),i(h)?(d(),j("div",Ee,[y(" 菜单配置 "),r("div",Ve,[r("div",Ue,[t(n,{type:"primary",hasPermission:`${v}:${i(m)==="add"?"add":"update"}`,loading:i(x),onClick:G},{default:a(()=>[y(" 保存 ")]),_:1},8,["hasPermission","loading"])]),t(K,{ref_key:"basicFormRef",ref:g,model:i(l),class:"basic-form",layout:"vertical"},{default:a(()=>[r("div",qe,[t(k,{ref_key:"uploadIcon",ref:E,label:"菜单图标",name:"icon",rules:[{required:!0,message:"请上传图标",trigger:"change"}],style:{flex:"0 0 186px"}},{default:a(()=>[i(l).icon?(d(),j("div",Be,[t(f,{type:i(l).icon,style:{"font-size":"90px"}},null,8,["type"]),r("span",{class:"mark",onClick:e[0]||(e[0]=o=>p.value=!0)},"点击修改")])):(d(),j("div",{key:1,onClick:e[1]||(e[1]=o=>p.value=!0),class:"icon-upload no-icon"},[r("span",null,[t(f,{type:"PlusOutlined",style:{"font-size":"30px"}}),Fe])]))]),_:1},512),t(H,null,{default:a(()=>[t(q,{span:24},{default:a(()=>[t(k,{label:"名称",name:"name",rules:[{required:!0,message:"请输入名称"},{max:64,message:"最多可输入64个字符"}]},{default:a(()=>[t(P,{value:i(l).name,"onUpdate:value":e[2]||(e[2]=o=>i(l).name=o),placeholder:"请输入名称"},null,8,["value"])]),_:1})]),_:1}),t(q,{span:24},{default:a(()=>[t(k,{label:"编码",name:"code",validateFirst:!0,rules:[{required:!0,message:"请输入编码"},{max:64,message:"最多可输入64个字符"},{validator:X,trigger:"blur"}]},{default:a(()=>[t(P,{value:i(l).code,"onUpdate:value":e[3]||(e[3]=o=>i(l).code=o),placeholder:"请输入编码"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})]),t(k,{label:"页面地址",name:"url",validateFirst:!0,rules:[{required:!0,message:"请输入页面地址"},{max:128,message:"最多可输入128个字符"},{pattern:/^\//,message:"请正确填写地址，以/开头"}]},{default:a(()=>[t(P,{value:i(l).url,"onUpdate:value":e[4]||(e[4]=o=>i(l).url=o),placeholder:"请输入页面地址"},null,8,["value"])]),_:1})]),_:1},8,["model"])])])):b("",!0)]),i(p)?(d(),C(ye,{key:0,visible:i(p),"onUpdate:visible":e[5]||(e[5]=o=>Ce(p)?p.value=o:null),icon:i(l).icon,onConfirm:e[6]||(e[6]=o=>Z(o))},null,8,["visible","icon"])):b("",!0)]),_:1})}}});const Ae=fe(Oe,[["__scopeId","data-v-feba2f6e"]]);export{Ae as default};