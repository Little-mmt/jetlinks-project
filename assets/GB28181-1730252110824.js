import{d as pe,ac as Oe,k as h,r as re,o as He,w as $e,ab as qe,U as i,Z as y,f as e,X as t,F as O,a1 as H,u as s,V as P,_ as g,E as f,Y as $,G as De,$ as x,a0 as Le,W as ne,af as Be,ag as Je}from"./vue-1730252110824.js";import{F as ue,o as ie,aS as de,an as Fe,ao as Re,I as Ke,v as Ee,a0 as Te,a1 as Ae,$ as Me,dD as Ge,aK as Qe,aD as Ve,a6 as Ze,a7 as ze,K as We,M as Xe,d as Ye,aH as et,a9 as tt,ah as ot,ds as st,ai as at,Z as lt,g as rt}from"./index-1730252110824.js";import"./index-1730252110824284.js";import"./index-1730252110824306.js";import"./index-1730252110824276.js";import"./index-1730252110824279.js";import"./index-1730252110824286.js";import{k as nt,l as ut,s as it,u as dt}from"./accessConfig-1730252110824.js";import{t as pt}from"./validate-1730252110824.js";import"./regular-1730252110824.js";const J=w=>(Be("data-v-8c879228"),w=w(),Je(),w),ct={style:{"margin-top":"10px"}},_t={class:"steps-content"},mt={key:0,class:"steps-box"},vt={class:"alert"},ft={key:0,class:"form-item1"},ht=J(()=>g("div",{class:"form-label"},null,-1)),gt=J(()=>g("div",{class:"form-label"},null,-1)),bt={key:0},yt=["onClick"],Pt=J(()=>g("div",{class:"form-label"},null,-1)),It=J(()=>g("div",{class:"form-label"},null,-1)),Ct={key:1,class:"steps-box"},wt={style:{height:"400px"}},St={style:{color:"#a3a3a3"}},kt={class:"steps-action"},xt=pe({name:"AccessNetwork"}),jt=pe({...xt,props:{provider:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}}},setup(w){const A=w,F=Oe(),ce=F.query.view,q=F.params.id,D=h(!1),I=h([]),M=document.body.clientHeight,G=h(),Q=h(),_e=ue.useForm,b=h(0),V=h(0),me=h(["信令配置","完成"]),S=h({name:"",description:""});let n=h({domain:void 0,sipId:void 0,shareCluster:!0,hostPort:{port:void 0,host:"0.0.0.0",publicPort:void 0,publicHost:void 0}}),k={configuration:{}},L=[];const Z=h([]),z=h([]),W=h([]),X=h([]),c=re({cluster:[]}),ve={publicPort:[{required:!0,message:"输入端口"}]},Y=async(a,o)=>o?pt(o)?Promise.resolve():Promise.reject("请输入正确的IP地址"):Promise.reject("请输入IP地址"),fe=a=>{let o=c.cluster.indexOf(a);o!==-1&&c.cluster.splice(o,1)},he=()=>{const a=Date.now();c.cluster.push({clusterNodeId:void 0,port:void 0,host:void 0,publicPort:void 0,publicHost:void 0,id:a}),I.value=[...I.value,a.toString()]},j=(a,o)=>o.label.toLowerCase().indexOf(a.toLowerCase())>=0,ge=a=>{var r;c.cluster[a].port=void 0;const o=c.cluster[a].host;W.value[a]=(r=L.find(_=>_.host===o))==null?void 0:r.portList.map(_=>({value:JSON.stringify({host:o,port:_.port}),label:`${_.transports.join("/")} (${_.port})`}))},{resetFields:Ut,validate:be,validateInfos:ee}=_e(S,re({name:[{required:!0,message:"请输入名称",trigger:"blur"},{max:64,message:"最多可输入64个字符",trigger:"blur"}],description:[{max:200,message:"最多可输入200个字符"}]})),ye=()=>{be().then(async a=>{k={...k,...a,provider:"gb28181-2016",transport:"SIP",channel:"gb28181"},D.value=!0;const o=q===":id"?await it(k).catch(()=>{D.value=!1}):await dt({...k,id:q}).catch(()=>{D.value=!1});(o==null?void 0:o.status)===200&&(ie("操作成功","success"),F.query.save?window.onTabSaveSuccess&&(window.onTabSaveSuccess(o),setTimeout(()=>window.close(),300)):history.back())})},Pe=async()=>{var o,r,_;let a=await((o=G.value)==null?void 0:o.validate());(r=a.hostPort)!=null&&r.port&&!de(a.hostPort.port)&&a.shareCluster&&(a.hostPort.port=JSON.parse(a.hostPort.port).port),a!=null&&a.shareCluster?(b.value=b.value+1,k.configuration=a):await((_=Q.value)==null?void 0:_.validate().then(u=>{if(u&&(u!=null&&u.cluster))u.cluster.forEach(d=>{d.enabled=!0,d.port=de(d.port)?d.port:JSON.parse(d.port).port}),a={...a,...u};else return ie("请新增或完善配置","error");b.value=b.value+1,k.configuration=a}).catch(u=>{var d;(d=u.errorFields)==null||d.forEach(m=>{const v=c.cluster[m.name[1]].id;I.value.includes(v)||I.value.push(v)})}))},Ie=()=>{b.value=b.value-1,te()},te=()=>{c.cluster.length!==0&&c.cluster.forEach(a=>{const o=JSON.stringify(Date.now()+Math.random());a.id=o,I.value.push(o)})},Ce=a=>{var r,_;const o=((_=(r=c==null?void 0:c.cluster)==null?void 0:r.map)==null?void 0:_.call(r,u=>u.clusterNodeId))||[];return X.value.filter(u=>u.value===a||!o.includes(u.value))},we=(a,o)=>{var _,u;const r=((u=(_=c==null?void 0:c.cluster)==null?void 0:_.map)==null?void 0:u.call(_,d=>d.port))||[];return(a||[]).filter(d=>d.value===o||!r.includes(d.value))};return He(()=>{if(nt().then(a=>{var o;a.status===200&&(L=a.result,Z.value=L.map(r=>({value:r.host,label:r.host})),z.value=(o=L.find(r=>r.host==="0.0.0.0"))==null?void 0:o.portList.map(r=>({value:JSON.stringify({host:"0.0.0.0",port:r.port}),label:`${r.transports.join("/")} (${r.port})`})))}),ut().then(a=>{if(a.status===200){const o=a.result.map(r=>({value:r.id,label:r.name}));X.value=o}}),q!==":id"){const{configuration:a,name:o,description:r=""}=A.data;S.value={name:o,description:r},n.value={...n.value,...A.data.configuration},a!=null&&a.shareCluster||(c.cluster=a.cluster,te())}}),$e(b,a=>{V.value=a},{deep:!0,immediate:!0}),(a,o)=>{const r=Fe,_=Re,u=qe("AIcon"),d=Ke,m=Ee,v=Te,B=Ae,R=Me,oe=Ge,Se=Qe,K=Ve,U=Ze,se=ze,E=ue,ke=We,xe=Xe,T=Ye,ae=et,je=tt,N=ot,le=st,Ue=at,Ne=lt;return i(),y("div",ct,[e(_,{current:s(V)},{default:t(()=>[(i(!0),y(O,null,H(s(me),l=>(i(),P(r,{disabled:"",key:l,title:l},null,8,["title"]))),128))]),_:1},8,["current"]),g("div",_t,[s(b)===0?(i(),y("div",mt,[g("div",vt,[e(u,{type:"InfoCircleOutlined"}),f(" 配置设备信令参数 ")]),e(E,{model:s(n),ref_key:"formRef1",ref:G,name:"basic",autocomplete:"off",layout:"vertical"},{default:t(()=>[e(B,{gutter:[24,24]},{default:t(()=>[e(v,{span:12},{default:t(()=>[e(m,{label:"SIP 域",name:"domain",rules:[{required:!0,message:"请输入SIP 域"},{max:64,message:"最多可输入64个字符",trigger:"blur"}]},{default:t(()=>[e(d,{value:s(n).domain,"onUpdate:value":o[0]||(o[0]=l=>s(n).domain=l),placeholder:"请输入SIP 域"},null,8,["value"])]),_:1})]),_:1}),e(v,{span:12},{default:t(()=>[e(m,{label:"SIP ID",name:"sipId",rules:[{required:!0,message:"请输入SIP ID"},{max:64,message:"最多可输入64个字符",trigger:"blur"}]},{default:t(()=>[e(d,{value:s(n).sipId,"onUpdate:value":o[1]||(o[1]=l=>s(n).sipId=l),placeholder:"请输入SIP ID"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(m,{name:"shareCluster",rules:[{required:!0,message:"请选择集群"}]},{label:t(()=>[f(" 集群 "),e(R,{title:"共享配置:集群下所有节点共用同一配置,独立配置:集群下不同节点使用不同配置"},{default:t(()=>[e(u,{type:"QuestionCircleOutlined",style:{"margin-left":"2px"}})]),_:1})]),default:t(()=>[e(Se,{value:s(n).shareCluster,"onUpdate:value":o[2]||(o[2]=l=>s(n).shareCluster=l)},{default:t(()=>[e(oe,{value:!0},{default:t(()=>[f("共享配置")]),_:1}),e(oe,{value:!1},{default:t(()=>[f("独立配置")]),_:1})]),_:1},8,["value"])]),_:1}),s(n).shareCluster?(i(),y("div",ft,[e(B,{gutter:[24,24]},{default:t(()=>[e(v,{span:6},{default:t(()=>[e(m,{label:"SIP 地址",name:["hostPort","host"],rules:[{required:!0,message:"请选择SIP地址"}]},{default:t(()=>[e(U,{value:s(n).hostPort.host,"onUpdate:value":o[3]||(o[3]=l=>s(n).hostPort.host=l),style:{width:"105%"},disabled:!0,"show-search":"","filter-option":j},{default:t(()=>[e(K,{value:"0.0.0.0"},{default:t(()=>[f("0.0.0.0")]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(v,{span:6},{default:t(()=>[e(m,{name:["hostPort","port"],rules:[{required:!0,message:"请选择端口"}]},{default:t(()=>[ht,e(U,{value:s(n).hostPort.port,"onUpdate:value":o[4]||(o[4]=l=>s(n).hostPort.port=l),options:s(z),placeholder:"请选择端口",allowClear:"","show-search":"","filter-option":j},null,8,["value","options"])]),_:1})]),_:1}),e(v,{span:6},{default:t(()=>[e(m,{label:"公网 Host",name:["hostPort","publicHost"],rules:[{required:!0,message:"请输入IP地址"},{validator:Y,trigger:"change"}],validateFirst:!0},{default:t(()=>[e(d,{style:{width:"105%"},value:s(n).hostPort.publicHost,"onUpdate:value":o[5]||(o[5]=l=>s(n).hostPort.publicHost=l),max:65535,min:1,precision:0,placeholder:"请输入IP地址"},null,8,["value"])]),_:1},8,["rules"])]),_:1}),e(v,{span:6},{default:t(()=>[e(m,{name:["hostPort","publicPort"],rules:ve.publicPort,validateFirst:!0},{default:t(()=>[gt,e(se,{style:{width:"100%"},placeholder:"请输入端口",value:s(n).hostPort.publicPort,"onUpdate:value":o[6]||(o[6]=l=>s(n).hostPort.publicPort=l),min:1,max:65535,precision:0},null,8,["value"])]),_:1},8,["rules"])]),_:1})]),_:1})])):$("",!0)]),_:1},8,["model"]),s(n).shareCluster?$("",!0):(i(),y("div",bt,[e(E,{ref_key:"formRef2",ref:Q,layout:"vertical",name:"dynamic_form_nest_item",model:s(c)},{default:t(()=>[(i(!0),y(O,null,H(s(c).cluster,(l,C)=>(i(),y("div",{key:l.id},[e(xe,{activeKey:s(I),"onUpdate:activeKey":o[7]||(o[7]=p=>De(I)?I.value=p:null)},{default:t(()=>[(i(),P(ke,{key:l.id,header:l.clusterNodeId?l.clusterNodeId:`#${C+1}.配置信息`},{extra:t(()=>[g("span",{onClick:p=>fe(l),class:"delete-btn"},"删除",8,yt)]),default:t(()=>[e(B,{gutter:[24,24]},{default:t(()=>[e(v,{span:8},{default:t(()=>[e(m,{label:"节点名称",name:["cluster",C,"clusterNodeId"],rules:{required:!0,message:"请选择节点名称"}},{default:t(()=>[e(U,{value:l.clusterNodeId,"onUpdate:value":p=>l.clusterNodeId=p,placeholder:"请选择节点名称",allowClear:"","show-search":"","filter-option":j},{default:t(()=>[(i(!0),y(O,null,H(Ce(l.clusterNodeId),p=>(i(),P(K,{value:p.value},{default:t(()=>[f(x(p.label),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value","filter-option"])]),_:2},1032,["name"])]),_:2},1024),e(v,{span:4},{default:t(()=>[e(m,{name:["cluster",C,"host"],rules:{required:!0,message:"请选择SIP 地址"}},{label:t(()=>[f(" SIP 地址 "),e(R,{title:"到服务器上的网卡地址,绑定到所有网卡:0.0.0.0"},{default:t(()=>[e(u,{type:"QuestionCircleOutlined",style:{"margin-left":"2px"}})]),_:1})]),default:t(()=>[e(U,{value:l.host,"onUpdate:value":p=>l.host=p,options:s(Z),placeholder:"请选择IP地址",allowClear:"","show-search":"","filter-option":j,style:{width:"110%"},onChange:p=>ge(C)},null,8,["value","onUpdate:value","options","filter-option","onChange"])]),_:2},1032,["name"])]),_:2},1024),e(v,{span:4},{default:t(()=>[e(m,{name:["cluster",C,"port"],rules:{required:!0,message:"请选择端口"}},{default:t(()=>[Pt,e(U,{value:l.port,"onUpdate:value":p=>l.port=p,placeholder:"请选择端口",allowClear:"","show-search":"","filter-option":j},{default:t(()=>[(i(!0),y(O,null,H(we(s(W)[C],l.port),p=>(i(),P(K,{value:p.value},{default:t(()=>[f(x(p.label),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value","filter-option"])]),_:2},1032,["name"])]),_:2},1024),e(v,{span:4},{default:t(()=>[e(m,{name:["cluster",C,"publicHost"],validateFirst:!0,rules:[{required:!0,message:"请输入公网 Host"},{validator:Y,trigger:"change"}]},{label:t(()=>[f(" 公网 Host "),e(R,{title:"监听指定端口的请求"},{default:t(()=>[e(u,{type:"QuestionCircleOutlined",style:{"margin-left":"2px"}})]),_:1})]),default:t(()=>[e(d,{style:{width:"110%"},value:l.publicHost,"onUpdate:value":p=>l.publicHost=p,placeholder:"请输入IP地址",allowClear:""},null,8,["value","onUpdate:value"])]),_:2},1032,["name","rules"])]),_:2},1024),e(v,{span:4},{default:t(()=>[e(m,{name:["cluster",C,"publicPort"],rules:[{required:!0,message:"请输入端口"}]},{default:t(()=>[It,e(se,{style:{width:"100%"},placeholder:"请输入端口",value:l.publicPort,"onUpdate:value":p=>l.publicPort=p,min:1,max:65535,precision:0},null,8,["value","onUpdate:value"])]),_:2},1032,["name"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["header"]))]),_:2},1032,["activeKey"])]))),128)),e(m,null,{default:t(()=>[e(T,{style:{"margin-top":"10px"},type:"primary",block:"",ghost:"",onClick:he},{default:t(()=>[e(u,{type:"PlusOutlined"}),f(" 新增 ")]),_:1})]),_:1})]),_:1},8,["model"])]))])):(i(),y("div",Ct,[g("div",{class:"card-last",style:Le(`max-height:${s(M)>900?750:s(M)*.7}px`)},[e(B,{gutter:[24,24]},{default:t(()=>[e(v,{span:12},{default:t(()=>[e(ae,{data:"基本信息"}),g("div",null,[e(E,{model:s(S),layout:"vertical"},{default:t(()=>[e(m,ne({label:"名称"},s(ee).name),{default:t(()=>[e(d,{value:s(S).name,"onUpdate:value":o[8]||(o[8]=l=>s(S).name=l),allowClear:"",placeholder:"请输入名称"},null,8,["value"])]),_:1},16),e(m,ne({label:"说明"},s(ee).description),{default:t(()=>[e(je,{placeholder:"请输入说明",rows:4,value:s(S).description,"onUpdate:value":o[9]||(o[9]=l=>s(S).description=l),"show-count":"",maxlength:200},null,8,["value"])]),_:1},16)]),_:1},8,["model"])])]),_:1}),e(v,{span:12},{default:t(()=>[g("div",wt,[e(ae,{data:"配置概览"}),e(Ue,{column:1,labelStyle:{width:"80px"}},{default:t(()=>[e(N,{label:"接入方式"},{default:t(()=>[f(x(w.provider.name),1)]),_:1}),e(N,null,{default:t(()=>[g("span",St,x(w.provider.description),1)]),_:1}),e(N,{label:"SIP 域"},{default:t(()=>[f(x(s(n).domain),1)]),_:1}),e(N,{label:"SIP ID"},{default:t(()=>[f(x(s(n).sipId),1)]),_:1}),e(N,null,{default:t(()=>[s(n).shareCluster?(i(),P(le,{key:0,text:`${s(n).hostPort.publicHost}:${s(n).hostPort.publicPort}`,status:"processing"},null,8,["text"])):(i(!0),y(O,{key:1},H(s(c).cluster,l=>(i(),P(le,{text:`${l.publicHost}:${l.publicPort}`,status:"processing"},null,8,["text"]))),256))]),_:1})]),_:1})])]),_:1})]),_:1})],4)]))]),g("div",kt,[[0].includes(s(b))?(i(),P(T,{key:0,style:{"margin-right":"8px"},onClick:Pe},{default:t(()=>[f(" 下一步 ")]),_:1})):$("",!0),s(b)===1&&s(ce)==="false"?(i(),P(Ne,{key:1,type:"primary",style:{"margin-right":"8px"},onClick:ye,loading:s(D),hasPermission:`link/AccessConfig:${s(q)===":id"?"add":"update"}`},{default:t(()=>[f(" 保存 ")]),_:1},8,["loading","hasPermission"])):$("",!0),s(b)>0?(i(),P(T,{key:2,onClick:Ie},{default:t(()=>[f(" 上一步 ")]),_:1})):$("",!0)])])}}});const Rt=rt(jt,[["__scopeId","data-v-8c879228"]]);export{Rt as default};