import{ay as C,au as c,aJ as k,aK as S,dr as D,A as j,g as T}from"./index-1731638920964.js";import"./index-1731638920964279.js";import{i as I}from"./index-1731638920964297.js";import{d as O,k as v,w as M,ab as b,U as P,V as A,X as i,f as l,_ as p,u as f,E as g,q,af as N,ag as B}from"./vue-1731638920964.js";const et=(t,a)=>C.post(`/data-collect/${t}/_count`,a),V=t=>C.post("/dashboard/_multi",t),Y=t=>{switch(t.type){case"today":return{limit:24,interval:"1h",format:"YYYY-MM-dd HH:mm"};case"week":return{limit:7,interval:"1d",format:"YYYY-MM-dd"};case"hour":return{limit:60,interval:"1m",format:"YYYY-MM-dd HH:mm"};default:const a=t.time[1]-t.time[0],n=60*60*1e3,o=n*24;return a<=n?{limit:Math.abs(Math.ceil(a/(60*60))),interval:"1m",format:"YYYY-MM-dd HH:mm"}:a>n&&a<=o?{limit:Math.abs(Math.ceil(a/n)),interval:"1h",format:"YYYY-MM-dd HH:mm"}:a>o&&a<=o*7?{limit:Math.abs(Math.ceil(a/o))+1,interval:"1d",format:"YYYY-MM-dd"}:a>o*90?{limit:Math.abs(Math.ceil(a/o/30))+1,interval:"1M",format:"YYYY-MM-dd HH:mm"}:{limit:Math.abs(Math.ceil(a/o))+1,interval:"1d",format:"YYYY-MM-dd"}}},z=t=>{switch(t){case"hour":return c().subtract(1,"hours");case"week":return c().subtract(6,"days");case"month":return c().subtract(29,"days");case"year":return c().subtract(365,"days");default:return c().startOf("day")}},E=t=>[{dashboard:"collector",object:"pointData",measurement:"quantity",dimension:"agg",params:{limit:Y(t.time).limit,from:Number(t.time.time[0]),to:Number(t.time.time[1]),interval:Y(t.time).interval,format:Y(t.time).format}}],R={type:"line",smooth:!0,color:"#60DFC7",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#60DFC7"},{offset:1,color:"#FFFFFF"}],global:!1}}},at={terms:[{column:"runningState",termType:"not",value:"running"}]},ot=[[{type:"channel",title:"异常通道",status:"error",label:"通道数量",value:0,total:0,permission:"DataCollect/Channel"}],[{type:"collector",title:"异常采集器",status:"error",label:"采集器数量",value:0,total:0,permission:"DataCollect/Collector"}],[{type:"point",title:"异常点位",status:"error",label:"采集点位",value:0,total:0,permission:"DataCollect/Collector"}]],U=t=>(N("data-v-fed2ac7a"),t=t(),B(),t),$={class:"dash-board"},G={class:"header"},J=U(()=>p("div",{class:"left"},[p("h3",{style:{width:"100px"}},"点位数据量")],-1)),K={class:"right"},L=O({__name:"Card",setup(t){const a=v({}),n=v(!1),o=v({time:{type:"hour",time:[null,null]}}),x=()=>{o.value.time.type=void 0},w=async s=>{var r;n.value=!0;const e=await V(E(s));if(e.success&&((r=e==null?void 0:e.result)!=null&&r.length)){const m=e.result.map(d=>d.data.timeString).reverse(),u=e.result.map(d=>d.data.value).reverse();H(m,u)}setTimeout(()=>{n.value=!1},300)},H=(s=[],e=[])=>{var m;const r=a.value;if(r){const u=I(r),h=(m=[...e].sort((_,F)=>F-_))==null?void 0:m[0],y={xAxis:{type:"category",boundaryGap:!1,data:s},yAxis:{type:"value"},grid:{left:h<1e3?60:h.toString().length*10,right:"60px"},tooltip:{trigger:"axis"},color:["#979AFF"],series:[{name:"消息量",data:e,...R}]};q(()=>{u.setOption(y),window.addEventListener("resize",function(){u.resize()})})}};return M(()=>o.value.time.type,s=>{if(s===void 0)return;const e=z(s);o.value.time.time=[c(e),c(new Date)]},{immediate:!0,deep:!0}),M(()=>o.value,s=>{const{time:e}=s;(e.type||e.time[0]&&e.time[1])&&w(s)},{immediate:!0,deep:!0}),(s,e)=>{const r=k,m=S,u=b("AIcon"),d=D,h=b("FullPage"),y=j;return P(),A(y,{spinning:f(n)},{default:i(()=>[l(h,null,{default:i(()=>[p("div",$,[p("div",G,[J,p("div",K,[l(m,{"button-style":"solid",style:{"margin-right":"10px"},value:f(o).time.type,"onUpdate:value":e[0]||(e[0]=_=>f(o).time.type=_)},{default:i(()=>[l(r,{value:"hour"},{default:i(()=>[g(" 最近1小时 ")]),_:1}),l(r,{value:"today"},{default:i(()=>[g(" 今日 ")]),_:1}),l(r,{value:"week"},{default:i(()=>[g(" 近一周 ")]),_:1})]),_:1},8,["value"]),l(d,{allowClear:!1,"show-time":{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",value:f(o).time.time,"onUpdate:value":e[1]||(e[1]=_=>f(o).time.time=_),onChange:x},{suffixIcon:i(()=>[l(u,{type:"CalendarOutlined"})]),_:1},8,["value"])])]),p("div",{ref_key:"chartRef",ref:a,style:{width:"100%","min-height":"350px"}},null,512)])]),_:1})]),_:1},8,["spinning"])}}});const X=T(L,[["__scopeId","data-v-fed2ac7a"]]),st=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{X as C,st as a,at as d,et as q,ot as s};