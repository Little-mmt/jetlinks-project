import{ab as N,au as B,o as v,dH as R,dI as q,dJ as T,ds as L,a3 as j,aa as A}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{u as J}from"./instance-1730252110824.js";import{d as k,ai as V,k as i,ab as Y,U as H,V as P,X as f,_ as $,f as y,u as o,E,$ as K}from"./vue-1730252110824.js";const O={style:{"margin-top":"10px"}},U=k({name:"BindChildDevice"}),ae=k({...U,props:{parentIds:{type:Array,default:()=>[]}},emits:["change"],setup(S,{emit:m}){const l=J(),{detail:g}=V(l),h=i({}),_=i({}),t=i([]),x=i([]),c=i(!1),d=new Map;d.set("online","success"),d.set("offline","error"),d.set("notActive","warning");const b=[{title:"ID",dataIndex:"id",key:"id",ellipsis:!0,fixed:"left",search:{type:"string"}},{title:"设备名称",dataIndex:"name",key:"name",ellipsis:!0,search:{type:"string"}},{title:"所属产品",dataIndex:"productName",key:"productName",search:{type:"string"}},{title:"注册时间",dataIndex:"registryTime",key:"registryTime",scopedSlots:!0,search:{type:"date"}},{title:"状态",dataIndex:"state",key:"state",scopedSlots:!0,search:{type:"select",options:[{label:"禁用",value:"notActive"},{label:"离线",value:"offline"},{label:"在线",value:"online"}]}}],D=e=>{_.value=e},w=(e,r)=>{t.value=[...e],console.log(r),x.value=r.map(a=>({deviceId:a.id,deviceName:a.name}))},I=()=>{t.value=[],x.value=[]},C=()=>{if(t.value.length===0){v("请选择需要绑定的设备","warning");return}c.value=!0,l.current.accessProvider==="official-edge-gateway"?R(l.current.id).then(e=>{var a;const r=(a=h.value)==null?void 0:a._dataSource.filter(n=>{var u,p;return!((p=(u=e.result)==null?void 0:u[0])!=null&&p.find(s=>s.deviceId===n.id))&&t.value.includes(n.id)}).map(n=>({deviceId:n.id,deviceName:n.name}));if(r.length)return q(l.current.id,{info:r})}).then(e=>T(g.value.id,t.value)).then(e=>{m("change",!0),I(),v("操作成功")}).finally(()=>{c.value=!1}):T(g.value.id,t.value).then(e=>{m("change",!0),I(),v("操作成功")}).finally(()=>{c.value=!1})},M=()=>{m("change",!1)};return(e,r)=>{const a=Y("pro-search"),n=L,u=j,p=A;return H(),P(p,{maskClosable:!1,width:"1000px",visible:!0,title:"绑定子设备",okText:"确定",cancelText:"取消",onOk:C,onCancel:M,confirmLoading:o(c)},{default:f(()=>[$("div",O,[y(a,{columns:b,target:"child-device-bind",onSearch:D,type:"simple"}),y(u,{ref_key:"bindDeviceRef",ref:h,columns:b,request:o(N),model:"TABLE",defaultParams:{terms:[{terms:[{column:"parentId$isnull",value:"",type:"or"}]},{terms:[{column:"id$not",value:S.parentIds.join(","),type:"and"}],type:"and"},{terms:[{termType:"eq",column:"deviceType",value:"childrenDevice"}],type:"and"}]},rowSelection:{selectedRowKeys:o(t),onChange:w},params:o(_)},{registryTime:f(s=>[E(K(s.registryTime?o(B)(s.registryTime).format("YYYY-MM-DD HH:mm:ss"):""),1)]),state:f(s=>[y(n,{text:s.state.text,status:o(d).get(s.state.value)},null,8,["text","status"])]),_:1},8,["request","defaultParams","rowSelection","params"])])]),_:1},8,["confirmLoading"])}}});export{ae as _};