import{h as p,a3 as _,ec as h,g}from"./index-1730252110824.js";import"./index-1730252110824278.js";import"./index-1730252110824279.js";import"./index-1730252110824280.js";import"./index-1730252110824281.js";import"./index-1730252110824282.js";import"./index-1730252110824283.js";import{d as u,U as m,Z as f,_ as e,f as i,u as y,as as x,af as b,ag as S}from"./vue-1730252110824.js";const t=s=>(b("data-v-eb614cef"),s=s(),S(),s),I={class:"home"},k=t(()=>e("h1",null,"第三方接入说明",-1)),j=t(()=>e("div",{style:{color:"#666666"}}," 第三方平台接口请求基于数据签名调用方式，使用签名来校验客户端请求的完整性以及合法性，您可以参看如下文档，来构造 HTTP 接口以调用对应的第三方平台接口 。 ",-1)),T=t(()=>e("h2",null,"签名示例说明",-1)),C=t(()=>e("div",{class:"h2-text"},"1. 签名方式,支持MD5和Sha256两种方式.",-1)),P=t(()=>e("div",{class:"h2-text"}," 2. 发起请求的签名信息都需要放到请求头中,而不是请求体. ",-1)),H={style:{display:"flex",border:"1px solid #e6e6e6",padding:"15","justify-content":"space-between"}},K=x('<div data-v-eb614cef><h3 data-v-eb614cef>签名规则</h3><p data-v-eb614cef> 注意：签名时间戳与服务器时间不能相差五分钟以上，否则服务器将拒绝本次请求 </p><div class="div-border" data-v-eb614cef><div class="h3-text" data-v-eb614cef> 将参数key按ascii排序得到: pageIndex=0&amp;pageSize=20 </div><div class="h3-text" data-v-eb614cef> 使用拼接时间戳以及密钥得到: pageIndex=0&amp;pageSize=201574993804802testSecure </div><div class="h3-text" data-v-eb614cef> 使用md5(pageIndex=0&amp;pageSize=201574993804802testSecure)得到837fe7fa29e7a5e4852d447578269523 </div></div><h3 data-v-eb614cef>请求头示例</h3><div class="div-border" data-v-eb614cef><div class="h3-text" data-v-eb614cef> GET /api/device?pageIndex=0&amp;pageSize=20 </div><div class="h3-text" data-v-eb614cef>X-Client-Id: testId</div><div class="h3-text" data-v-eb614cef>X-Timestamp: 1574993804802</div><div class="h3-text" data-v-eb614cef> X-Sign: 837fe7fa29e7a5e4852d447578269523 </div></div><h3 data-v-eb614cef>响应结果示例</h3><div class="div-border" data-v-eb614cef><div class="h3-text" data-v-eb614cef>xxx</div><div class="h3-text" data-v-eb614cef>HTTP/1.1 200 OK</div><div class="h3-text" data-v-eb614cef>X-Timestamp: 1574994269075</div><div class="h3-text" data-v-eb614cef> X-Sign: c23faa3c46784ada64423a8bba433f25 </div><div class="h3-text" data-v-eb614cef>status:200,result:[ ]</div></div></div>',1),D={style:{width:"50%"}},w=t(()=>e("h3",null,"示例数据",-1)),U={style:{display:"flex",border:"1px solid #e6e6e6",padding:15,justifyContent:"space-between",marginTop:20}},V=t(()=>e("h3",null,"服务器验签流程",-1)),q=["src"],A={style:{width:"505px"}},X=t(()=>e("h3",null,"验签说明",-1)),z=t(()=>e("p",null,"使用和签名相同的算法(不需要对响应结果排序)",-1)),B=t(()=>e("h2",null,"java SDK接入说明",-1)),E=t(()=>e("div",{class:"div-border"},[e("div",{class:"h3-text"}," JetLinks平台java SDK基于java 8版本开发。 ")],-1)),R=t(()=>e("h3",null,"添加 SDK 依赖",-1)),W=t(()=>e("div",{class:"h3-text"},"将以下Maven依赖加入到pom.xml文件中",-1)),J=t(()=>e("h3",null,"SDK 客户端的初始化和请求方式",-1)),o=`String secureKey = ...; //密钥\r
String responseBody = ...;//服务端响应结果\r
String timestampHeader = ...;//响应头: X-Timestamp\r
String signHeader = ...; //响应头: X-Sign\r
\r
String sign = DigestUtils.md5Hex(responseBody+timestampHeader+secureKey);\r
if(sign.equalsIgnoreCase(signHeader)){\r
 //验签通过\r
}`,l=`<dependency>\r
    <groupId>org.jetlinks.sdk</groupId>\r
    <artifactId>api-sdk</artifactId>\r
    <version>1.0.0</version>\r
</dependency>`,c=`\r
        //服务器的baseUrl\r
        String baseUrl = "http://localhost:9000/jetlinks";\r
  //客户端Id\r
        String clientId = "aSoq98aAxzP";\r
  //访问秘钥\r
        String secureKey = "DaYsxpiWSfdTAPJyKW8rP2WAGyWErnsR";\r
\r
        ClientConfig clientConfig = new ClientConfig(baseUrl, clientId, secureKey);\r
\r
        ApiClient client = new WebApiClient(clientConfig);\r
\r
ApiResponse < PagerResult < DeviceInfo >> response = client\r
    .request(QueryDeviceRequest\r
        .of(query -> query\r
            .where("productId", "demo-device")\r
            .doPaging(0, 100)));`,M=u({__name:"HomePage",setup(s){const r=[{key:"1",type:"clientId",data:"testId"},{key:"2",type:"secureKey",data:"testSecure"},{key:"3",type:"请求URI",data:"/api/v1/device/dev0001/log/_query"},{key:"4",type:"请求方式",data:"GET"},{key:"5",type:"请求参数",data:"pageSize=20&pageIndex=0"},{key:"6",type:"签名方式",data:"MD5"},{key:"7",type:"签名示例时间戳",data:"1574993804802 "}];return(G,a)=>{const v=_,n=h;return m(),f("div",I,[k,j,T,C,P,e("div",H,[K,e("div",D,[w,e("div",null,[i(v,{dataSource:r,model:"TABLE",noPagination:"",columns:[{title:"示例数据类型",dataIndex:"type"},{title:"示例数据",dataIndex:"data"}]})])])]),e("div",U,[e("div",null,[V,e("div",null,[e("img",{src:y(p)("/apiHome.png"),style:{width:"80%"}},null,8,q)])]),e("div",A,[X,e("div",null,[z,e("div",null,[i(n,{language:"java",style:{height:"370px"},theme:"vs-dark",modelValue:o,"onUpdate:modelValue":a[0]||(a[0]=d=>o=d)})])])])]),e("div",null,[B,E,R,W,e("div",null,[i(n,{language:"java",style:{height:"370px"},theme:"vs-dark",modelValue:l,"onUpdate:modelValue":a[1]||(a[1]=d=>l=d)})]),J,e("div",null,[i(n,{language:"java",style:{height:"370px"},theme:"vs-dark",modelValue:c,"onUpdate:modelValue":a[2]||(a[2]=d=>c=d)})])])])}}});const ee=g(M,[["__scopeId","data-v-eb614cef"]]);export{ee as default};
