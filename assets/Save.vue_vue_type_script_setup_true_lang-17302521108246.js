import{d as B,ac as L,e as h,k as j,w as D,ab as N,U as _,V as c,X as s,f as l,u as t,E as O,Y as b,G as E}from"./vue-1730252110824.js";import{o as R,$ as M,I as Q,v as G,a0 as X,w as Y,a6 as $,a9 as H,a1 as K,F as W,aa as Z}from"./index-1730252110824.js";import{c as U}from"./channel-17302521108242.js";const te=B({__name:"Save",props:{visible:{type:Boolean,default:!1},channelData:{type:Object,default:()=>({})}},emits:["update:visible","submit"],setup(F,{emit:C}){const k=F,f=L(),v=h({get:()=>k.visible,set:r=>C("update:visible",r)}),T=h(()=>["gb28181-2016","onvif"].includes(f.query.type)),g=h(()=>["fixed-media"].includes(f.query.type)),w=j(),a=j({id:void 0,address:"",channelId:"",description:"",deviceId:f.query.id,name:"",manufacturer:"",ptzType:"",media_password:"",media_url:"",media_username:""}),p=j(!1);D(()=>k.channelData,r=>{const{id:e,address:u,channelId:o,description:d,deviceId:i,name:m,manufacturer:x,ptzType:y,others:I,...q}=r;a.value={id:e,address:u,channelId:o,description:d,deviceId:i,name:m,manufacturer:x,ptzType:(y==null?void 0:y.value)||0,...I}},{deep:!0});const z=async(r,e)=>{var o;if(!e||(o=a.value)!=null&&o.id)return;const{result:u}=await U.validateField({deviceId:f.query.id,channelId:e});return u.passed?Promise.resolve():Promise.reject("该ID已存在")},J=async(r,e)=>{console.log("value: ",e);const u=/(http|https|rtsp|rtmp):\/\/([\w.]+\/?)\S*/;return new Promise((o,d)=>{u.test(e)||!e?o(""):d("请输入正确的视频地址")})},P=()=>{w.value.validate().then(async()=>{p.value=!0;const{media_url:r,media_password:e,media_username:u,...o}=a.value;o.others={media_url:r,media_password:e,media_username:u},(a.value.id?await U.update(a.value.id,o).finally(()=>{p.value=!1}):await U.save(o).finally(()=>{p.value=!1})).success?(R("操作成功"),v.value=!1,p.value=!1,C("submit")):(p.value=!1,R("操作失败","error"))}).catch(r=>{p.value=!1,console.log("err: ",r)})},S=()=>{v.value=!1};return D(()=>v.value,r=>{var e;r||((e=w.value)==null||e.resetFields(),Object.keys(a.value).forEach(u=>{u==="id"?a.value.id=void 0:u==="deviceId"?a.value.deviceId=f.query.id:a.value[u]=""}))}),(r,e)=>{const u=N("AIcon"),o=M,d=Q,i=G,m=X,x=Y,y=$,I=H,q=K,V=W,A=Z;return _(),c(A,{visible:t(v),"onUpdate:visible":e[9]||(e[9]=n=>E(v)?v.value=n:null),title:t(a).id?"编辑":"新增",width:"650px",cancelText:"取消",okText:"确定",onOk:P,onCancel:S,confirmLoading:t(p)},{default:s(()=>[l(V,{ref_key:"formRef",ref:w,model:t(a),layout:"vertical"},{default:s(()=>[l(q,{gutter:10},{default:s(()=>[l(m,{span:12},{default:s(()=>[l(i,{name:"channelId",rules:[{max:64,message:"最多可输入64个字符"},{validator:z}]},{label:s(()=>[O(" 通道ID "),l(o,{title:"若不填写，系统将自动生成唯一ID"},{default:s(()=>[l(u,{type:"QuestionCircleOutlined",style:{"margin-left":"2px"}})]),_:1})]),default:s(()=>[l(d,{value:t(a).channelId,"onUpdate:value":e[0]||(e[0]=n=>t(a).channelId=n),disabled:!!t(a).id,placeholder:"请输入通道ID"},null,8,["value","disabled"])]),_:1},8,["rules"])]),_:1}),l(m,{span:12},{default:s(()=>[l(i,{name:"name",label:"通道名称",rules:[{required:!0,message:"请输入通道名称"},{max:64,message:"最多可输入64个字符"}]},{default:s(()=>[l(d,{value:t(a).name,"onUpdate:value":e[1]||(e[1]=n=>t(a).name=n),placeholder:"请输入通道名称"},null,8,["value"])]),_:1})]),_:1}),t(T)?(_(),c(m,{key:0,span:24},{default:s(()=>[l(i,{label:"厂商",name:"manufacturer",rules:[{required:!1,message:""},{max:64,message:"最多可输入64个字符"}]},{default:s(()=>[l(d,{value:t(a).manufacturer,"onUpdate:value":e[2]||(e[2]=n=>t(a).manufacturer=n),placeholder:"请输入厂商名称"},null,8,["value"])]),_:1})]),_:1})):b("",!0),t(g)?(_(),c(m,{key:1,span:24},{default:s(()=>[l(i,{name:"media_url",rules:[{required:!0,message:"请输入视频地址"},{max:128,message:"最多可输入128个字符"},{validator:J}]},{label:s(()=>[O(" 视频地址 "),l(o,{title:"不同厂家的RTSP固定地址规则不同，请按对应厂家的规则填写"},{default:s(()=>[l(u,{type:"QuestionCircleOutlined",style:{"margin-left":"2px"}})]),_:1})]),default:s(()=>[l(d,{value:t(a).media_url,"onUpdate:value":e[3]||(e[3]=n=>t(a).media_url=n),placeholder:"请输入视频地址"},null,8,["value"])]),_:1},8,["rules"])]),_:1})):b("",!0),t(g)?(_(),c(m,{key:2,span:12},{default:s(()=>[l(i,{name:"media_username",label:"用户名",rules:{max:64,message:"最多可输入64个字符"}},{default:s(()=>[l(d,{value:t(a).media_username,"onUpdate:value":e[4]||(e[4]=n=>t(a).media_username=n),placeholder:"请输入用户名"},null,8,["value"])]),_:1})]),_:1})):b("",!0),t(g)?(_(),c(m,{key:3,span:12},{default:s(()=>[l(i,{name:"media_password",label:"密码",rules:{max:64,message:"最多可输入64个字符"}},{default:s(()=>[l(x,{value:t(a).media_password,"onUpdate:value":e[5]||(e[5]=n=>t(a).media_password=n),placeholder:"请输入密码"},null,8,["value"])]),_:1})]),_:1})):b("",!0),l(m,{span:24},{default:s(()=>[l(i,{name:"address",label:"安装地址",rules:{max:64,message:"最多可输入64个字符"}},{default:s(()=>[l(d,{value:t(a).address,"onUpdate:value":e[6]||(e[6]=n=>t(a).address=n),placeholder:"请输入安装地址"},null,8,["value"])]),_:1})]),_:1}),t(T)?(_(),c(m,{key:4,span:24},{default:s(()=>[l(i,{label:"云台类型",name:"ptzType"},{default:s(()=>[l(y,{value:t(a).ptzType,"onUpdate:value":e[7]||(e[7]=n=>t(a).ptzType=n),options:[{label:"未知",value:0},{label:"球体",value:1},{label:"半球体",value:2},{label:"固定枪机",value:3},{label:"遥控枪机",value:4}],placeholder:"请选择云台类型"},null,8,["value"])]),_:1})]),_:1})):b("",!0),l(m,{span:24},{default:s(()=>[l(i,{name:"description",label:"说明"},{default:s(()=>[l(I,{value:t(a).description,"onUpdate:value":e[8]||(e[8]=n=>t(a).description=n),rows:4,maxlength:200,showCount:""},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","confirmLoading"])}}});export{te as _};