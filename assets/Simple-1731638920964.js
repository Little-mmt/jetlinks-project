import{d as G,ac as P,k as g,e as N,ab as X,U as c,Z as k,_ as d,f as s,X as o,F,a1 as Y,u as v,V as S,E as I,$ as j,Y as w,G as Z,af as H,ag as W}from"./vue-1731638920964.js";import{eb as ee,o as te,e as ae,$ as oe,dw as se,v as le,aT as ne,F as ue,d as pe,a0 as ie,a1 as de,_ as _e,f as re,g as ce}from"./index-1731638920964.js";import"./index-1731638920964282.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import{u as me}from"./instance-1731638920964.js";import{i as ve}from"./isNil-1731638920964.js";const R=f=>(H("data-v-d13e4483"),f=f(),W(),f),fe={class:"simple-wrapper"},ye={class:"tips"},be=R(()=>d("span",null,"精简模式下参数只支持输入框的方式录入",-1)),xe={style:{"max-width":"150px"},class:"tabTitle"},he=R(()=>d("template",{slot:"title"},[I(" 请按照json格式输入 ")],-1)),Te={class:"editor-btn"},ge=R(()=>d("h4",null,"执行结果：",-1)),je=G({__name:"Simple",setup(f){const B=me(),E=P(),C=g(""),y=g(!1),U=N(()=>JSON.parse(B.detail.metadata)),q=g([{title:"参数名称",dataIndex:"name",width:150,ellipsis:!0},{title:"输入类型",dataIndex:"type",width:150},{title:"值",dataIndex:"value"}]),b=g(""),x={},V=N({get(){var a;const t=[];return(a=U.value.functions)==null||a.forEach(l=>{var u,h;const n=[],_=l.inputs||l.properties;for(const e of _){const m=e.valueType?e.valueType.type:"-";m==="boolean"&&(e.valueType.elements=[{text:e.valueType.trueText,value:String(e.valueType.trueValue)},{text:e.valueType.falseText,value:String(e.valueType.falseValue)}]),n.push({id:e.id,name:e.name,type:m,format:e.valueType?e.valueType.format:void 0,options:e.valueType?e.valueType.elements:void 0,json:m==="object"?(u=e.json)==null?void 0:u.properties[0]:void 0,value:void 0,required:(h=e.expands)==null?void 0:h.required})}t.push({...l,table:n,executeResult:""})}),t},set(t){return t}}),O=async t=>{x[t.id].validate().then(async()=>{var _;const a={};t.table.forEach(u=>{u.type==="object"&&u.value?a[u.id]=JSON.parse(u.value):ve(u.value)||(a[u.id]=u.value)}),y.value=!0;const{success:l,result:n}=await ee(E.params.id,t.id,a).catch(()=>{y.value=!1}).finally(()=>{y.value=!1});l&&(te("操作成功"),b.value=n instanceof Array?n[0]:n,(_=x[t.id])==null||_.$forceUpdate())}).catch(a=>{console.log("err: ",a)})},A=t=>{var a;V.value=V.value.map(l=>(l.id===t.id&&(l.table=l.table.map(n=>(n.value=void 0,n))),l)),b.value="",(a=x[t.id])==null||a.resetFields()},L=t=>{b.value=""},M=(t,a)=>{x[a.id]=t};return(t,a)=>{const l=X("AIcon"),n=ae,_=oe,u=se,h=le,e=ne,m=ue,$=pe,J=ie,D=de,K=_e,Q=re;return c(),k("div",fe,[d("div",ye,[s(n,null,{default:o(()=>[s(l,{type:"QuestionCircleOutlined"}),be]),_:1})]),s(Q,{modelValue:v(C),"onUpdate:modelValue":a[0]||(a[0]=p=>Z(C)?C.value=p:null),"tab-position":"left",onChange:L,destroyInactiveTabPane:!0},{default:o(()=>[(c(!0),k(F,null,Y(v(V),p=>(c(),S(K,{key:p.id},{tab:o(()=>[s(_,null,{title:o(()=>[I(j(p.name),1)]),default:o(()=>[d("div",xe,j(p.name),1)]),_:2},1024)]),default:o(()=>[s(D,{gutter:30},{default:o(()=>[s(J,{span:15},{default:o(()=>[s(m,{ref_for:!0,ref:r=>M(r,p),model:p},{default:o(()=>[s(e,{columns:v(q),"data-source":p.table,pagination:!1,rowKey:"id"},{bodyCell:o(({column:r,record:i,index:z})=>[r.dataIndex==="type"?(c(),k(F,{key:0},[d("span",null,j(i.type),1),i.type==="object"?(c(),S(_,{key:0},{default:o(()=>[he,s(l,{type:"QuestionCircleOutlined",style:{marginLeft:"5px",cursor:"help"}})]),_:1})):w("",!0)],64)):w("",!0),r.dataIndex==="value"?(c(),S(h,{key:1,name:["table",z,"value"],rules:{required:i.required,message:"该字段为必填字段"},"has-feedback":""},{default:o(()=>[s(u,{ref_for:!0,ref:`valueItemRef${i.id}`,modelValue:i.value,"onUpdate:modelValue":T=>i.value=T,itemType:i.type,options:((i==null?void 0:i.options)||[]).map(T=>({label:T.text,value:T.value})),extra:{style:{zIndex:1030}}},null,8,["modelValue","onUpdate:modelValue","itemType","options"])]),_:2},1032,["name","rules"])):w("",!0)]),_:2},1032,["columns","data-source"])]),_:2},1032,["model"]),d("div",Te,[s(n,null,{default:o(()=>[s($,{type:"primary",loading:v(y),onClick:r=>O(p)},{default:o(()=>[I(" 执行 ")]),_:2},1032,["loading","onClick"]),s($,{type:"default",onClick:r=>A(p)},{default:o(()=>[I(" 清空 ")]),_:2},1032,["onClick"])]),_:2},1024)])]),_:2},1024),s(J,{span:9},{default:o(()=>[ge,d("span",{ref_for:!0,ref:`result${p.id}Ref`,class:"execute-result"},j(v(b)||""),513)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["modelValue"])])}}});const Je=ce(je,[["__scopeId","data-v-d13e4483"]]);export{Je as default};