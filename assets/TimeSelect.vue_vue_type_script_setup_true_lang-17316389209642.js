import{au as e,aJ as O,aK as b,dr as h}from"./index-1731638920964.js";import"./index-1731638920964279.js";import{d as B,k as f,q as D,U as r,Z as m,V as i,X as v,F as H,a1 as w,E as C,$ as M,u as y,G as p,Y as T,f as x}from"./vue-1731638920964.js";const L=B({__name:"TimeSelect",props:{quickBtn:{type:Boolean,default:!0},quickBtnList:{type:Array,default:[{label:"今日",value:"today"},{label:"近一周",value:"week"},{label:"近一月",value:"month"},{label:"近一年",value:"year"}]},type:{type:String,default:"today"}},emits:["change"],setup(o,{emit:d}){const u=f(o.type||"week"),l=f(),g=t=>{u.value=void 0;const a=e(t[1]).valueOf()-e(t[0]).valueOf();d("change",{start:e(t[0]).valueOf(),end:e(t[1]).valueOf(),type:a>24*60*60*1e3?void 0:"day"})},_=t=>{switch(t){case"hour":return e().subtract(1,"hours").valueOf();case"week":return e().subtract(6,"days").valueOf();case"month":return e().subtract(29,"days").valueOf();case"year":return e().subtract(365,"days").valueOf();default:return e().startOf("day").valueOf()}},c=t=>{let a=e(new Date).valueOf(),s=_(t);t==="yesterday"&&(s=e().subtract(1,"days").startOf("day").valueOf(),a=e().subtract(1,"days").endOf("day").valueOf()),l.value=[e(s).format("YYYY-MM-DD HH:mm:ss"),e(a).format("YYYY-MM-DD HH:mm:ss")],console.log(s,a),d("change",{start:s,end:a,type:t})};return D(()=>{c(u.value)}),(t,a)=>{const s=O,Y=b,k=h;return r(),m("div",null,[o.quickBtn?(r(),i(Y,{key:0,"default-value":"today","button-style":"solid",value:y(u),"onUpdate:value":a[0]||(a[0]=n=>p(u)?u.value=n:null),onChange:a[1]||(a[1]=n=>c(n.target.value))},{default:v(()=>[(r(!0),m(H,null,w(o.quickBtnList,n=>(r(),i(s,{key:n.value,value:n.value},{default:v(()=>[C(M(n.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])):T("",!0),x(k,{format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss","show-time":{format:"HH:mm:ss"},style:{"margin-left":"12px"},onChange:g,value:y(l),"onUpdate:value":a[2]||(a[2]=n=>p(l)?l.value=n:null),allowClear:!1},null,8,["value"])])}}});export{L as _};