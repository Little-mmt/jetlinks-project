import{d as L,ac as z,ad as E,k as g,r as G,ab as O,U as u,Z as x,_ as d,f as t,X as o,u as s,V as f,E as S,Y as y,G as Q,af as Z,ag as H}from"./vue-1730252110824.js";import{gi as K,i as M,gf as X,gA as Y,gm as W,o as U,Z as ee,gl as ae,gk as se,v as te,I as oe,a0 as ne,a7 as le,a1 as re,a9 as ie,F as ue,$ as de,dD as pe,aK as ce,a6 as me,fz as _e,dB as fe,g as ve}from"./index-1730252110824.js";import"./index-1730252110824279.js";import ge from"./ChooseIconDialog-1730252110824.js";import ye from"./PermissChoose-1730252110824.js";import"./index-1730252110824280.js";import"./permission-1730252110824.js";const h=b=>(Z("data-v-daa0a409"),b=b(),H(),b),he={class:"basic-info-container"},be={class:"card"},xe=h(()=>d("h3",null,"基本信息",-1)),ke={class:"row",style:{display:"flex"}},Ie={key:0,class:"icon-upload has-icon"},Ce=h(()=>d("p",null,"点击选择图标",-1)),we={key:0,class:"card"},Se=h(()=>d("h3",null,"权限配置",-1)),je=h(()=>d("span",{style:{"margin-right":"3px"}},"数据权限控制",-1)),Pe=h(()=>d("span",{style:{"margin-right":"3px"}},"间接控制",-1)),Te="system/Menu",Me=L({__name:"BasicInfo",setup(b){const m=z(),q=E(),k=g(!1),c={id:m.params.id===":id"?void 0:m.params.id,...m.query,url:m.query.basePath,parentId:m.query.pid},I=g(),C=g(),j=g(),a=G({data:{name:"",code:"",sortIndex:"",icon:"",describe:"",permissions:[],accessSupport:"unsupported",assetType:void 0,indirectMenus:[],...c},treeData:[],assetsType:[],saveLoading:!1,sourceCode:"",init:()=>{c.id?K(c.id).then(l=>{var e,i,r;a.data={...l.result,permissions:(e=l.result)!=null&&e.permissions?l.result.permissions:[],accessSupport:((r=(i=l.result)==null?void 0:i.accessSupport)==null?void 0:r.value)||"unsupported"},a.sourceCode=l.result.code,k.value=!0}):k.value=!0,M&&(X({paging:!1,terms:[{terms:[{terms:[{value:'%show":false%',termType:"nlike",column:"options"}]}]}]}).then(l=>{a.treeData=l.result}),Y().then(l=>{a.assetsType=l.result.map(e=>({label:e.name,value:e.id}))}))},checkCode:async(l,e)=>e?e.length>64?Promise.reject("最多可输入64个字符"):c.id&&e===a.sourceCode?Promise.resolve(""):(await W({code:e,owner:"iot"})).result.passed?Promise.resolve():Promise.reject("该编码重复"):Promise.reject(""),clickSave:()=>{var l,e;!I||!C||Promise.all([(l=I.value)==null?void 0:l.validate(),(e=C.value)==null?void 0:e.validate()]).then(()=>{const i=c.id?ae:se;a.saveLoading=!0;const r=a.data.accessSupport,v={...a.data,owner:"iot",options:{show:!0},accessSupport:{value:r,label:r==="unsupported"?"不支持":r==="support"?"支持":"间接控制"}};i(v).then(p=>{p.status===200?(U("操作成功！"),c.id||(q.push(`/system/Menu/detail/${p.result.id}`),c.id=p.result.id,a.init())):U("操作失败！","error")}).finally(()=>a.saveLoading=!1)}).catch(i=>{})}});a.init();const B=async(l,e)=>/[\u4e00-\u9fa5]/.test(e)?Promise.reject("编码不能包含中文"):Promise.resolve(""),F=l=>{var e;a.data.icon=l,(e=j.value)==null||e.clearValidate()},_=g(!1);return(l,e)=>{const i=O("AIcon"),r=te,v=oe,p=ne,R=le,V=re,$=ie,P=ue,T=de,w=pe,N=ce,D=me,A=_e,J=fe;return u(),x("div",he,[d("div",be,[xe,t(P,{ref_key:"basicFormRef",ref:I,model:s(a).data,class:"basic-form"},{default:o(()=>[d("div",ke,[t(r,{ref_key:"uploadIcon",ref:j,label:"菜单图标",name:"icon",rules:[{required:!0,message:"请上传图标",trigger:"change"}],style:{flex:"0 0 186px"}},{default:o(()=>[s(a).data.icon?(u(),x("div",Ie,[t(i,{type:s(a).data.icon,style:{"font-size":"90px"}},null,8,["type"]),d("span",{class:"mark",onClick:e[0]||(e[0]=n=>_.value=!0)},"点击修改")])):(u(),x("div",{key:1,onClick:e[1]||(e[1]=n=>_.value=!0),class:"icon-upload no-icon"},[d("span",null,[t(i,{type:"PlusOutlined",style:{"font-size":"30px"}}),Ce])]))]),_:1},512),t(V,{gutter:24,style:{flex:"1 1 auto"}},{default:o(()=>[t(p,{span:12},{default:o(()=>[t(r,{label:"名称",name:"name",rules:[{required:!0,message:"请输入名称",trigger:"change"},{max:64,message:"最多可输入64个字符",trigger:"change"}]},{default:o(()=>[t(v,{value:s(a).data.name,"onUpdate:value":e[2]||(e[2]=n=>s(a).data.name=n),placeholder:"请输入名称"},null,8,["value"])]),_:1})]),_:1}),t(p,{span:12},{default:o(()=>[t(r,{label:"编码",name:"code",validateFirst:!0,rules:[{required:!0,message:"请输入编码",trigger:"change"},{max:64,message:"最多可输入64个字符",trigger:"change"},{validator:B,trigger:["change","blur"]},{validator:s(a).checkCode,trigger:"blur"}]},{default:o(()=>[t(v,{value:s(a).data.code,"onUpdate:value":e[3]||(e[3]=n=>s(a).data.code=n),placeholder:"请输入编码"},null,8,["value"])]),_:1},8,["rules"])]),_:1}),t(p,{span:12},{default:o(()=>[t(r,{rules:[{required:!0,message:"请输入页面地址"},{max:128,message:"最多可输入128个字符"},{pattern:/^\//,message:"请正确填写地址，以/开头"}],validateFirst:!0,label:"页面地址",name:"url"},{default:o(()=>[t(v,{value:s(a).data.url,"onUpdate:value":e[4]||(e[4]=n=>s(a).data.url=n),placeholder:"请输入页面地址"},null,8,["value"])]),_:1})]),_:1}),t(p,{span:12},{default:o(()=>[t(r,{label:"排序",name:"sortIndex",rules:[{pattern:/^[0-9]*[1-9][0-9]*$/,message:"请输入大于0的整数"}]},{default:o(()=>[t(R,{value:s(a).data.sortIndex,"onUpdate:value":e[5]||(e[5]=n=>s(a).data.sortIndex=n),placeholder:"请输入排序",style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1})]),t(r,{label:"说明",name:"describe"},{default:o(()=>[t($,{value:s(a).data.describe,"onUpdate:value":e[6]||(e[6]=n=>s(a).data.describe=n),rows:4,"show-count":"",maxlength:200,placeholder:"请输入说明"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),s(a).data.appId?y("",!0):(u(),x("div",we,[Se,t(P,{ref_key:"permissFormRef",ref:C,model:s(a).data,class:"basic-form permiss-form"},{default:o(()=>[s(M)?(u(),f(r,{key:0,name:"accessSupport",required:""},{label:o(()=>[je,t(T,{title:"此菜单页面数据所对应的资产类型"},{default:o(()=>[t(i,{type:"QuestionCircleOutlined",class:"img-style",style:{color:"#a6a6a6"}})]),_:1})]),default:o(()=>[t(N,{value:s(a).data.accessSupport,"onUpdate:value":e[7]||(e[7]=n=>s(a).data.accessSupport=n),name:"radioGroup"},{default:o(()=>[t(w,{value:"unsupported"},{default:o(()=>[S("不支持")]),_:1}),t(w,{value:"support"},{default:o(()=>[S("支持")]),_:1}),t(w,{value:"indirect"},{default:o(()=>[Pe,t(T,{title:"此菜单内的数据基于其他菜单的数据权限控制"},{default:o(()=>[t(i,{type:"QuestionCircleFilled",class:"img-style"})]),_:1})]),_:1})]),_:1},8,["value"]),s(a).data.accessSupport==="support"?(u(),f(r,{key:0,name:"assetType",rules:[{required:!0,message:"请选择资产类型"}],style:{"margin-top":"24px","margin-bottom":"0"}},{default:o(()=>[t(D,{value:s(a).data.assetType,"onUpdate:value":e[8]||(e[8]=n=>s(a).data.assetType=n),style:{width:"500px"},placeholder:"请选择资产类型","show-search":"",options:s(a).assetsType},null,8,["value","options"])]),_:1})):y("",!0),s(a).data.accessSupport==="indirect"?(u(),f(r,{key:1,name:"indirectMenus",rules:[{required:!0,message:"请选择关联菜单"}],style:{"margin-top":"24px","margin-bottom":"0"}},{default:o(()=>[t(A,{value:s(a).data.indirectMenus,"onUpdate:value":e[9]||(e[9]=n=>s(a).data.indirectMenus=n),style:{width:"400px"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},placeholder:"请选择关联菜单",multiple:"","show-search":"","tree-data":s(a).treeData,"field-names":{children:"children",label:"name",value:"id"}},null,8,["value","tree-data"])]),_:1})):y("",!0)]),_:1})):y("",!0),t(r,{label:"权限"},{default:o(()=>[s(k)?(u(),f(ye,{"first-width":3,"max-height":"350px",value:s(a).data.permissions,"onUpdate:value":e[10]||(e[10]=n=>s(a).data.permissions=n),key:s(a).data.id||""},null,8,["value"])):(u(),f(J,{key:1}))]),_:1})]),_:1},8,["model"])])),t(ee,{type:"primary",hasPermission:`${Te}:${s(m).params.id===":id"?"add":"update"}`,onClick:s(a).clickSave,loading:s(a).saveLoading,class:"saveBtn"},{default:o(()=>[S(" 保存 ")]),_:1},8,["hasPermission","onClick","loading"]),s(_)?(u(),f(ge,{key:1,visible:s(_),"onUpdate:visible":e[11]||(e[11]=n=>Q(_)?_.value=n:null),icon:s(a).data.icon,onConfirm:e[12]||(e[12]=n=>F(n))},null,8,["visible","icon"])):y("",!0)])}}});const Ne=ve(Me,[["__scopeId","data-v-daa0a409"]]);export{Ne as default};