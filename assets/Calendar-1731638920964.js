import{g as J,g1 as L,au as u,cY as R,a6 as q,aK as E,fO as P,fN as Y,a7 as $,y as G,aa as K}from"./index-1731638920964.js";import"./index-1731638920964279.js";import{u as M}from"./useRequest-1731638920964.js";import X from"./index-1731638920964235.js";import{k as Z,r as z,w as Q,ab as W,U as _,Z as m,_ as s,f as o,X as r,E as f,F as h,a1 as ee,u as g,$ as ae,Y as H,G as te,d as oe,af as se,ag as ne}from"./vue-1731638920964.js";import"./index-1731638920964309.js";const y=i=>(se("data-v-a50e011c"),i=i(),ne(),i),le={class:"calendar-form-item-content"},ce={class:"header"},de={class:"calendar-items"},re={class:"calendar-item"},ie={class:"calendar-item-delete"},pe={class:"calendar-item-tags"},ue={class:"calendar-item-name"},_e={style:{flex:"1 1 0","min-width":"0"}},me={class:"calendar-item-content"},ve={class:"calendar-item-top"},fe={class:"calendar-item-bottom"},he=y(()=>s("div",null,"执行一次",-1)),ge=y(()=>s("span",null,"每",-1)),ye=y(()=>s("div",null," 正在预览日历 ",-1)),Ce=oe({name:"Calendar"}),be=Object.assign(Ce,{props:{value:{type:Object,default:()=>({})}},emits:["update:value","change"],setup(i,{emit:C}){const b=i,{data:k}=M(L),p=Z(!1),n=z({type:"or",spec:[]}),d=()=>{C("update:value",n),C("change",n)},U=()=>{p.value=!0},j=(l,a)=>{var c;return(c=a.name)==null?void 0:c.includes(l)},O=()=>{n.spec.push({trigger:"calender",scheduleTags:[],mod:"period",period:{from:u(new Date).startOf("day").format("HH:mm:ss"),to:u(new Date).endOf("day").format("HH:mm:ss"),every:1,unit:"seconds"}}),d()},x=l=>{n.spec.splice(l,1),d()},I=(l,a)=>{let c=l.target.value;c==="once"?(n.spec[a].once={time:u(new Date).format("HH:mm:ss")},delete n.spec[a].period):(n.spec[a].period={from:u(new Date).startOf("day").format("HH:mm:ss"),to:u(new Date).endOf("day").format("HH:mm:ss"),every:1,unit:"seconds"},delete n.spec[a].once),n.spec[a].mod=c,d()},T=(l,a)=>{n.spec[a].period.every=1,d()};return Q(()=>b.value,()=>{var l;n.spec=((l=b.value)==null?void 0:l.spec)||[]},{immediate:!0,deep:!0}),(l,a)=>{const c=R,D=W("AIcon"),w=q,N=E,S=P,V=Y,F=$,B=G,A=K;return _(),m("div",le,[s("div",ce,[o(c,{type:"link",onClick:U,style:{"padding-right":"2px"}},{default:r(()=>[f("预览日历")]),_:1})]),s("div",de,[o(B,{maxHeight:350},{default:r(()=>[(_(!0),m(h,null,ee(g(n).spec,(e,v)=>(_(),m("div",re,[s("div",ie,[o(D,{type:"DeleteOutlined",style:{},onClick:()=>x(v)},null,8,["onClick"])]),s("div",pe,[s("div",ue," 规则："+ae(v+1),1),s("div",_e,[o(w,{placeholder:"请选择日期类型",value:e.scheduleTags,"onUpdate:value":t=>e.scheduleTags=t,style:{width:"calc(100% - 30px)"},mode:"multiple",options:g(k),fieldNames:{label:"name",value:"id"},filterOption:j,onChange:d},null,8,["value","onUpdate:value","options"])])]),s("div",me,[s("div",ve,[s("div",null,[o(N,{value:e.mod,options:[{label:"周期执行",value:"period"},{label:"执行一次",value:"once"}],"option-type":"button","button-style":"solid",onChange:t=>I(t,v)},null,8,["value","onChange"])])]),s("div",fe,[e.mod==="once"?(_(),m(h,{key:0},[o(S,{valueFormat:"HH:mm:ss",value:e.once.time,"onUpdate:value":t=>e.once.time=t,style:{width:"180px"},format:"HH:mm:ss",onChange:d},null,8,["value","onUpdate:value"]),he],64)):H("",!0),e.mod==="period"?(_(),m(h,{key:1},[o(V,{valueFormat:"HH:mm:ss",value:[e.period.from,e.period.to],onChange:t=>{e.period.from=t[0],e.period.to=t[1],d()}},null,8,["value","onChange"]),ge,o(F,{placeholder:"请输入时间",style:{"max-width":"170px"},precision:0,min:1,max:e.period.unit==="hours"?99999:99,value:e.period.every,"onUpdate:value":t=>e.period.every=t,onChange:d},{addonAfter:r(()=>[o(w,{value:e.period.unit,"onUpdate:value":t=>e.period.unit=t,options:[{label:"秒",value:"seconds"},{label:"分",value:"minutes"},{label:"小时",value:"hours"}],onSelect:t=>T(t,v)},null,8,["value","onUpdate:value","onSelect"])]),_:2},1032,["max","value","onUpdate:value"])],64)):H("",!0)])])]))),256))]),_:1})]),o(c,{onClick:O,style:{width:"100%"}},{default:r(()=>[f(" 新增规则 ")]),_:1}),o(A,{visible:g(p),"onUpdate:visible":a[1]||(a[1]=e=>te(p)?p.value=e:null),width:1e3,okText:"关闭"},{footer:r(()=>[o(c,{type:"primary",onClick:a[0]||(a[0]=e=>p.value=!1)},{default:r(()=>[f(" 关闭 ")]),_:1})]),default:r(()=>[ye,o(X,{preview:!0})]),_:1},8,["visible"])])}}}),xe=J(be,[["__scopeId","data-v-a50e011c"]]);export{xe as default};