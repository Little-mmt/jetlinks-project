import{d as J,ai as le,r as se,k as f,c as ne,w as ue,e as z,s as oe,q as E,ab as re,U as h,Z as C,f as w,u as s,Y as D,_ as L,V as F,X as ce,B as me}from"./vue-1731638920964.js";import{F as ie,cK as ve,b4 as pe,a5 as $,bR as de,aO as ye}from"./index-1731638920964.js";import M from"./DropdownButton-1731638920964.js";import"./Menus-1731638920964.js";import"./Time.vue_vue_type_style_index_0_lang-1731638920964.js";import{g as fe}from"./util-17316389209643.js";import he from"./index-1731638920964223.js";import be from"./Array-1731638920964.js";import{_ as we}from"./Double.vue_vue_type_script_setup_true_name_DoubleParamsDropdown_lang-1731638920964.js";import{C as Te,t as S,d as ge,a as N}from"./util-17316389209645.js";import{u as Ne}from"./scene-17316389209642.js";const ke={class:"terms-params-item"},Oe={key:0,class:"term-type-warp"},Ce={key:0,style:{display:"flex"}},Se=["onClick"],_e={class:"terms-content"},xe=J({name:"ParamsItem"}),Re=J({...xe,props:{isFirst:{type:Boolean,default:!0},isLast:{type:Boolean,default:!0},showDeleteBtn:{type:Boolean,default:!0},name:{type:Number,default:0},termsName:{type:Number,default:0},branchName:{type:Number,default:0},whenName:{type:Number,default:0},branches_Index:{type:Number,default:0},value:{type:Object,default:()=>({column:"",type:"",termType:"eq",value:{source:"manual",value:void 0}})}},emits:["update:value"],setup(_,{emit:b}){var j,P,K,R;const n=_,X=Ne(),{data:v}=le(X),T=ie.useInjectFormItemContext(),e=se({column:(j=n.value)==null?void 0:j.column,type:(P=n.value)==null?void 0:P.type,termType:(K=n.value)==null?void 0:K.termType,value:(R=n.value)==null?void 0:R.value,metric:void 0}),x=f(!1),I=ne(Te),U=f(),V=f([]),d=f([]),p=f([]),g=f(!1),m=f([{label:"手动输入",key:"manual",component:"string"}]),y=f([]),A=a=>{var t,o,u;if(a)if(V.value=a.termTypes||[],y.value=((t=a.metrics)==null?void 0:t.map(l=>({...l,label:l.name})))||[],m.value.length=1,m.value[0].component=a.dataType,U.value=a.dataType,a.metrics&&a.metrics.length?(m.value.push({label:"指标值",key:"metric",component:"select"}),g.value=!0):g.value=!1,a.dataType==="boolean"){const l=a.options||a.others;if(pe(l)){const c=l==null?void 0:l.bool;d.value=[{label:c.falseText,value:String(c.falseValue)},{label:c.trueText,value:String(c.trueValue)}]}else d.value=((o=a.options)==null?void 0:o.map(c=>({...c,label:c.name,value:c.id})))||[{label:"是",value:"true"},{label:"否",value:"false"}]}else a.dataType==="enum"?d.value=((u=a.options)==null?void 0:u.map(l=>({...l,label:l.name,value:l.id})))||[]:d.value=(a.options||[]).map(l=>({...l,label:l.name,value:l.id}));else V.value=[],y.value=[],d.value=[]};ue(()=>JSON.stringify(I.value),()=>{if(e.column){const a=fe(I.value,e.column,"column"),t=n.value;a&&Object.keys(a).length?(A(a),t.error&&(t.error=!1,b("update:value",t),T.onFieldChange())):(t.error=!0,b("update:value",t),T.onFieldChange()),(a==null?void 0:a.dataType)==="date"&&(S.includes(e.termType||"")?(m.value[0].component,m.value[0].component="int"):!S.includes(e.termType||"")&&m.value[0].component=="int"&&(m.value[0].component="date"))}},{immediate:!0});const Y=z(()=>{var o;const a=e.termType?ge.includes(e.termType):!1,t=((o=e.value)==null?void 0:o.source)==="metric";return y.value.length?p.value=y.value.filter(u=>a?u.range:!u.range):p.value=[],a?g.value?!t:!0:!1}),Z=z(()=>{var o;const a=e.termType?N.includes(e.termType):!1,t=((o=e.value)==null?void 0:o.source)==="metric";return y.value.length?p.value=y.value.filter(u=>a?u.range:!u.range):p.value=[],a?g.value?!t:!0:!1}),G=()=>{n.showDeleteBtn&&(x.value=!0)},H=()=>{n.showDeleteBtn&&(x.value=!1)},Q=a=>{var c,r;const o=a.dataType!==m.value[0].component;let u=!1;const l=a.termTypes;if(l.some(i=>e.termType===i.id)||(u=!0,e.termType=l!=null&&l.length?l[0].id:"eq"),o||!m.value.every(i=>i.key===e.value.source))e.termType=l!=null&&l.length?l[0].id:"eq",e.value={source:m.value[0].key,value:void 0};else if(u){const i=$(e.value.value)?e.value.value[0]:e.value.value,k=N.includes(e.termType)?[i,void 0]:i,O=((c=e.value)==null?void 0:c.source)||m.value[0].key,q={source:O,value:k};O==="metric"&&(q.metric=(r=e.value)==null?void 0:r.metric),e.value=q}A(a),b("update:value",{...e}),E(()=>{T.onFieldChange()}),v.value.options.when[n.branches_Index].terms[n.whenName].terms[n.termsName][0]=a.name||a.fullName,v.value.options.when[n.branches_Index].terms[n.whenName].terms[n.termsName][1]=e.termType},W=a=>{var c,r,i,k;const t=$(e.value.value)?e.value.value[0]:e.value.value;let o=N.includes(a.key)?[t,void 0]:t;U.value==="date"&&(S.includes(a.key)?(m.value[0].component!=="int"&&(o=void 0),m.value[0].component="int"):!S.includes(a.key)&&m.value[0].component=="int"&&(o=void 0,m.value[0].component="date"));const u=((c=e.value)==null?void 0:c.source)||m.value[0].key,l={source:u,value:o};if(u==="metric"){l.metric=(r=e.value)==null?void 0:r.metric;const O=de(e.value.value)?(k=(i=e.value.value)==null?void 0:i.includes)==null?void 0:k.call(i,","):!1;N.includes(a.key)!==O?l.value=void 0:l.value=e.value.value}["isnull","notnull"].includes(a.key)&&(l.value=1,l.source=m.value[0].key),e.value=l,b("update:value",{...e}),T.onFieldChange(),v.value.options.when[n.branches_Index].terms[n.whenName].terms[n.termsName][1]=a.name},B=(a,t,o,u)=>{var c,r;((c=e.value)==null?void 0:c.source)==="metric"&&(e.value.metric=u==null?void 0:u.id);const l={...e};((r=e.value)==null?void 0:r.source)!=="metric"&&delete l.value.metric,b("update:value",{...l}),T.onFieldChange(),v.value.options.when[n.branches_Index].terms[n.whenName].terms[n.termsName][2]=o},ee=a=>{b("update:value",{...e}),v.value.options.when[n.branches_Index].terms[n.whenName].terms[n.termsName][3]=a.label},ae=()=>{var t,o,u,l,c;const a={column:void 0,value:{source:"manual",value:void 0},termType:void 0,type:"and",key:`params_${new Date().getTime()}`};(c=(l=(u=(o=(t=v.value.branches)==null?void 0:t[n.branchName])==null?void 0:o.when)==null?void 0:u[n.whenName])==null?void 0:l.terms)==null||c.push(a),v.value.options.when[n.branchName/2].terms[n.whenName].terms.push(["","","","并且"])},te=()=>{var a,t,o,u,l;console.log(v.value,"formModal"),(l=(u=(o=(t=(a=v.value.branches)==null?void 0:a[n.branchName])==null?void 0:t.when)==null?void 0:o[n.whenName])==null?void 0:u.terms)==null||l.splice(n.termsName,1),console.log(n,"props"),v.value.options.when[n.branches_Index].terms[n.whenName].terms.splice(n.termsName,1)};return oe(()=>{var o;const a=e.termType?N.includes(e.termType):!1,t=((o=e.value)==null?void 0:o.source)==="metric";return y.value.length?p.value=y.value.filter(u=>a?u.range:!u.range):p.value=[],a?g.value?!t:!0:!1}),E(()=>{Object.assign(e,ve(n.value,["column","options","termType","terms","type","value","metric","key"]))}),(a,t)=>{var l,c;const o=re("AIcon"),u=ye;return h(),C("div",ke,[_.isFirst?D("",!0):(h(),C("div",Oe,[w(s(M),{options:[{label:"并且",value:"and"},{label:"或者",value:"or"}],type:"type",value:s(e).type,"onUpdate:value":t[0]||(t[0]=r=>s(e).type=r),onSelect:ee},null,8,["value"])])),L("div",{class:"params-item_button",onMouseover:G,onMouseout:H},[w(s(M),{options:s(I),icon:"icon-zhihangdongzuoxie-1",type:"column","value-name":"column","label-name":"fullName",placeholder:"请选择参数",value:s(e).column,"onUpdate:value":t[1]||(t[1]=r=>s(e).column=r),component:"treeSelect",onSelect:Q},null,8,["options","value"]),w(s(M),{options:s(V),type:"termType","value-name":"id","label-name":"name",placeholder:"操作符",value:s(e).termType,"onUpdate:value":t[2]||(t[2]=r=>s(e).termType=r),onSelect:W},null,8,["options","value"]),["notnull","isnull"].includes(s(e).termType)?D("",!0):(h(),C("div",Ce,[s(Y)?(h(),F(s(we),{key:0,icon:"icon-canshu",placeholder:"参数值",options:s(d),metricOptions:s(p),tabsOptions:s(m),value:s(e).value.value,"onUpdate:value":t[3]||(t[3]=r=>s(e).value.value=r),source:s(e).value.source,"onUpdate:source":t[4]||(t[4]=r=>s(e).value.source=r),onSelect:B},null,8,["options","metricOptions","tabsOptions","value","source"])):s(Z)?(h(),F(s(be),{key:1,icon:"icon-canshu",placeholder:"参数值",options:s(d),metricOptions:s(p),tabsOptions:s(m),value:s(e).value.value,"onUpdate:value":t[5]||(t[5]=r=>s(e).value.value=r),source:s(e).value.source,"onUpdate:source":t[6]||(t[6]=r=>s(e).value.source=r),onSelect:B},null,8,["options","metricOptions","tabsOptions","value","source"])):(h(),F(s(he),{key:2,icon:"icon-canshu",placeholder:((l=s(m)[0])==null?void 0:l.component)==="array"?"多个值以英文逗号隔开":"参数值",options:s(d),metricOptions:s(p),tabsOptions:s(m),metric:(c=s(e).value)==null?void 0:c.metric,value:s(e).value.value,"onUpdate:value":t[7]||(t[7]=r=>s(e).value.value=r),source:s(e).value.source,"onUpdate:source":t[8]||(t[8]=r=>s(e).value.source=r),onSelect:B},null,8,["placeholder","options","metricOptions","tabsOptions","metric","value","source"]))])),w(u,{title:"确认删除？",onConfirm:te,className:"button-delete",show:s(x)},{default:ce(()=>[w(o,{type:"CloseOutlined"})]),_:1},8,["show"])],32),_.isLast?(h(),C("div",{key:1,class:"term-add",onClick:me(ae,["stop"])},[L("div",_e,[w(o,{type:"PlusOutlined",style:{"font-size":"12px"}})])],8,Se)):D("",!0)])}}});export{Re as _};