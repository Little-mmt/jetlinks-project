import{$ as p,ds as f,g as m}from"./index-1731638920964.js";import{d as v,ab as y,U as o,Z as n,_ as t,$ as a,V as c,X as l,f as g,Y as h,F as d,a1 as C}from"./vue-1731638920964.js";const k={class:"top-card"},x={class:"top-card-content"},B={class:"content-left"},N={class:"content-left-title"},S={class:"content-left-value"},T={class:"content-right"},V=["src"],b={class:"top-card-footer"},A={key:0},I={class:"footer-item-value"},j=v({__name:"TopCard",props:{title:{type:String,default:""},tooltip:{type:String,default:""},img:{type:String,default:""},footer:{type:Array,default:""},value:{type:Number,default:0}},setup(e){return(F,$)=>{const i=y("AIcon"),r=p,_=f;return o(),n("div",k,[t("div",x,[t("div",B,[t("div",N,[t("span",null,a(e.title),1),e.tooltip?(o(),c(r,{key:0,placement:"top"},{title:l(()=>[t("span",null,a(e.tooltip),1)]),default:l(()=>[g(i,{type:"QuestionCircleOutlined"})]),_:1})):h("",!0)]),t("div",S,a(e.value),1)]),t("div",T,[t("img",{src:e.img,alt:""},null,8,V)])]),t("div",b,[(o(!0),n(d,null,C(e.footer,(s,u)=>(o(),n(d,{key:u},[s.status?(o(),c(_,{key:1,text:s.title,status:s.status},null,8,["text","status"])):(o(),n("span",A,a(s.title),1)),t("div",I,a(s.value),1)],64))),128))])])}}});const E=m(j,[["__scopeId","data-v-543e9559"]]);export{E as default};
