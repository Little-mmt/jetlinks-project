import{i as d}from"./index-1730252110824297.js";import{f as m}from"./tool-1730252110824.js";import{g as c}from"./index-1730252110824.js";import{U as h,Z as n,_ as i,$ as a,Y as l}from"./vue-1730252110824.js";const u={name:"TopEchartsItemNode",props:{title:{type:String,default:""},value:{type:Number,default:0},max:{type:Number,default:0},bottom:{type:String,default:""},formatter:{type:String,default:"%"}},data(){return{options:{},myChart:void 0}},beforeDestroy(){window.removeEventListener("resize",this.resize)},methods:{createChart(t){const s=this.$refs.chartRef;s&&Object.keys(t).length>0&&!this.myChart?(console.log("createChart"),this.myChart=d(s),this.myChart.setOption(t),window.addEventListener("resize",this.resize)):this.myChart&&this.myChart.setOption(t)},resize(){var t;(t=this.myChart)==null||t.resize()},getOptions(t,s,e){let r=0;this.options={series:[{...m,max:t||100,axisLabel:{distance:-22,color:"auto",fontSize:12,width:30,padding:[6,10,0,10],formatter:o=>(r+=1,[1,3,6,9,11].includes(r)?o+(s||"%"):"")},data:[{value:e||0}]}]}}},watch:{options:{handler(t){this.createChart(t)},immediate:!0,deep:!0},max:{handler(t){this.getOptions(t,this.formatter,this.value)},immediate:!0,deep:!0},value:{handler(t){this.getOptions(this.max,this.formatter,t)},immediate:!0,deep:!0},formatter:{handler(t){this.getOptions(this.max,t,this.value)},immediate:!0,deep:!0}}},f={class:"echarts-item"},_={class:"echarts-item-left"},p={class:"echarts-item-title"},y={class:"echarts-item-value"},v={key:0,class:"echarts-item-bottom"},g={class:"echarts-item-right"},C={ref:"chartRef",style:{width:"100%",height:"100px"}};function x(t,s,e,r,o,b){return h(),n("div",f,[i("div",_,[i("div",p,a(e.title),1),i("div",y,a(e.value||0)+" "+a(e.formatter||"%"),1),e.bottom?(h(),n("div",v,a(e.bottom),1)):l("",!0)]),i("div",g,[i("div",C,null,512)])])}const E=c(u,[["render",x],["__scopeId","data-v-03f5a443"]]);export{E as default};