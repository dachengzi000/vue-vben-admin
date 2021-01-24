import{_ as l}from"./index.8685fc69.js";import{d as c,g as m,h as i,o as f,i as b,bw as j,j as F}from"./index.de7a3c72.js";import{_ as B}from"./index.46623d23.js";import{u as E}from"./useForm.0d0b0437.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RightOutlined.dcad5eff.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.95c10fda.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";import"./index.492a2c9c.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";const x=[{field:"title",component:"Input",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"RangePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0},{field:"target",component:"InputTextArea",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",rows:4},required:!0},{field:"client",component:"Input",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"Input",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"InputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"RadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];var t=c({components:{BasicForm:l,PageWrapper:B},setup(){const{createMessage:e}=m(),[o,{validate:r,setProps:u}]=E({labelCol:{span:7},wrapperCol:{span:10},schemas:x,actionColOptions:{offset:8},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:s});async function s(){try{await r(),u({submitButtonOptions:{loading:!0}}),setTimeout(()=>{u({submitButtonOptions:{loading:!1}}),e.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(a){}}return{register:o}}}),Ae=`.form-wrap[data-v-5cbaa0f1] {
  padding: 24px;
  background: #fff;
}
`;const n=j("data-v-5cbaa0f1"),_=n((e,o,r,u,s,a)=>{const p=i("BasicForm"),d=i("PageWrapper");return f(),b(d,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",content:" \u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002",contentClass:"p-4"},{default:n(()=>[F(p,{onRegister:e.register},null,8,["onRegister"])]),_:1})});t.render=_,t.__scopeId="data-v-5cbaa0f1";export default t;
