import{au as V,o as Y,ds as j,a3 as J,aa as L}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{q as O}from"./resource-1730252110824.js";import{_ as $}from"./Result.vue_vue_type_script_setup_true_lang-1730252110824.js";import{q as E}from"./product-17302521108244.js";import{d as H,k as a,ab as y,U as h,V as v,X as i,_ as x,f as c,E as I,u as t,$ as b,Y as K}from"./vue-1730252110824.js";const P={class:"resource-issue-alert"},ae=H({__name:"index",props:{data:{type:Object,default:()=>{}}},emits:["close"],setup(w,{emit:T}){const k=w,S={sorts:[{name:"registerTime",order:"desc"}],terms:[{terms:[{termType:"eq",column:"productId$product-info",value:"accessProvider is official-edge-gateway"}],type:"and"}]},d=a({}),C=a(),m=a([]),l=a([]),u=a(!1),o=new Map;o.set("online","success"),o.set("offline","error"),o.set("notActive","warning");const p=[{title:"ID",dataIndex:"id",key:"id",ellipsis:!0,width:200,fixed:"left",search:{type:"string"}},{title:"产品名称",dataIndex:"productName",key:"productName",ellipsis:!0,search:{type:"select",rename:"productId",first:!0,options:()=>new Promise(s=>{E({paging:!1}).then(r=>{s(r.result.map(n=>({label:n.name,value:n.id})))})})}},{title:"设备名称",ellipsis:!0,dataIndex:"name",key:"name",search:{type:"string"}},{title:"注册时间",dataIndex:"registerTime",key:"registerTime",width:200,scopedSlots:!0,search:{type:"date",rename:"registryTime"}},{title:"状态",dataIndex:"state",key:"state",scopedSlots:!0,search:{type:"select",options:[{label:"禁用",value:"notActive"},{label:"离线",value:"offline"},{label:"在线",value:"online"}]}}],N=(s,r)=>{m.value=[...s],l.value=r},q=s=>{d.value=s},M=()=>{l.value.length?u.value=!0:Y("请选择设备","error")},_=()=>{T("close")};return(s,r)=>{const n=y("AIcon"),R=y("pro-search"),A=j,B=J,D=L;return h(),v(D,{visible:"",title:"下发设备",width:1e3,onOk:M,onCancel:_},{default:i(()=>[x("div",P,[c(n,{type:"InfoCircleOutlined",style:{"margin-right":"10px"}}),I("离线设备无法进行设备模板下发 ")]),c(R,{columns:p,target:"edge-resource-issue",onSearch:q,type:"simple",class:"resource-issue-search"}),c(B,{ref_key:"edgeResourceIssueRef",ref:C,columns:p,request:t(O),defaultParams:S,params:t(d),model:"TABLE",bodyStyle:{padding:0},rowSelection:{selectedRowKeys:t(m),onChange:N}},{state:i(e=>{var f,g;return[c(A,{text:(f=e.state)==null?void 0:f.text,status:t(o).get((g=e.state)==null?void 0:g.value)},null,8,["text","status"])]}),sourceId:i(e=>[I(b(e.sourceName),1)]),registerTime:i(e=>[x("span",null,b(e!=null&&e.registerTime?t(V)(e.registerTime).format("YYYY-MM-DD HH:mm:ss"):""),1)]),_:1},8,["request","params","rowSelection"]),t(u)?(h(),v($,{key:0,data:k.data,list:t(l),onClose:_},null,8,["data","list"])):K("",!0)]),_:1})}}});export{ae as _};