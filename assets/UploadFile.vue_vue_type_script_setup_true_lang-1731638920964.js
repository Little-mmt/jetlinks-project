import{ap as A,T as b,L as B,dh as F,o as h,B as V,P as E,d as T,as as I,e as j}from"./index-1731638920964.js";import{h as J}from"./cardManagement-1731638920964.js";import{d as P,k as l,ab as X,U as f,Z as _,f as r,X as d,u as i,E as m,_ as g,Y as y,$ as L,F as D}from"./vue-1731638920964.js";const K={style:{"margin-left":"20px"}},M={key:0,class:"importing-status"},R={key:1,class:"column"},Y={key:0},G=P({__name:"UploadFile",props:{modelValue:{type:Array,default:()=>[]},product:{type:String,default:""},file:{type:String,default:"xlsx"}},emits:["update:modelValue"],setup(x,{emit:H}){const o=x,p=l("wait"),k=l(!1);l(!1),l(0),l("");const N=l(""),w=l(0),v=l(0),U=l(),C=async s=>{const e=await J(s);if(e){const t=new Blob([e],{type:s}),a=URL.createObjectURL(t);F(a,"物联卡导入模板",s)}},S=s=>{const e=(o==null?void 0:o.file)==="csv"?"csv":"xlsx",t=s.type==="text/csv",a=s.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return!t&&e!=="xlsx"&&h("请上传.csv格式文件","warning"),!a&&e!=="csv"&&h("请上传.xlsx格式文件","warning"),t&&e!=="xlsx"||a&&e!=="csv"},O=async s=>{if(k.value=!0,s.file.status==="done"){const e=s.file.response||{result:""};$(e)}},$=async s=>{let e=[];p.value="importing";let t;t=new EventSource(`${V}/network/card/${o.product}/_import?:X_Access_Token=${E()}&fileUrl=${s.result}`,{withCredentials:!0}),t.onopen=a=>{console.log("open")},t.onmessage=a=>{var u,c;const n=JSON.parse(a.data);n.success?w.value+=((u=n.result)==null?void 0:u.total)||1:n.rowNumber!==-1?(v.value+=((c=n.result)==null?void 0:c.total)||1,e.push({rowNumber:`第${n.rowNumber}行`,message:n.message,name:n.name}),U.value=JSON.stringify(e)):N.value=n.detailFile},t.onerror=a=>{p.value="done",t.close()}};return(s,e)=>{const t=X("AIcon"),a=T,n=I,u=j;return f(),_(D,null,[r(u,{align:"end"},{default:d(()=>[r(n,{fileList:x.modelValue.upload,"onUpdate:fileList":e[0]||(e[0]=c=>x.modelValue.upload=c),name:"file",action:i(A),headers:{[i(b)]:i(B).get(i(b))},maxCount:1,showUploadList:!1,onChange:O,accept:o!=null&&o.file?`.${o==null?void 0:o.file}`:".xlsx","before-upload":S},{default:d(()=>[r(a,null,{icon:d(()=>[r(t,{type:"UploadOutlined"})]),default:d(()=>[m(" 文件上传 ")]),_:1})]),_:1},8,["fileList","action","headers","accept"]),g("div",K,[r(u,null,{default:d(()=>[m(" 下载模板 "),g("a",{onClick:e[1]||(e[1]=c=>C("xlsx"))},".xlsx"),g("a",{onClick:e[2]||(e[2]=c=>C("csv"))},".csv")]),_:1})])]),_:1}),i(p)=="importing"?(f(),_("div",M,[r(t,{type:"LoadingOutlined"}),m(" 正在导入 ")])):y("",!0),i(p)!="wait"?(f(),_("div",R,[g("p",null,[r(t,{style:{color:"#00a4ff"},type:"CheckOutlined"}),m("导入成功 总数量 "+L(i(w)),1)]),i(v)?(f(),_("span",Y,[r(t,{style:{color:"#e50012"},type:"CloseOutlined"}),m("导入失败 总数量 "+L(i(v)),1)])):y("",!0)])):y("",!0)],64)}}});export{G as _};