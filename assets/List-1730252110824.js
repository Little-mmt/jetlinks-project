import{d as I,g as L}from"./index-1730252110824.js";import B from"./index-1730252110824219.js";import A from"./Item-17302521108243.js";import{u as S}from"./scene-17302521108242.js";import{d as N,ai as V,k as w,e as D,ab as E,U as i,Z as f,F,a1 as G,V as h,u as s,_ as T,f as y,X as b,E as j,a4 as z,Y as J}from"./vue-1730252110824.js";import"./ActionTypeComponent.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./index.vue_vue_type_script_setup_true_lang-173025211082430.js";import"./index-1730252110824220.js";import"./index-1730252110824286.js";import"./NotifyWay-1730252110824.js";import"./config-17302521108242.js";import"./NotifyConfig.vue_vue_type_style_index_0_lang-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import"./const-17302521108242.js";import"./NotifyTemplate.vue_vue_type_style_index_0_lang-1730252110824.js";import"./template-1730252110824.js";import"./VariableDefinitions.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./BuildIn.vue_vue_type_script_setup_true_name_NotifyBuildIn_lang-1730252110824.js";import"./scene-1730252110824.js";import"./Org.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./Tag.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./InputFile.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./User.vue_vue_type_script_setup_true_name_NotifyUser_lang-1730252110824.js";import"./unionBy-1730252110824.js";import"./index-1730252110824218.js";import"./index-1730252110824287.js";import"./Product-17302521108243.js";import"./product-17302521108244.js";import"./category-1730252110824.js";import"./department-17302521108242.js";import"./setting-17302521108242.js";import"./index.vue_vue_type_script_setup_true_name_Device_lang-1730252110824.js";import"./TopCard-17302521108246.js";import"./Device-1730252110824.js";import"./Tag-1730252110824.js";import"./RelationSelect.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./util-17302521108242.js";import"./util-17302521108245.js";import"./lodash.default-1730252110824.js";import"./throttle-1730252110824.js";import"./min-1730252110824.js";import"./isNil-1730252110824.js";import"./isUndefined-1730252110824.js";import"./difference-1730252110824.js";import"./flattenDeep-1730252110824.js";import"./sortBy-1730252110824.js";import"./uniqBy-1730252110824.js";import"./toLower-1730252110824.js";import"./index.vue_vue_type_script_setup_true_name_ActionDeviceActions_lang-1730252110824.js";import"./EditTable.vue_vue_type_script_setup_true_lang-17302521108242.js";import"./FunctionItem.vue_vue_type_script_setup_true_name_FunctionItem_lang-1730252110824.js";import"./index-1730252110824223.js";import"./typings-1730252110824.js";import"./DropdownButton.vue_vue_type_style_index_0_scoped_011bae6b_lang-1730252110824.js";import"./Menus-1730252110824.js";import"./util-17302521108243.js";import"./Time.vue_vue_type_style_index_0_lang-1730252110824.js";import"./Array.vue_vue_type_style_index_0_scoped_59b5dd9b_lang-1730252110824.js";import"./Double.vue_vue_type_script_setup_true_name_DoubleParamsDropdown_lang-1730252110824.js";import"./index-1730252110824310.js";import"./WriteProperty.vue_vue_type_script_setup_true_lang-1730252110824.js";import"./CardSelect-1730252110824.js";import"./index-1730252110824221.js";import"./AlarmModal-1730252110824.js";import"./useRequest-1730252110824.js";import"./useAlarmLevel-1730252110824.js";import"./config-1730252110824.js";import"./configuration-1730252110824.js";import"./util-1730252110824.js";import"./FilterGroup.vue_vue_type_script_setup_true_name_FilterGroup_lang-1730252110824.js";import"./DropdownButton-1730252110824.js";import"./FilterCondition.vue_vue_type_script_setup_true_name_FilterCondition_lang-1730252110824.js";import"./CheckFilterItem-1730252110824.js";import"./CheckItem.vue_vue_type_script_setup_true_name_ActionCheckItem_lang-1730252110824.js";const M={class:"action-list-content"},O=N({name:"ActionList"}),P=N({...O,props:{branchesName:{type:Number,default:0},type:{type:String,default:"serial"},actions:{type:Array,default:()=>[]},parallel:Boolean},emits:["delete","add"],setup(t,{emit:l}){const m=t,_=S(),{data:v}=V(_),a=w(!1),c=D(()=>v.value.branches[m.branchesName].then.findIndex(e=>e.parallel===m.parallel)),k=()=>{a.value=!0},g=(e,p)=>{var r;const{type:d,...n}=e,o={...n,key:e.key,actionId:e.actionId,options:{...p,columns:((r=p.otherColumns)==null?void 0:r.filter(u=>u))||[]}};l("add",o),a.value=!1},C=()=>{a.value=!1},x=e=>{l("delete",e)};return(e,p)=>{const d=E("AIcon"),n=I;return i(),f("div",M,[(i(!0),f(F,null,G(t.actions,(o,r)=>(i(),h(A,{key:o.key,parallel:t.parallel,data:o,branchesName:t.branchesName,thenName:s(c),name:r,type:t.type,isLast:r===t.actions.length-1,options:o.options,onDelete:u=>x(o.key||"")},null,8,["parallel","data","branchesName","thenName","name","type","isLast","options","onDelete"]))),128)),T("div",{class:z(["actions-add-list",{border:m.actions.length}])},[y(n,{type:"primary",ghost:"",style:{width:"100%"},onClick:k},{icon:b(()=>[y(d,{type:"PlusOutlined"})]),default:b(()=>[j(" 添加执行动作 ")]),_:1})],2),s(a)?(i(),h(B,{key:0,parallel:t.parallel,name:t.actions.length,branchGroup:s(c),branchesName:t.branchesName,onSave:g,onCancel:C},null,8,["parallel","name","branchGroup","branchesName"])):J("",!0)])}}});const fe=L(P,[["__scopeId","data-v-addf1504"]]);export{fe as default};