import{h as b,ad as w,o as C,B as S,ae as E,Z as I,d as L,af as V,y as A,g as N}from"./index-1731638920964.js";import{d as P,k as U,o as $,ab as j,U as t,V as c,X as i,_ as s,u as p,Z as a,a1 as J,f as T,E as _,$ as g,Y as F,F as M}from"./vue-1731638920964.js";const Z={class:"box"},D={class:"content"},H={class:"content-item-left"},R=["src"],X={key:0,style:{color:"#2BA245"}},Y={key:1,style:{color:"#999"}},q={key:0,style:{color:"#666666"}},z={class:"content-item-right"},G=P({__name:"index",setup(K){const r=U([]),f={"dingtalk-ent-app":"/notice/dingtalk.png","wechat-webapp":"/notice/wechat.png","internal-standalone":"/apply/internal-standalone.png","third-party":"/apply/third-party.png"},y=n=>{const o=w(n);return o.then(d=>{d.status===200&&(C("解绑成功","success"),l())}),o},m=n=>{window.open(`${S}/application/sso/${n}/login?autoCreateUser=false`),localStorage.setItem("onBind","false"),localStorage.setItem("onLogin","yes"),window.onstorage=o=>{o.newValue&&l()}};function l(){E().then(n=>{n.status===200&&(r.value=n.result.filter(o=>!o.features.includes("ssoUnsupportedRedirect")))})}return $(()=>{l()}),(n,o)=>{const d=j("Ellipsis"),k=I,x=L,B=V,v=A;return t(),c(v,{height:"calc(100% - 51px)"},{default:i(()=>[s("div",Z,[s("div",D,[p(r).length?(t(!0),a(M,{key:0},J(p(r),e=>{var u,h;return t(),a("div",{class:"content-item",key:e.id},[s("div",H,[s("img",{src:e.logoUrl||p(b)(f[e.provider]),style:{height:"24px",width:"24px"},alt:""},null,8,R),T(d,{style:{"max-width":"200px",color:"#333",margin:"0 8px 0 6px"}},{default:i(()=>[_(g(e==null?void 0:e.name),1)]),_:2},1024),s("div",null,[e.bound?(t(),a("span",X,"已绑定")):(t(),a("span",Y,"未绑定"))]),(u=e.others)!=null&&u.name?(t(),a("div",q,g((h=e.others)==null?void 0:h.name)+"（已绑定的用户名） ",1)):F("",!0)]),s("div",z,[e.bound?(t(),c(k,{key:0,popConfirm:{title:"确认解除绑定嘛?",onConfirm:()=>y(e.id)}},{default:i(()=>[_("解除绑定")]),_:2},1032,["popConfirm"])):(t(),c(x,{key:1,ghost:"",type:"primary",onClick:O=>m(e.id)},{default:i(()=>[_("立即绑定")]),_:2},1032,["onClick"]))])])}),128)):(t(),c(B,{key:1,style:{margin:"200px 0"}}))])])]),_:1},8,["height"])}}});const ee=N(G,[["__scopeId","data-v-be9926f6"]]);export{ee as default};