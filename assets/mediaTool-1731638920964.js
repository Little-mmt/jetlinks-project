import{d as u,ab as l,U as p,Z as r,_ as n,f as d,R as M}from"./vue-1731638920964.js";import{g as v}from"./index-1731638920964.js";const a={class:"live-player-tools"},_={class:"direction"},O={class:"direction-icon"},w={class:"direction-icon"},m={class:"direction-icon"},U={class:"direction-icon"},$={class:"direction-audio"},f={class:"zoom"},D=u({__name:"mediaTool",emits:["onMouseDown","onMouseUp"],setup(y,{emit:e}){return(i,o)=>{const t=l("AIcon");return p(),r("div",a,[n("div",_,[n("div",{class:"direction-item up",onMousedown:o[0]||(o[0]=s=>e("onMouseDown","UP")),onMouseup:o[1]||(o[1]=s=>e("onMouseUp","UP"))},[n("div",O,[d(t,{type:"CaretUpOutlined"})])],32),n("div",{class:"direction-item right",onMousedown:o[2]||(o[2]=s=>e("onMouseDown","RIGHT")),onMouseup:o[3]||(o[3]=s=>e("onMouseUp","RIGHT"))},[n("div",w,[d(t,{type:"CaretRightOutlined"})])],32),n("div",{class:"direction-item left",onMousedown:o[4]||(o[4]=s=>e("onMouseDown","LEFT")),onMouseup:o[5]||(o[5]=s=>e("onMouseUp","LEFT"))},[n("div",m,[d(t,{type:"CaretLeftOutlined"})])],32),n("div",{class:"direction-item down",onMousedown:o[6]||(o[6]=s=>e("onMouseDown","DOWN")),onMouseup:o[7]||(o[7]=s=>e("onMouseUp","DOWN"))},[n("div",U,[d(t,{type:"CaretDownOutlined"})])],32),n("div",$,[M(i.$slots,"center",{},void 0,!0)])]),n("div",f,[n("div",{class:"zoom-item zoom-in",onMousedown:o[8]||(o[8]=s=>e("onMouseDown","ZOOM_IN")),onMouseup:o[9]||(o[9]=s=>e("onMouseUp","ZOOM_IN"))},[d(t,{type:"PlusOutlined"})],32),n("div",{class:"zoom-item zoom-out",onMousedown:o[10]||(o[10]=s=>e("onMouseDown","ZOOM_OUT")),onMouseup:o[11]||(o[11]=s=>e("onMouseUp","ZOOM_OUT"))},[d(t,{type:"MinusOutlined"})],32)])])}}});const I=v(D,[["__scopeId","data-v-f98d05d1"]]);export{I as M};