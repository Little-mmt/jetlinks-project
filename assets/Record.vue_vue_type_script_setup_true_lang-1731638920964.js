import{J as m}from"./vue-json-viewer-1731638920964.js";import{T as d}from"./template-1731638920964.js";import{d as h,k as n,U as y,V as I,u as c}from"./vue-1731638920964.js";const g=h({__name:"Record",props:{data:Object},setup(v){const f=v,o={weixin:"wechat",dingTalk:"dingtalk"},l=n([]),u=n([]),s=n(),e=n();return(async r=>{s.value=r,e.value=r.context,e.value.detailJson&&(e.value.detailJson=e.value.detailJson.replace(/\\\"/g,'"')),(e.value.hasOwnProperty("userIdList")||e.value.hasOwnProperty("toUser"))&&d.getUser(o[s.value.notifyType],s.value.notifierId).then(t=>{t.status===200&&(l.value=t.result,l.value.forEach(a=>{var i,p;a.id===((i=e.value)==null?void 0:i.userIdList)&&(e.value.userIdList=a.name),a.id===((p=e.value)==null?void 0:p.toUser)&&(e.value.toUser=a.name)}))}),e.value.hasOwnProperty("departmentIdList")&&d.getDept(o[s.value.notifyType],s.value.notifierId).then(t=>{t.status===200&&(u.value=t.result,u.value.forEach(a=>{a.id===e.value.departmentIdList&&(e.value.departmentIdList=a.name)}))})})(f.data),(r,t)=>(y(),I(c(m),{value:c(e),expanded:!0,expandDepth:4},null,8,["value"]))}});export{g as _};