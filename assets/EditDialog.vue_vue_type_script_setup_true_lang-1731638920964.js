import{d as D,e as O,k as h,r as P,w as A,o as F,U as p,V as m,X as l,f as a,u as s,Y as f,v as H,A as J}from"./vue-1731638920964.js";import{o as M,I as T,v as B,a0 as E,a6 as N,a1 as S,w as X,a9 as Y,F as $,aa as z}from"./index-1731638920964.js";import{b as G,c as K}from"./dataSource-1731638920964.js";const V=D({__name:"EditDialog",props:{data:{}},emits:["confirm","cancel"],setup(b,{emit:v}){const _=b,C=O(()=>_.data.id?"编辑数据源":"新增数据源"),g=h(!1),y=(u,e)=>{if(!e)return Promise.resolve();const r=e.split(":");return(r==null?void 0:r[0])==="jdbc"||(r==null?void 0:r[0])==="r2dbc"?Promise.resolve():Promise.reject("请输入正确的URL")},U=(u,e)=>new Promise((r,n)=>{if(!e)r("");else{const d=e.split("://");d[0]==="http"||d[0]==="https"?r(""):n("请输入正确的管理地址")}}),w=(u,e)=>new Promise((r,n)=>{e?/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e)?r(""):n("请输入正确的链接地址"):r("")}),q=()=>{G().then(u=>{const e=u.result,r=[];e.forEach(n=>{n.name!=="redis"&&r.push({label:n.name,value:n.id})}),t.typeOptions=r})},c=h(),t=P({data:{..._.data},typeOptions:[]});A(()=>_.data,u=>{t.data={...u,shareConfig:{...u==null?void 0:u.shareConfig}}},{immediate:!0,deep:!0}),F(()=>{q()});const j=()=>{var u;g.value=!0,(u=c.value)==null||u.validate().then(async e=>{var n;(await K({..._.data,...e})).status===200&&(M("操作成功"),v("confirm"),(n=c.value)==null||n.resetFields())}).finally(()=>{g.value=!1})};return(u,e)=>{const r=T,n=B,d=E,k=N,i=S,x=X,I=Y,L=$,R=z;return p(),m(R,{class:"edit-dialog-container",width:"1050px",visible:"",title:s(C),confirmLoading:s(g),onOk:j,onCancel:e[10]||(e[10]=o=>v("cancel"))},{default:l(()=>[a(L,{ref_key:"formRef",ref:c,model:s(t).data,layout:"vertical"},{default:l(()=>[a(i,{gutter:24},{default:l(()=>[a(d,{span:12},{default:l(()=>[a(n,{name:"name",label:"名称",rules:[{required:!0,message:"请输入名称"},{max:64,message:"最多可输入64个字符"}]},{default:l(()=>[a(r,{value:s(t).data.name,"onUpdate:value":e[0]||(e[0]=o=>s(t).data.name=o),placeholder:"请输入名称"},null,8,["value"])]),_:1})]),_:1}),a(d,{span:12},{default:l(()=>[a(n,{name:"typeId",label:"类型",rules:[{required:!0,message:"请选择类型"}]},{default:l(()=>[a(k,{value:s(t).data.typeId,"onUpdate:value":e[1]||(e[1]=o=>s(t).data.typeId=o),options:s(t).typeOptions,placeholder:"请选择类型",disabled:!!s(t).data.id},null,8,["value","options","disabled"])]),_:1})]),_:1})]),_:1}),s(t).data.typeId==="rdb"?(p(),m(i,{key:0,gutter:24},{default:l(()=>[a(d,{span:24},{default:l(()=>[a(n,{name:["shareConfig","url"],label:"URL",rules:[{required:!0,message:"请输入URL",trigger:"change"},{validator:y,trigger:"blur"}]},{default:l(()=>[a(r,{value:s(t).data.shareConfig.url,"onUpdate:value":e[2]||(e[2]=o=>s(t).data.shareConfig.url=o),placeholder:"请输入r2bdc或者jdbc连接地址，示例：r2dbc:mysql://127.0.0.1:3306/test"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})):f("",!0),s(t).data.typeId==="rabbitmq"?(p(),m(i,{key:1,gutter:24},{default:l(()=>[a(d,{span:24},{default:l(()=>[a(n,{name:["shareConfig","adminUrl"],label:"管理地址",rules:[{required:!0,message:"请输入管理地址"},{validator:U}]},{default:l(()=>[a(r,{value:s(t).data.shareConfig.adminUrl,"onUpdate:value":e[3]||(e[3]=o=>s(t).data.shareConfig.adminUrl=o),placeholder:"请输入管理地址，示例：http://localhost:15672"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})):f("",!0),s(t).data.typeId==="rabbitmq"?(p(),m(i,{key:2,gutter:24},{default:l(()=>[a(d,{span:24},{default:l(()=>[a(n,{name:["shareConfig","addresses"],label:"链接地址",rules:[{required:!0,message:"请输入链接地址"},{validator:w}]},{default:l(()=>[a(r,{value:s(t).data.shareConfig.addresses,"onUpdate:value":e[4]||(e[4]=o=>s(t).data.shareConfig.addresses=o),placeholder:"请输入链接地址，示例：localhost:5672"},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})):f("",!0),H(a(i,{gutter:24},{default:l(()=>[a(d,{span:12},{default:l(()=>[a(n,{name:["shareConfig","username"],label:"用户名",rules:[{required:!0,message:"请输入用户名"},{max:64,message:"最多可输入64个字符"}]},{default:l(()=>[a(r,{value:s(t).data.shareConfig.username,"onUpdate:value":e[5]||(e[5]=o=>s(t).data.shareConfig.username=o),placeholder:"请输入用户名"},null,8,["value"])]),_:1})]),_:1}),a(d,{span:12},{default:l(()=>[a(n,{name:["shareConfig","password"],label:"密码",rules:[{required:!0,message:"请输入密码"},{max:64,message:"最多可输入64个字符"}]},{default:l(()=>[a(x,{value:s(t).data.shareConfig.password,"onUpdate:value":e[6]||(e[6]=o=>s(t).data.shareConfig.password=o),placeholder:"请输入密码"},null,8,["value"])]),_:1})]),_:1})]),_:1},512),[[J,s(t).data.typeId]]),s(t).data.typeId==="rabbitmq"?(p(),m(i,{key:3,gutter:24},{default:l(()=>[a(d,{span:24},{default:l(()=>[a(n,{name:["shareConfig","virtualHost"],label:"虚拟域",rules:[{required:!0,message:"请输入虚拟域"},{max:64,message:"最多可输入64个字符"}]},{default:l(()=>[a(r,{value:s(t).data.shareConfig.virtualHost,"onUpdate:value":e[7]||(e[7]=o=>s(t).data.shareConfig.virtualHost=o),placeholder:"请输入虚拟域"},null,8,["value"])]),_:1})]),_:1})]),_:1})):f("",!0),s(t).data.typeId==="rdb"?(p(),m(i,{key:4,gutter:24},{default:l(()=>[a(d,{span:24},{default:l(()=>[a(n,{name:["shareConfig","schema"],label:"schema",rules:[{required:!0,message:"请输入schema"},{max:64,message:"最多可输入64个字符"}]},{default:l(()=>[a(r,{value:s(t).data.shareConfig.schema,"onUpdate:value":e[8]||(e[8]=o=>s(t).data.shareConfig.schema=o),placeholder:"请输入schema"},null,8,["value"])]),_:1})]),_:1})]),_:1})):f("",!0),a(i,{gutter:24},{default:l(()=>[a(d,{span:24},{default:l(()=>[a(n,{name:"description",label:"说明"},{default:l(()=>[a(I,{value:s(t).data.description,"onUpdate:value":e[9]||(e[9]=o=>s(t).data.description=o),placeholder:"请输入说明",rows:3,showCount:"",maxlength:200},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","confirmLoading"])}}});export{V as _};