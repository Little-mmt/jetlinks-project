import{I as O,v as V,aD as E,a6 as F,d as A,aT as L,F as S,gb as z,g as P}from"./index-1731638920964.js";import"./index-1731638920964282.js";import"./index-1731638920964279.js";import"./index-1731638920964280.js";import"./index-1731638920964281.js";import{d as Y,k as g,e as $,w as I,ab as G,U as o,Z as R,f as _,X as s,u as c,V as p,F as J,a1 as K,E as x,$ as X,Y as b,G as Z}from"./vue-1731638920964.js";const H={class:"request-table-container"},M=Y({__name:"RequestTable",props:{value:{},valueType:{default:"input"},valueOptions:{},valid:{type:Boolean}},emits:["update:value","update:valid"],setup(D,{emit:m}){const a=D,T=[{title:"KEY",dataIndex:"label",key:"label",width:"40%"},{title:"VALUE",dataIndex:"value",key:"value",width:"40%"},{title:" ",dataIndex:"action",key:"action",width:"20%"}],t=g(1),r=g({tableData:$(()=>a.value.slice((t.value-1)*10,t.value*10))}),y=g();I(()=>r.value,l=>{var v;(v=y.value)==null||v.validate();const e=r.value.tableData.every(i=>i.label&&i.value||!i.label&&!i.value);m("update:valid",e)},{deep:!0}),a.value.length<1&&h(),I(()=>a.value,(l,e)=>{!e||l.length===e.length||(l.length>e.length?e.length%10===0&&l.length>10&&(t.value=t.value+1):e.length%10===1&&e.length>10&&(t.value=t.value-1))},{immediate:!0});function U(l){const e=a.value.slice(0,l++),v=a.value.slice(l,a.value.length);m("update:value",[...e,...v])}function h(){const l={label:"",value:""};m("update:value",[...a.value,l])}return(l,e)=>{const v=O,i=V,C=E,j=F,k=G("AIcon"),w=A,q=L,N=S,B=z;return o(),R("div",H,[_(N,{ref_key:"formRef",ref:y,model:c(r),layout:"vertical"},{default:s(()=>[_(q,{columns:T,"data-source":c(r).tableData,pagination:!1,size:"small",bordered:""},{bodyCell:s(({column:d,record:n,index:f})=>[d.dataIndex==="label"?(o(),p(i,{key:0,name:["tableData",f+(c(t)-1)*10,"label"],rules:[{required:!!n.label&&!!n.value,message:"该字段为必填字段",trigger:"change"}]},{default:s(()=>[_(v,{value:n.label,"onUpdate:value":u=>n.label=u},null,8,["value","onUpdate:value"])]),_:2},1032,["name","rules"])):d.dataIndex==="value"?(o(),p(i,{key:1,name:["tableData",f+(c(t)-1)*10,"value"],rules:[{required:!!n.value&&!!n.label,message:"该字段为必填字段",trigger:"change"}]},{default:s(()=>[a.valueType==="input"?(o(),p(v,{key:0,value:n.value,"onUpdate:value":u=>n.value=u},null,8,["value","onUpdate:value"])):a.valueType==="select"?(o(),p(j,{key:1,value:n.value,"onUpdate:value":u=>n.value=u},{default:s(()=>[(o(!0),R(J,null,K(a.valueOptions,u=>(o(),p(C,{value:u.value},{default:s(()=>[x(X(u.label),1)]),_:2},1032,["value"]))),256))]),_:2},1032,["value","onUpdate:value"])):b("",!0)]),_:2},1032,["name","rules"])):d.dataIndex==="action"?(o(),p(w,{key:2,type:"link",onClick:u=>U((c(t)-1)*10+f)},{default:s(()=>[_(k,{type:"DeleteOutlined"})]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["data-source"])]),_:1},8,["model"]),a.value.length>10?(o(),p(B,{key:0,pageNum:c(t),"onUpdate:pageNum":e[0]||(e[0]=d=>Z(t)?t.value=d:null),pageSize:10,total:a.value.length},null,8,["pageNum","total"])):b("",!0),_(w,{type:"dashed",onClick:h,class:"add-btn"},{default:s(()=>[_(k,{type:"PlusOutlined"}),x("新增 ")]),_:1})])}}});const ne=P(M,[["__scopeId","data-v-da90a6c0"]]);export{ne as default};