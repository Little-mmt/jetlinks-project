import{eM as A,d as j,e as B,A as M}from"./index-1730252110824.js";import{u as V}from"./instance-1730252110824.js";import{d as D,k as r,w as N,ab as h,U as m,V as _,X as s,_ as v,f as l,E as d,u as f}from"./vue-1730252110824.js";const E={style:{position:"relative"}},J={style:{position:"absolute",right:"0",top:"5px","z-index":"999"}},z=D({__name:"PropertyAMap",props:{data:{type:Object,default:()=>{}},time:{type:Array,default:()=>[]}},setup(g){const e=g,k=V(),n=r(!1),y=r([]),c=r(!1),o=r(),C=()=>{var t;(t=o.value)==null||t.start(),n.value=!1},x=()=>{var t;(t=o.value)==null||t.pause(),n.value=!0},S=()=>{var t;(t=o.value)==null||t.resume(),n.value=!1},P=async()=>{var u,a;c.value=!0;const t=await A(k.current.id,e.data.id,{paging:!1,sorts:[{name:"timestamp",value:"asc"}],terms:[{terms:[{column:"timestamp",termType:"btw",value:e.time[0]&&e.time[1]?e.time:[]}]}]}).finally(()=>{c.value=!1});if(t.status===200){const p=[];(((u=t.result)==null?void 0:u.data)||[]).forEach(i=>{p.push([i.value.lon,i.value.lat])}),y.value=[{name:(a=e==null?void 0:e.data)==null?void 0:a.name,path:p}]}};return N(()=>[e.data.id,e.time],([t])=>{t&&P()},{deep:!0,immediate:!0}),(t,u)=>{const a=j,p=B,i=h("PathSimplifier"),b=h("AMapComponent"),w=M;return m(),_(w,{spinning:f(c)},{default:s(()=>[v("div",E,[v("div",J,[l(p,null,{default:s(()=>[l(a,{type:"primary",onClick:C},{default:s(()=>[d("开始动画")]),_:1}),f(n)?(m(),_(a,{key:1,type:"primary",onClick:S},{default:s(()=>[d("继续动画")]),_:1})):(m(),_(a,{key:0,type:"primary",onClick:x},{default:s(()=>[d("暂停动画")]),_:1}))]),_:1})])]),l(b,{style:{height:"500px"}},{default:s(()=>[l(i,{pathData:f(y),ref_key:"amapPath",ref:o},null,8,["pathData"])]),_:1})]),_:1},8,["spinning"])}}});export{z as _};