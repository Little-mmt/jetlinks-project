import{au as _,h as N,cY as Z,d5 as ee,fJ as ae,fK as le,fH as te,dP as oe,dQ as ne,dB as se,d3 as ue,g as de}from"./index-1731638920964.js";import{p as f}from"./playback-1731638920964.js";import ie from"./timeLine-1731638920964.js";import{_ as ce}from"./iconNode.vue_vue_type_script_setup_true_lang-1731638920964.js";import{L as re}from"./index-1731638920964289.js";import{d as ve,k as o,e as E,w as pe,o as me,ab as _e,U as B,V,X as i,f as s,E as R,_ as c,u as T,a4 as fe,$ as O,af as ye,ag as he}from"./vue-1731638920964.js";const F=Y=>(ye("data-v-8402efe5"),Y=Y(),he(),Y),ge={class:"playback-warp"},Te={class:"playback-left"},Ye={class:"playback-right"},ke=F(()=>c("div",null,"云端：存储在服务器中",-1)),be=F(()=>c("div",null,"本地：存储在设备本地",-1)),we={class:"playback-calendar"},Se=["onClick"],Ie=ve({__name:"index",props:{data:{type:Object,default:{}},scheduleId:{type:String,default:""}},emits:["close"],setup(Y,{emit:$}){const k=Y,b=o(""),u=o("local"),v=o([]),r=o(void 0),y=o(!1),P=o(),C=o(),n=o(0),D=o(0),p=o(0),S=o(null),M=o(!1),h=E(()=>k.data.deviceId),m=E(()=>k.data.channelId),x=o(""),L=async e=>{if(n.value=0,b.value="",h.value&&m.value&&e){y.value=!0;const l={startTime:e.format("YYYY-MM-DD 00:00:00"),endTime:e.format("YYYY-MM-DD 23:59:59")},t=await f.queryRecordLocal(h.value,m.value,l).finally(()=>{y.value=!1});if(t.status===200&&t.result.length){const d=await f.recordsInServer(h.value,m.value,{...l,includeFiles:!1});let g=d.result;d.status===200&&d.result&&(g=t.result.map(w=>({...w,isServer:d.result.length?d.result.some(I=>w.startTime<=I.streamStartTime&&I.streamEndTime<=w.endTime):!1}))),v.value=g}else y.value=!1,v.value=[]}},H=async e=>{if(n.value=0,b.value="",h.value&&m.value&&e){y.value=!0;const l={startTime:e.format("YYYY-MM-DD 00:00:00"),endTime:e.format("YYYY-MM-DD 23:59:59"),includeFiles:!0},t=k.scheduleId===""?await f.recordsInServerFiles(h.value,m.value,l):await f.recordsInServerFilesByVideo(k.scheduleId,h.value,m.value,l);y.value=!1,t.status===200&&(v.value=t.result)}},U=(e,l)=>{u.value="cloud",P.value={startTime:e,endTime:l}},q=async e=>{const l=f.downLoadFile(e.id),t=document.createElement("a");t.href=l,t.download=`${m}-${_(e.startTime).format("YYYY-MM-DD-HH-mm-ss")}.mp4`,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},z=()=>{n.value=0,S&&!M.value&&(M.value=!0,S.value.onNextPlay())},A=e=>{e?(p.value=Number(e.startTime.valueOf()),D.value=0,b.value=u.value==="local"?f.playbackLocal(e.deviceId,e.channelId,"mp4",_(e.startTime).format("YYYY-MM-DD HH:mm:ss"),_(e.endTime).format("YYYY-MM-DD HH:mm:ss")):f.playbackStart(e.deviceId)):b.value=""},j=e=>{r.value=e,u.value==="cloud"?H(e):L(e)},Q=e=>{var l,t,d;n.value===0||e!==p.value?(l=S.value)==null||l.playByStartTime(e):n.value==1&&e===p.value?(t=C.value)==null||t.pause():n.value==2&&e===p.value&&((d=C.value)==null||d.play())};return pe(()=>u.value,e=>{e==="cloud"?H(r.value):L(r.value)}),me(()=>{const e=k.data.provider||"fixed-media";e&&(x.value=e,r.value=_(new Date),e==="fixed-media"||e==="onvif"?(u.value="cloud",H(r.value)):(L(r.value),u.value="local"))}),(e,l)=>{const t=Z,d=_e("AIcon"),g=ee,w=ae,I=le,J=te,K=oe,X=ne,G=se,W=ue;return B(),V(W,{title:"录像回放",visible:"",style:{top:"40px"},width:1400,onCancel:l[3]||(l[3]=a=>$("close"))},{footer:i(()=>[s(t,{type:"primary",onClick:l[0]||(l[0]=a=>$("close"))},{default:i(()=>[R("取消")]),_:1})]),default:i(()=>[c("div",ge,[c("div",Te,[s(re,{ref_key:"player",ref:C,autoplay:"",url:b.value,className:"playback-media",live:u.value==="local","on-play":()=>{M.value=!1,n.value=1},"on-pause":()=>{n.value=2},"on-ended":z,"on-error":()=>{n.value=0},"on-time-update":a=>{D.value=a.currentTime}},null,8,["url","live","on-play","on-pause","on-error","on-time-update"]),s(ie,{ref_key:"playTimeNode",ref:S,type:u.value,data:v.value,"date-time":r.value,"on-change":A,"play-status":n.value,"play-time":p.value+D.value*1e3,"local-to-server":P.value},null,8,["type","data","date-time","play-status","play-time","local-to-server"])]),c("div",Ye,[s(G,{spinning:y.value},{default:i(()=>[s(g,{placement:"topLeft"},{title:i(()=>[ke,be]),default:i(()=>[c("div",null,[R("类型: "),s(d,{type:"QuestionCircleOutlined"})])]),_:1}),s(w,{layout:"horizontal",options:x.value!=="onvif"?[{label:"云端",value:"cloud",logo:T(N)("/media/cloud.png")},{label:"本地",value:"local",logo:T(N)("/local.png"),disabled:x.value==="fixed-media"}]:[{label:"云端",value:"cloud",logo:T(N)("/media/cloud.png")}],checkStyle:!0,modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=a=>u.value=a)},null,8,["options","modelValue"]),c("div",we,[s(I,{value:r.value,"onUpdate:value":l[2]||(l[2]=a=>r.value=a),fullscreen:!1,disabledDate:a=>a>T(_)(new Date),onChange:j},null,8,["value","disabledDate"])]),c("div",{class:fe(["playback-list",{"no-list":!v.value.length}])},[v.value.length?(B(),V(X,{key:1,class:"playback-list-items",itemLayout:"horizontal",dataSource:v.value},{renderItem:i(({item:a})=>[s(K,null,{actions:i(()=>[s(g,{key:"play-btn",title:(a.startTime||a.mediaStartTime)===p.value&&n.value===1?"暂停":"播放"},{default:i(()=>[c("a",{onClick:Ce=>Q(a.startTime||a.mediaStartTime)},[s(d,{type:(a.startTime||a.mediaStartTime)===p.value&&n.value===1?"PauseCircleOutlined":"PlayCircleOutlined"},null,8,["type"])],8,Se)]),_:2},1032,["title"]),s(ce,{type:u.value,item:a,"on-cloud-view":U,"on-down-load":()=>q(a)},null,8,["type","item","on-down-load"])]),default:i(()=>[c("div",null,O(T(_)(a.startTime||a.mediaStartTime).format("HH:mm:ss"))+" ~ "+O(T(_)(a.endTime||a.mediaEndTime).format("HH:mm:ss")),1)]),_:2},1024)]),_:1},8,["dataSource"])):(B(),V(J,{key:0,description:"暂无数据"}))],2)]),_:1},8,["spinning"])])])]),_:1})}}});const Be=de(Ie,[["__scopeId","data-v-8402efe5"]]);export{Be as default};