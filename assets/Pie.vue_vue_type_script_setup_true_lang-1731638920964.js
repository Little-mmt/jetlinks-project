import{i as n}from"./index-1731638920964297.js";import{d as c,g as l,e as u,k as f,w as m,t as p,q as v,U as d,Z as h}from"./vue-1731638920964.js";const A=c({__name:"Pie",props:{chartRef:String,value:Number,image:String,colorArr:Array},setup(i){const e=i,{proxy:r}=l(),a=u(()=>({color:e.colorArr||["#D3ADF7","#979AFF"],graphic:[{type:"image",style:{image:e.image||"",width:16,height:16},left:"center",top:"41%"}],series:[{type:"pie",radius:["100%","60%"],center:["50%","50%"],label:{show:!1},data:[100-(e.value||0),e.value],itemStyle:{borderColor:"#fff",borderWidth:2}}]})),t=f();m(a,()=>{t.value?t.value.setOption(a.value):s()}),p(()=>{window.removeEventListener("resize",o)});const o=()=>{t.value&&t.value.resize()},s=()=>{v(()=>{t.value=n(r==null?void 0:r.$refs[e.chartRef]),t.value.setOption(a.value),window.addEventListener("resize",o)})};return s(),(g,w)=>(d(),h("div",{ref:e.chartRef},null,512))}});export{A as _};