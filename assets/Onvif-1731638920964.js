import{d as O,ac as k,k as f,o as I,U as g,Z as B,f as e,X as a,_ as s,u as o,V as P,E as T,Y as V,af as C,ag as N}from"./vue-1731638920964.js";import{o as F,aH as R,I as q,v as M,a9 as U,Z as E,F as J,a0 as Z,a1 as A,g as H}from"./index-1731638920964.js";import{s as X,u as Y}from"./accessConfig-1731638920964.js";const $=c=>(C("data-v-d827c271"),c=c(),N(),c),z={class:"card-last"},D=$(()=>s("div",{class:"doc"},[s("h1",null,"Onvif视频接入"),s("p",null," 适用于使用RSTP或RTMP固定地址接入的视频设备 "),s("h1",null,"消息协议"),s("p",null," 内置Onvif协议 ")],-1)),G=O({__name:"Onvif",props:{provider:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}}},setup(c){const u=c,d=k(),w=d.query.view,i=d.params.id,p=f(!1);f(u.provider.channel);const n=f({name:"",description:""}),h=async l=>{p.value=!0;const t={...l,provider:"onvif",transport:"ONVIF",channel:"onvif"},r=i===":id"?await X(t):await Y({...t,id:i});r.status===200&&(F("操作成功","success"),d.query.save?window.onTabSaveSuccess&&(window.onTabSaveSuccess(r.result),setTimeout(()=>window.close(),300)):history.back()),p.value=!1};return I(()=>{var l;i!==":id"&&(n.value={name:u.data.name,description:((l=u.data)==null?void 0:l.description)||""})}),(l,t)=>{const r=R,y=q,_=M,b=U,x=E,S=J,v=Z,j=A;return g(),B("div",z,[e(j,{gutter:[24,24]},{default:a(()=>[e(v,{span:12},{default:a(()=>[e(r,{data:"基本信息"}),s("div",null,[e(S,{model:o(n),name:"basic",autocomplete:"off",layout:"vertical",onFinish:h},{default:a(()=>[e(_,{label:"名称",name:"name",rules:[{required:!0,message:"请输入名称",trigger:"blur"},{max:64,message:"最多可输入64个字符",trigger:"blur"}]},{default:a(()=>[e(y,{placeholder:"请输入名称",value:o(n).name,"onUpdate:value":t[0]||(t[0]=m=>o(n).name=m)},null,8,["value"])]),_:1}),e(_,{label:"说明",name:"description"},{default:a(()=>[e(b,{placeholder:"请输入说明",rows:4,value:o(n).description,"onUpdate:value":t[1]||(t[1]=m=>o(n).description=m),"show-count":"",maxlength:200},null,8,["value"])]),_:1}),e(_,null,{default:a(()=>[o(w)==="false"?(g(),P(x,{key:0,type:"primary","html-type":"submit",hasPermission:`link/AccessConfig:${o(i)===":id"?"add":"update"}`,loading:o(p)},{default:a(()=>[T(" 保存 ")]),_:1},8,["hasPermission","loading"])):V("",!0)]),_:1})]),_:1},8,["model"])])]),_:1}),e(v,{span:12},{default:a(()=>[D]),_:1})]),_:1})])}}});const W=H(G,[["__scopeId","data-v-d827c271"]]);export{W as default};