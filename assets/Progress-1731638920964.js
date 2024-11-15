import{d as f,e as l,U as r,Z as o,_ as i,a0 as n,u as a,F as d,a1 as m}from"./vue-1731638920964.js";import{g}from"./index-1731638920964.js";const k={class:"progress-container"},v=f({__name:"Progress",props:{steps:{default:1},strokeColor:{default:"#108ee9"},percent:{}},setup(p){const e=p,c=l(()=>{let s="";return typeof e.strokeColor=="string"?s=e.strokeColor:s=`-webkit-linear-gradient(
            left,
            ${e.strokeColor.from},
            ${e.strokeColor.to}
        )`,{background:s,"clip-path":`polygon(0px 0px, ${e.percent}% 0px, ${e.percent}% 100%, 0px 100%)`}}),u=l(()=>{const s=[];for(let t=1;t<e.steps;t++)s.push(100/e.steps*t);return s});return(s,t)=>(r(),o("div",k,[i("div",{class:"value",style:n(a(c))},null,4),(r(!0),o(d,null,m(a(u),_=>(r(),o("div",{class:"split",style:n({left:_+"%"})},null,4))),256))]))}});const C=g(v,[["__scopeId","data-v-83fff117"]]);export{C as default};
