import{au as L,ex as w,ey as C,aa as I,a9 as J,d as B,e as E,a3 as T,g as q}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{u as A}from"./instance-1730252110824.js";import{d as N,k as Y,ab as i,U as l,Z as y,f as s,X as a,E as p,$ as d,u as c,F as f,a1 as j,V as D,n as H}from"./vue-1730252110824.js";const M=N({__name:"index",setup(O){const m=Y({}),h=A(),u=[{title:"类型",dataIndex:"type",key:"type",scopedSlots:!0,ellipsis:!0,search:{type:"select",options:()=>new Promise(t=>{C().then(r=>{t(r.result.map(n=>({label:n.text,value:n.value})))})})}},{title:"时间",dataIndex:"timestamp",key:"timestamp",scopedSlots:!0,ellipsis:!0,search:{type:"date"}},{title:"内容",dataIndex:"content",key:"content",scopedSlots:!0,search:{type:"string"}},{title:"操作",key:"action",fixed:"right",width:250,scopedSlots:!0}],g=(t,r)=>t?[{key:"view",text:"查看",tooltip:{title:"查看"},icon:"SearchOutlined",onClick:()=>{let n="";try{n=JSON.stringify(JSON.parse(t.content),null,2)}catch{n=t.content}I.info({title:"详细信息",width:700,content:H(J,{bordered:!1,rows:15,value:n})})}}]:[],x=t=>{m.value=t};return(t,r)=>{const n=i("pro-search"),_=i("Ellipsis"),k=i("AIcon"),S=B,v=E,b=T;return l(),y(f,null,[s(n,{columns:u,target:"device-instance-log",onSearch:x,class:"device-log-search"}),s(b,{ref:"instanceRefLog",columns:u,request:e=>c(w)(c(h).current.id,e),model:"TABLE",defaultParams:{sorts:[{name:"timestamp",order:"desc"}]},params:c(m),bodyStyle:{padding:0,minHeight:"auto"}},{type:a(e=>{var o;return[p(d((o=e==null?void 0:e.type)==null?void 0:o.text),1)]}),content:a(e=>[s(_,{style:{width:"calc(100% - 20px)"}},{default:a(()=>[p(d(e==null?void 0:e.content),1)]),_:2},1024)]),timestamp:a(e=>[p(d(e.timestamp?c(L)(e.timestamp).format("YYYY-MM-DD HH:mm:ss"):""),1)]),action:a(e=>[s(v,{size:16},{default:a(()=>[(l(!0),y(f,null,j(g(e,"table"),o=>(l(),D(S,{key:o.key,onClick:o.onClick,type:"link",style:{padding:"0px"}},{icon:a(()=>[s(k,{type:o.icon},null,8,["type"])]),_:2},1032,["onClick"]))),128))]),_:2},1024)]),_:1},8,["request","params"])],64)}}});const K=q(M,[["__scopeId","data-v-0d6eed77"]]);export{K as default};