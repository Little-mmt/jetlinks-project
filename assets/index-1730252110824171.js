import{d as Z,ac as ee,k as n,e as j,o as ae,w as le,ab as N,U as P,V as R,X as r,f as c,_ as d,u as a,E as oe,G as E,a4 as te,$ as q,af as ne,ag as se}from"./vue-1730252110824.js";import{au as _,h as V,$ as ue,fJ as ce,fS as ie,af as de,dP as re,dQ as pe,A as me,g as ve}from"./index-1730252110824.js";import"./index-1730252110824301.js";import"./index-1730252110824279.js";import{p as g}from"./playback-1730252110824.js";import _e from"./timeLine-17302521108242.js";import{_ as fe}from"./iconNode.vue_vue_type_script_setup_true_lang-17302521108242.js";import{L as ye}from"./index-1730252110824289.js";const B=w=>(ne("data-v-f150c7ec"),w=w(),se(),w),ge={class:"playback-warp"},he={class:"playback-left"},Te={class:"playback-right"},Ye=B(()=>d("div",null,"云端：存储在服务器中",-1)),ke=B(()=>d("div",null,"本地：存储在设备本地",-1)),we={class:"playback-calendar"},Se=["onClick"],be=Z({__name:"index",setup(w){const D=ee(),h=n(""),s=n("local"),p=n([]),m=n(void 0),f=n(!1),$=n(),C=n(),u=n(0),I=n(0),v=n(0),S=n(null),M=n(!1),T=j(()=>D.query.id),y=j(()=>D.query.channelId),x=n(""),L=async e=>{if(u.value=0,h.value="",T.value&&y.value&&e){f.value=!0;const l={startTime:e.format("YYYY-MM-DD 00:00:00"),endTime:e.format("YYYY-MM-DD 23:59:59")},t=await g.queryRecordLocal(T.value,y.value,l).finally(()=>{f.value=!1});if(t.status===200&&t.result.length){const i=await g.recordsInServer(T.value,y.value,{...l,includeFiles:!1});let Y=i.result;i.status===200&&i.result&&(Y=t.result.map(k=>({...k,isServer:i.result.length?i.result.some(b=>k.startTime<=b.streamStartTime&&b.streamEndTime<=k.endTime):!1}))),p.value=Y}else f.value=!1,p.value=[]}},H=async e=>{if(u.value=0,h.value="",T.value&&y.value&&e){f.value=!0;const l={startTime:e.format("YYYY-MM-DD 00:00:00"),endTime:e.format("YYYY-MM-DD 23:59:59"),includeFiles:!0},t=await g.recordsInServerFiles(T.value,y.value,l);f.value=!1,t.status===200&&(p.value=t.result)}},F=(e,l)=>{s.value="cloud",$.value={startTime:e,endTime:l}},A=async e=>{const l=g.downLoadFile(e.id),t=document.createElement("a");t.href=l,t.download=`${y}-${_(e.startTime).format("YYYY-MM-DD-HH-mm-ss")}.mp4`,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},J=()=>{u.value=0,S&&!M.value&&(M.value=!0,S.value.onNextPlay())};ae(()=>{const e=D.query.type;if(e){x.value=e;const l=_(new Date);m.value=l,e==="fixed-media"||e==="onvif"?(s.value="cloud",H(l)):(L(l),s.value="local")}});const O=e=>{e?(v.value=Number(e.startTime.valueOf()),I.value=0,h.value=s.value==="local"?g.playbackLocal(e.deviceId,e.channelId,"mp4",_(e.startTime).format("YYYY-MM-DD HH:mm:ss"),_(e.endTime).format("YYYY-MM-DD HH:mm:ss")):g.playbackStart(e.deviceId)):h.value=""};le(()=>s.value,e=>{e==="cloud"?H(m.value):L(m.value)});const U=e=>{m.value=e,s.value==="cloud"?H(e):L(e)},z=e=>{var l,t,i;u.value===0||e!==v.value?(l=S.value)==null||l.playByStartTime(e):u.value==1&&e===v.value?(t=C.value)==null||t.pause():u.value==2&&e===v.value&&((i=C.value)==null||i.play())};return(e,l)=>{const t=N("AIcon"),i=ue,Y=ce,k=ie,b=de,Q=re,G=pe,X=me,K=N("FullPage"),W=N("page-container");return P(),R(W,null,{default:r(()=>[c(K,null,{default:r(()=>[d("div",ge,[d("div",he,[c(ye,{ref_key:"player",ref:C,autoplay:"",url:a(h),className:"playback-media",live:a(s)==="local","on-play":()=>{M.value=!1,u.value=1},"on-pause":()=>{u.value=2},"on-ended":J,"on-error":()=>{u.value=0},"on-time-update":o=>{I.value=o.currentTime}},null,8,["url","live","on-play","on-pause","on-error","on-time-update"]),c(_e,{ref_key:"playTimeNode",ref:S,type:a(s),data:a(p),"date-time":a(m),"on-change":O,"play-status":a(u),"play-time":a(v)+a(I)*1e3,"local-to-server":a($)},null,8,["type","data","date-time","play-status","play-time","local-to-server"])]),d("div",Te,[c(X,{spinning:a(f)},{default:r(()=>[c(i,{placement:"topLeft"},{title:r(()=>[Ye,ke]),default:r(()=>[d("div",null,[oe(" 类型: "),c(t,{type:"QuestionCircleOutlined"})])]),_:1}),c(Y,{layout:"horizontal",options:a(x)!=="onvif"?[{label:"云端",value:"cloud",logo:a(V)("/media/cloud.png")},{label:"本地",value:"local",logo:a(V)("/local.png"),disabled:a(x)==="fixed-media"}]:[{label:"云端",value:"cloud",logo:a(V)("/media/cloud.png")}],checkStyle:!0,modelValue:a(s),"onUpdate:modelValue":l[0]||(l[0]=o=>E(s)?s.value=o:null)},null,8,["options","modelValue"]),d("div",we,[c(k,{value:a(m),"onUpdate:value":l[1]||(l[1]=o=>E(m)?m.value=o:null),fullscreen:!1,disabledDate:o=>o>a(_)(new Date),onChange:U},null,8,["value","disabledDate"])]),d("div",{class:te(["playback-list",{"no-list":!a(p).length}])},[a(p).length?(P(),R(G,{key:1,class:"playback-list-items",itemLayout:"horizontal",dataSource:a(p)},{renderItem:r(({item:o})=>[c(Q,null,{actions:r(()=>[c(i,{key:"play-btn",title:(o.startTime||o.mediaStartTime)===a(v)&&a(u)===1?"暂停":"播放"},{default:r(()=>[d("a",{onClick:De=>z(o.startTime||o.mediaStartTime)},[c(t,{type:(o.startTime||o.mediaStartTime)===a(v)&&a(u)===1?"PauseCircleOutlined":"PlayCircleOutlined"},null,8,["type"])],8,Se)]),_:2},1032,["title"]),c(fe,{type:a(s),item:o,"on-cloud-view":F,"on-down-load":()=>A(o)},null,8,["type","item","on-down-load"])]),default:r(()=>[d("div",null,q(a(_)(o.startTime||o.mediaStartTime).format("HH:mm:ss"))+" ~ "+q(a(_)(o.endTime||o.mediaEndTime).format("HH:mm:ss")),1)]),_:2},1024)]),_:1},8,["dataSource"])):(P(),R(b,{key:0,description:"暂无数据"}))],2)]),_:1},8,["spinning"])])])]),_:1})]),_:1})}}});const Re=ve(be,[["__scopeId","data-v-f150c7ec"]]);export{Re as default};