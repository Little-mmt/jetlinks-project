import{a4 as A,aC as z,I as ee,v as te,a6 as ne,a7 as oe,a8 as ae,cU as ie,C as re,aG as le,a9 as ue,F as se,d as ce,Z as de,aa as pe}from"./index-1731638920964.js";import"./index-1731638920964280.js";import"./index-1731638920964291.js";import"./index-1731638920964290.js";import{a as fe,u as me,_ as ge,b as ve}from"./collector-1731638920964.js";import{M as f,c as _e}from"./data-17316389209642.js";import{d as ye,k as y,w as D,U as m,V as g,X as l,f as r,E as R,u as t,Z as be,$ as we,Y as v,_ as Ce}from"./vue-1731638920964.js";const he={key:0,style:{color:"#616161"}},ke=Ce("span",{style:{"margin-right":"10px"}},"非标准协议写入配置",-1),Oe=ye({__name:"SaveModBus",props:{data:{type:Object,default:()=>{}}},emits:["change"],setup(B,{emit:I}){const p=B,b=y(!1),L=y([]),P=y([]),w=y(),C=p.data.id,x=p.data.collectorId,E=p.data.provider,F=p.data.pointKey,T={Coils:1,DiscreteInputs:10001,HoldingRegisters:40001,InputRegisters:30001},e=y({name:"",configuration:{function:void 0,interval:3e3,parameter:{quantity:1,writeByteCount:"",byteCount:2,address:""},codec:{provider:void 0,configuration:{scaleFactor:1,scale:void 0}}},pointKey:void 0,accessModes:[],nspwc:!1,features:[],description:""}),q=async()=>{var d;const o=await((d=w.value)==null?void 0:d.validate());o==null||delete o.nspwc;const{codec:n}=o==null?void 0:o.configuration;["HoldingRegisters","InputRegisters"].includes(o==null?void 0:o.configuration.function)||(n.provider="int8");const{interval:u}=e.value.configuration,a={...p.data,...o,provider:E,collectorId:x,interval:u};if(a.configuration.parameter={...a.configuration.parameter,address:o==null?void 0:o.pointKey},p.data.provider==="COLLECTOR_GATEWAY"){const s=A(a.configuration);a.configuration=s}b.value=!0;const c=C?await me(C,{...p.data,...a}).catch(()=>{}):await fe(a).catch(()=>{});I("change",(c==null?void 0:c.status)===200),b.value=!1},U=()=>{I("change",!1)},H=()=>{var u;const{configuration:o,nspwc:n}=e.value;o.function==="HoldingRegisters"&&((u=w.value)==null||u.validate()),n&&(o.parameter.byteCount=Number(o.parameter.quantity)*2)},G=o=>{const{configuration:n}=e.value;o&&(n.parameter.byteCount=Number(n.parameter.quantity||0)*2)},V=o=>{e.value.configuration.parameter.writeByteCount=o[0]},W=o=>{e.value.accessModes=["InputRegisters","DiscreteInputs"].includes(o)?["read"]:["read","write"]},Y=(o,n)=>new Promise(async(u,a)=>{if(n){const{quantity:c}=e.value.configuration.parameter;return _e[n]>Number(c)*2?a("数据类型长度需 <= 寄存器数量 * 2"):u("")}else return a("")}),J=(o,n)=>new Promise(async(u,a)=>{var c;if(n||Number(n)===0){if(Number(F)===Number(n)||typeof n=="object")return u("");const d=await ge(x,{pointKey:n});return(c=d.result)!=null&&c.passed?u(""):a(d.result.reason)}else return a("请输入地址")}),M=(o,n)=>n.label.toLowerCase().indexOf(o.toLowerCase())>=0;(async()=>{const o=await ve();L.value=o.result.filter(n=>n.id!=="property"&&n.id!=="bool").map(n=>({value:n.id,label:n.name})),O(e.value.configuration.function)})();const O=o=>{P.value=L.value};return D(()=>e.value.configuration.function,o=>{O()},{immediate:!0,deep:!0}),D(()=>p.data,o=>{var n,u,a,c,d;if(o.id&&["MODBUS_TCP","COLLECTOR_GATEWAY"].includes(o.provider)){const s=A(o),{writeByteCount:h,byteCount:k}=p.data.provider==="COLLECTOR_GATEWAY"&&((n=s.configuration)!=null&&n.configuration)?(u=s.configuration)==null?void 0:u.configuration.parameter:s.configuration.parameter;p.data.provider==="COLLECTOR_GATEWAY"?(a=s.configuration)!=null&&a.configuration?e.value={...z(s,["configuration"]),...s.configuration}:e.value={...s}:e.value=s,(c=s.accessModes[0])!=null&&c.value&&(e.value.accessModes=o.accessModes.map(_=>_.value)),(d=s.features[0])!=null&&d.value&&(e.value.features=o.features.map(_=>_.value)),e.value.nspwc=!!h||!!k}},{immediate:!0,deep:!0}),(o,n)=>{const u=ee,a=te,c=ne,d=oe,s=ae,h=ie,k=re,_=le,S=ue,$=se,Z=ce,Q=de,X=pe;return m(),g(X,{title:B.data.id?"编辑":"新增",visible:!0,width:"700px",onCancel:U},{footer:l(()=>[r(Z,{key:"back",onClick:U},{default:l(()=>[R("取消")]),_:1}),r(Q,{key:"submit",type:"primary",loading:t(b),onClick:q,style:{"margin-left":"8px"},hasPermission:`DataCollect/Collector:${t(C)?"update":"add"}`},{default:l(()=>[R(" 确认 ")]),_:1},8,["loading","hasPermission"])]),default:l(()=>[r($,{class:"form",layout:"vertical",model:t(e),name:"basic",autocomplete:"off",rules:t(f),ref_key:"formRef",ref:w},{default:l(()=>{var N,j,K;return[r(a,{label:"点位名称",name:"name"},{default:l(()=>[r(u,{placeholder:"请输入点位名称",value:t(e).name,"onUpdate:value":n[0]||(n[0]=i=>t(e).name=i)},null,8,["value"])]),_:1}),r(a,{label:"功能码",name:["configuration","function"],rules:t(f).function},{default:l(()=>[r(c,{style:{width:"100%"},value:t(e).configuration.function,"onUpdate:value":n[1]||(n[1]=i=>t(e).configuration.function=i),options:[{label:"01线圈寄存器",value:"Coils"},{label:"02离散输入寄存器",value:"DiscreteInputs"},{label:"03保存寄存器",value:"HoldingRegisters"},{label:"04输入寄存器",value:"InputRegisters"}],placeholder:"请选择所功能码",allowClear:"","show-search":"","filter-option":M,onChange:W},null,8,["value"])]),_:1},8,["rules"]),r(a,{label:"地址",name:["pointKey"],validateFirst:"",rules:[...t(f).pointKey,{validator:J,trigger:"blur"}]},{default:l(()=>[r(d,{style:{width:"100%"},placeholder:"请输入地址",value:t(e).pointKey,"onUpdate:value":n[2]||(n[2]=i=>t(e).pointKey=i),min:0,max:999999,precision:0},null,8,["value"])]),_:1},8,["rules"]),t(e).configuration.function?(m(),be("p",he," PLC地址: "+we(T[t(e).configuration.function]+Number(t(e).pointKey)||0),1)):v("",!0),r(a,{label:"寄存器数量",name:["configuration","parameter","quantity"],rules:t(f).quantity},{default:l(()=>[r(d,{style:{width:"100%"},placeholder:"请输入寄存器数量",value:t(e).configuration.parameter.quantity,"onUpdate:value":n[3]||(n[3]=i=>t(e).configuration.parameter.quantity=i),min:1,max:255,precision:0,onBlur:H},null,8,["value"])]),_:1},8,["rules"]),["HoldingRegisters","InputRegisters"].includes(t(e).configuration.function)?(m(),g(a,{key:1,label:"数据类型",name:["configuration","codec","provider"],rules:[...t(f).provider,{validator:Y,trigger:"change"}]},{default:l(()=>[r(c,{style:{width:"100%"},value:t(e).configuration.codec.provider,"onUpdate:value":n[4]||(n[4]=i=>t(e).configuration.codec.provider=i),options:t(P),placeholder:"请选择数据类型",allowClear:"","show-search":"","filter-option":M},null,8,["value","options"])]),_:1},8,["rules"])):v("",!0),r(a,{label:"缩放因子",name:["configuration","codec","configuration","scaleFactor"],rules:t(f).scaleFactor},{default:l(()=>[r(d,{style:{width:"100%"},placeholder:"请输入缩放因子",value:t(e).configuration.codec.configuration.scaleFactor,"onUpdate:value":n[5]||(n[5]=i=>t(e).configuration.codec.configuration.scaleFactor=i)},null,8,["value"])]),_:1},8,["rules"]),r(a,{label:"小数保留位数",name:["configuration","codec","configuration","scale"]},{default:l(()=>[r(d,{style:{width:"100%"},placeholder:"请输入小数保留位数",min:0,max:65535,precision:0,value:t(e).configuration.codec.configuration.scale,"onUpdate:value":n[6]||(n[6]=i=>t(e).configuration.codec.configuration.scale=i)},null,8,["value"])]),_:1}),t(e).configuration.function?(m(),g(a,{key:2,label:"访问类型",name:"accessModes"},{default:l(()=>[r(s,{multiple:"",showImage:!1,value:t(e).accessModes,"onUpdate:value":n[7]||(n[7]=i=>t(e).accessModes=i),options:t(e).configuration.function==="InputRegisters"||t(e).configuration.function==="DiscreteInputs"?[{label:"读",value:"read"}]:[{label:"读",value:"read"},{label:"写",value:"write"}],column:2},null,8,["value","options"])]),_:1})):v("",!0),(N=t(e).accessModes)!=null&&N.includes("write")&&t(e).configuration.function==="HoldingRegisters"?(m(),g(a,{key:3,name:["nspwc"]},{default:l(()=>[ke,r(h,{onChange:G,checked:t(e).nspwc,"onUpdate:checked":n[8]||(n[8]=i=>t(e).nspwc=i)},null,8,["checked"])]),_:1})):v("",!0),t(e).nspwc&&((j=t(e).accessModes)!=null&&j.includes("write"))&&t(e).configuration.function==="HoldingRegisters"?(m(),g(a,{key:4,label:"是否写入数据区长度",name:["configuration","parameter","writeByteCount"],rules:t(f).writeByteCount},{default:l(()=>[r(s,{showImage:!1,value:t(e).configuration.parameter.writeByteCount,"onUpdate:value":n[9]||(n[9]=i=>t(e).configuration.parameter.writeByteCount=i),options:[{label:"是",value:!0},{label:"否",value:!1}],onChange:V,column:2},null,8,["value"])]),_:1},8,["rules"])):v("",!0),t(e).nspwc&&((K=t(e).accessModes)!=null&&K.includes("write"))&&t(e).configuration.function==="HoldingRegisters"?(m(),g(a,{key:5,label:"自定义数据区长度（byte）",name:["configuration","parameter","byteCount"],rules:t(f).byteCount},{default:l(()=>[r(u,{placeholder:"请输入自定义数据区长度（byte）",value:t(e).configuration.parameter.byteCount,"onUpdate:value":n[10]||(n[10]=i=>t(e).configuration.parameter.byteCount=i)},null,8,["value"])]),_:1},8,["rules"])):v("",!0),r(a,{label:"采集频率",name:["configuration","interval"],rules:[...t(f).interval]},{default:l(()=>[r(d,{style:{width:"100%"},placeholder:"请输入采集频率",value:t(e).configuration.interval,"onUpdate:value":n[11]||(n[11]=i=>t(e).configuration.interval=i),"addon-after":"ms",max:2147483648,min:0},null,8,["value"])]),_:1},8,["rules"]),r(a,{label:"",name:["features"]},{default:l(()=>[r(_,{value:t(e).features,"onUpdate:value":n[12]||(n[12]=i=>t(e).features=i)},{default:l(()=>[r(k,{value:"changedOnly",name:"type"},{default:l(()=>[R("只推送变化的数据")]),_:1})]),_:1},8,["value"])]),_:1}),r(a,{label:"说明",name:["description"]},{default:l(()=>[r(S,{placeholder:"请输入说明",value:t(e).description,"onUpdate:value":n[13]||(n[13]=i=>t(e).description=i),maxlength:200,rows:3,showCount:""},null,8,["value"])]),_:1})]}),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{Oe as _};