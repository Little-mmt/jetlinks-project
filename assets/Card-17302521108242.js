import{h as l,u as E,Z as J,z as _,J as z,g as D}from"./index-1730252110824.js";import F from"./Detail-1730252110824.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang-17302521108242.js";import O from"./Bind-1730252110824.js";import{d as T,k as y,U as i,Z as I,_ as b,f as P,X as d,V as f,E as C,F as Z,u as r,a4 as A,G,$ as L,Y as V}from"./vue-1730252110824.js";import"./notificationSubscription-1730252110824.js";import"./Wechat.vue_vue_type_script_setup_true_lang-1730252110824.js";const R={class:"box-item"},X={class:"box-item-img"},Y=["src"],q={class:"box-item-text"},H=T({__name:"Card",props:{data:{type:Object,default:()=>{}},current:{type:Object,default:()=>{}},notifyChannels:{type:Array,default:()=>[]}},emits:["save","unsubscribe"],setup(e,{emit:v}){const k=e,a=new Map;a.set("notifier-dingTalk",l("/notice-rule/dingtalk.png")),a.set("notifier-weixin",l("/notice-rule/wechat.png")),a.set("notifier-email",l("/notice-rule/email.png")),a.set("notifier-voice",l("/notice-rule/voice.png")),a.set("notifier-sms",l("/notice-rule/sms.png")),a.set("inside-mail",l("/notice-rule/inside-mail.png"));const x=E(),s=y(!1),m=y(!1),g=y(!1),B=o=>{o==="bind"?m.value=!0:g.value=!0},w=()=>{m.value=!1,x.getUserInfo(),v("save",k.current),s.value=!1},U=()=>{g.value=!1,v("save",k.current),s.value=!1},h=o=>{v("unsubscribe",o),s.value=!1},S=o=>{v("save",o),s.value=!1};return(o,n)=>{const $=J,j=_,N=z;return i(),I("div",R,[b("div",X,[P(j,{visible:r(s),"onUpdate:visible":n[4]||(n[4]=t=>G(s)?s.value=t:null),placement:"top",trigger:["click"]},{content:d(()=>{var t,u,c;return[(u=e.notifyChannels)!=null&&u.includes((t=e.current)==null?void 0:t.id)?(i(),I(Z,{key:1},[((c=e.current)==null?void 0:c.channelProvider)!=="inside-mail"&&r(s)?(i(),f(F,{key:0,onUnsubscribe:h,current:e.current,data:e.data,onBindChange:n[1]||(n[1]=p=>B("bind")),onInfoChange:n[2]||(n[2]=p=>B("info"))},null,8,["current","data"])):(i(),f($,{key:1,type:"link",hasPermission:!0,onClick:n[3]||(n[3]=p=>h(e.current))},{default:d(()=>[C(" 取消订阅 ")]),_:1}))],64)):(i(),f($,{key:0,type:"link",hasPermission:!0,onClick:n[0]||(n[0]=p=>S(e.current))},{default:d(()=>[C(" 订阅 ")]),_:1}))]}),default:d(()=>{var t,u,c;return[b("div",{class:A({disabled:!((u=e.notifyChannels)!=null&&u.includes((t=e.current)==null?void 0:t.id))})},[b("img",{src:r(a).get((c=e.current)==null?void 0:c.channelProvider),style:{width:"32px"}},null,8,Y)],2)]}),_:1},8,["visible"])]),b("div",q,[P(N,{style:{width:"50px"}},{default:d(()=>{var t;return[C(L((t=e.current)==null?void 0:t.name),1)]}),_:1})]),r(m)?(i(),f(M,{key:0,data:r(x).userInfos,onClose:n[5]||(n[5]=t=>m.value=!1),onSave:w},null,8,["data"])):V("",!0),r(g)?(i(),f(O,{key:1,onClose:n[6]||(n[6]=t=>g.value=!1),data:e.data,current:e.current,onSave:U},null,8,["data","current"])):V("",!0)])}}});const ae=D(H,[["__scopeId","data-v-d6e50304"]]);export{ae as default};