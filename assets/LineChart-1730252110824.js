import{i,L as l}from"./index-1730252110824297.js";import{d as c,g as p,w as f,U as d,Z as h,q as m}from"./vue-1730252110824.js";import{g as _}from"./index-1730252110824.js";const y={class:"chart",ref:"chart"},u=c({__name:"LineChart",props:{color:{type:String,default:"#498BEF"},showX:{type:Boolean,default:!1},showY:{type:Boolean,default:!1},chartData:{type:Array,default:()=>[]}},setup(s){const e=s,{proxy:r}=p(),n=()=>{m(()=>{const a=i(r.$refs.chart),o={grid:{left:"5%",right:"5%",top:"5%",bottom:"5%"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{show:e.showX,boundaryGap:!1,data:e.chartData.map(t=>t.date)}],yAxis:[{show:e.showY,axisTick:{show:!1},axisLine:{show:!1},splitLine:{lineStyle:{type:"dotted"}}}],series:[{name:"流量消耗",type:"line",symbol:"circle",showSymbol:!1,smooth:!0,itemStyle:{normal:{color:e.color,lineStyle:{color:e.color,width:1},areaStyle:{color:new l(0,1,0,0,[{offset:.1,color:"#fff"},{offset:1,color:e.color}])}}},data:e.chartData.map(t=>t.value&&t.value.toFixed(2))}]};a.setOption(o),window.addEventListener("resize",function(){a.resize()})})};return f(()=>e.chartData,()=>n(),{immediate:!0,deep:!0}),(a,o)=>(d(),h("div",y,null,512))}});const b=_(u,[["__scopeId","data-v-35b9aebf"]]);export{b as default};