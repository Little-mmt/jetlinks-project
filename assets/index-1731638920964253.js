import{d as M,ad as N,ai as U,e as j,k as x,r as O,ab as f,U as T,V as S,X as i,_ as V,f as a,u as o,G as Y,E as I,Y as q,$ as A}from"./vue-1731638920964.js";import{u as K,gf as z,U as J,gn as F,gj as H,o as G,Z as y,au as X,d as Z,e as Q,a3 as W,g as P}from"./index-1731638920964.js";import"./index-1731638920964278.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import"./index-1731638920964282.js";import"./index-1731638920964283.js";const ee={class:"menu-container"},te=M({name:"Menu"}),ne=M({...te,setup(se){const c="system/Menu",h=N(),R=K(),{userInfos:D}=U(R),w=j(()=>{var e;return((e=D.value)==null?void 0:e.username)==="admin"}),k=[{title:"编码",dataIndex:"code",key:"code",ellipsis:!0,fixed:"left",search:{type:"string"},width:300},{title:"名称",dataIndex:"name",key:"name",ellipsis:!0,search:{type:"string"}},{title:"页面地址",dataIndex:"url",key:"url",ellipsis:!0,search:{type:"string"}},{title:"排序",dataIndex:"sortIndex",key:"sortIndex",ellipsis:!0,search:{type:"number"},width:80},{title:"说明",dataIndex:"describe",key:"describe",ellipsis:!0},{title:"创建时间",dataIndex:"createTime",key:"createTime",ellipsis:!0,search:{type:"date"},width:180,scopedSlots:!0},{title:"操作",dataIndex:"action",key:"action",fixed:"right",scopedSlots:!0,width:150}],v=x({terms:[]}),m=x([]),E=e=>{v.value=e,e.terms.length||(m.value=[])},g=x({}),l=O({total:0,getList:async e=>{var _;const s={terms:[{terms:[{column:"owner",termType:"eq",value:"iot"},{column:"owner",termType:"isnull",value:"1",type:"or"}]},{type:"or",terms:[{value:'%show":false%',termType:"nlike",column:"options"}]}]},d={...e,terms:e.terms&&e.length!==0?[...e.terms,s]:[s],sorts:[{name:"sortIndex",order:"asc"}],paging:!1},n=await z(d),p=n.result.filter(u=>u.code!=="account-center"),r=p[p.length-1];return l.total=r?r.sortIndex+1===9999?1e4:r.sortIndex+1:1,{code:n.message,result:{data:(_=n.result)==null?void 0:_.filter(u=>![J,F].includes(u.code)),pageIndex:n.pageIndex,pageSize:n.pageSize,total:n.total},status:n.status}},addChildren:e=>{var d;const s=((d=e==null?void 0:e.children)==null?void 0:d.length)||0;h.push(`/system/Menu/detail/:id?pid=${e.id}&basePath=${e.url||""}&sortIndex=${s+1}`)},toDetails:e=>{h.push(`/system/Menu/detail/${e.id||":id"}?pid=${e.pid||""}&basePath=${e.url||""}&sortIndex=${l.total}`)},clickDel:e=>{const s=H(e.id);return s.then(d=>{var n;d.status===200&&((n=g.value)==null||n.reload(),G("操作成功!"))}),s},refresh:()=>{g.value.reload()}});return(e,s)=>{const d=f("pro-search"),n=f("AIcon"),p=Z,r=Q,_=W,u=f("FullPage"),L=f("page-container");return T(),S(L,null,{default:i(()=>[V("div",ee,[a(d,{columns:k,target:"system-menu",onSearch:E}),a(u,null,{default:i(()=>[a(_,{ref_key:"tableRef",ref:g,columns:k,request:o(l).getList,model:"TABLE",params:o(v),noPagination:"",expandedRowKeys:o(m),"onUpdate:expandedRowKeys":s[2]||(s[2]=t=>Y(m)?m.value=t:null)},{headerTitle:i(()=>[a(y,{type:"primary",hasPermission:`${c}:add`,onClick:s[0]||(s[0]=t=>o(l).toDetails({}))},{default:i(()=>[a(n,{type:"PlusOutlined"}),I("新增 ")]),_:1},8,["hasPermission"]),o(w)?(T(),S(p,{key:0,style:{"margin-left":"12px"},onClick:s[1]||(s[1]=t=>o(h).push("/system/Menu/Setting"))},{default:i(()=>[I("菜单配置")]),_:1})):q("",!0)]),createTime:i(t=>[I(A(o(X)(t.createTime).format("YYYY-MM-DD HH:mm:ss")),1)]),action:i(t=>[a(r,{size:16},{default:i(()=>{var C,b,$;return[a(y,{type:"link",hasPermission:`${c}:update`,tooltip:{title:(C=t==null?void 0:t.options)!=null&&C.LowCode?"低码创建的菜单不支持编辑":"编辑"},disabled:(b=t==null?void 0:t.options)==null?void 0:b.LowCode,onClick:B=>o(l).toDetails(t)},{default:i(()=>[a(n,{type:"EditOutlined"})]),_:2},1032,["hasPermission","tooltip","disabled","onClick"]),a(y,{type:"link",hasPermission:`${c}:add`,tooltip:{title:t.level>=3?"仅支持3级菜单":"新增子菜单"},disabled:t.level>=3||(($=t==null?void 0:t.options)==null?void 0:$.LowCode),onClick:B=>o(l).addChildren(t)},{default:i(()=>[a(n,{type:"PlusCircleOutlined"})]),_:2},1032,["hasPermission","tooltip","disabled","onClick"]),a(y,{type:"link",hasPermission:`${c}:delete`,tooltip:{title:"删除"},popConfirm:{title:"是否删除该菜单",onConfirm:()=>o(l).clickDel(t)}},{default:i(()=>[a(n,{type:"DeleteOutlined"})]),_:2},1032,["hasPermission","popConfirm"])]}),_:2},1024)]),_:1},8,["request","params","expandedRowKeys"])]),_:1})])]),_:1})}}});const me=P(ne,[["__scopeId","data-v-b320f3de"]]);export{me as default};