import I from"./index-1731638920964264.js";import N from"./map-1731638920964.js";import{gJ as V,g as G}from"./index-1731638920964.js";import{R as D,M as k}from"./util-17316389209646.js";import{d as R,k as p,r as L,p as P,ab as Y,U as C,V as b,X as S,f,_ as c,u as x,Z as A,Y as F}from"./vue-1731638920964.js";import"./index.vue_vue_type_script_setup_true_name_Save_lang-1731638920964.js";import"./BuildIn.vue_vue_type_script_setup_true_lang-1731638920964.js";import"./index-1731638920964280.js";import"./RadioButton-1731638920964.js";import"./GeoJsonModal-1731638920964.js";import"./useRequest-1731638920964.js";import"./min-1731638920964.js";const K={class:"region"},U={class:"left"},X={key:0,class:"left-mask"},Z={class:"left-content"},j={class:"right"},q=R({name:"RegionMange"}),z=R({...q,setup(H){const g=p(""),s=p(),d=p(),a=L({showTool:T,openSave:E,openEdit:B,layerSetData:l,mapInit:u,edit:!1,editType:"add",treeMask:!1,saveCache:void 0,stateInit:w,mapReadOnly:O,prevSelect:{}});P(D,a);const _=(e,t)=>{var o,i,r,n;t&&(((o=t.properties)==null?void 0:o.partition)==="geoJson"?((i=s.value)==null||i.showGeoJson(t.geoJson),a.type=k.geoJson):((r=t.properties)==null?void 0:r.partition)==="manual"?l(t.geoJson,!1):((n=s.value)==null||n.showDistrict(e),a.type=k.district),a.prevSelect={code:e,node:t})},M=()=>{a.prevSelect.code&&_(a.prevSelect.code,a.prevSelect.node)};function w(){a.edit=!1,a.treeMask=!1,a.saveCache=void 0,a.type=void 0,a.editType="add",u()}function E(e){var t;(t=d.value)==null||t.openSave(e)}function T(e){var t,o;(o=s.value)==null||o.showTool((t=a.saveCache)==null?void 0:t.geoJson)}function O(e){var t;l(e,!1),(t=s.value)==null||t.readOnly(e)}function B(){var e;(e=s.value)==null||e.openEdit()}function l(e,t=!0){var o,i,r,n,v,m,y,h;a.type=(r=(i=(o=e==null?void 0:e.features)==null?void 0:o[0])==null?void 0:i.properties)==null?void 0:r.type,(y=s.value)==null||y.showGeoJson((m=(v=(n=e==null?void 0:e.features)==null?void 0:n[0])==null?void 0:v.geometry)==null?void 0:m.coordinates),t&&((h=s.value)==null||h.openEdit())}function u(){var e;(e=s.value)==null||e.init()}return(e,t)=>{const o=Y("page-container");return C(),b(o,null,{default:S(()=>[f(V,{fixed:""},{default:S(()=>[c("div",K,[c("div",U,[x(a).treeMask?(C(),A("div",X)):F("",!0),c("div",Z,[f(I,{ref_key:"treeRef",ref:d,onSelect:_,onClose:M},null,512)])]),c("div",j,[f(N,{ref_key:"mapRef",ref:s,selectCode:x(g)},null,8,["selectCode"])])])]),_:1})]),_:1})}}});const ce=G(z,[["__scopeId","data-v-ffaa0f44"]]);export{ce as default};