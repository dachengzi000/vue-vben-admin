import{_ as B}from"./index.8685fc69.js";import{a as h}from"./index.b5f656c2.js";import{_}from"./index.46623d23.js";import{d as C,h as d,o as P,i as g,w as t,j as o,m as p}from"./index.de7a3c72.js";import{u as f}from"./useForm.0d0b0437.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RightOutlined.dcad5eff.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.95c10fda.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./index.cf88fb23.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.492a2c9c.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";const b=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field5",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],F=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:n=>{e.f2=n.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e,tableAction:n})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:async()=>{const{validate:s}=e,l=await s();console.log(l)}})}];var j=C({components:{BasicForm:B,CollapseContainer:h,PageWrapper:_},setup(){const[e,{setProps:n,updateSchema:s,appendSchemaByField:l,removeSchemaByFiled:u}]=f({labelWidth:120,schemas:b,actionColOptions:{span:24}}),[m]=f({labelWidth:120,schemas:F,actionColOptions:{span:24}});function i(){s({field:"field3",label:"\u5B57\u6BB53 New"})}function a(){s([{field:"field3",label:"\u5B57\u6BB53 New++"},{field:"field4",label:"\u5B57\u6BB54 New++"}])}function r(){l({field:"field10",label:"\u5B57\u6BB510",component:"Input",colProps:{span:8}},"field3")}function c(){u("field11")}return{register:e,register1:m,schemas:b,setProps:n,changeLabel3:i,changeLabel34:a,appendField:r,deleteField:c}}});const x={class:"mb-4"},w=p("\u66F4\u6539\u5B57\u6BB53label"),k=p("\u540C\u65F6\u66F4\u6539\u5B57\u6BB53,4label"),O=p("\u5F80\u5B57\u6BB53\u540E\u9762\u63D2\u5165\u5B57\u6BB510"),W=p("\u5220\u9664\u5B57\u6BB511");function S(e,n,s,l,u,m){const i=d("a-button"),a=d("BasicForm"),r=d("CollapseContainer"),c=d("PageWrapper");return P(),g(c,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B"},{default:t(()=>[o("div",x,[o(i,{onClick:e.changeLabel3,class:"mr-2"},{default:t(()=>[w]),_:1},8,["onClick"]),o(i,{onClick:e.changeLabel34,class:"mr-2"},{default:t(()=>[k]),_:1},8,["onClick"]),o(i,{onClick:e.appendField,class:"mr-2"},{default:t(()=>[O]),_:1},8,["onClick"]),o(i,{onClick:e.deleteField,class:"mr-2"},{default:t(()=>[W]),_:1},8,["onClick"])]),o(r,{title:"\u52A8\u6001\u8868\u5355\u793A\u4F8B,\u52A8\u6001\u6839\u636E\u8868\u5355\u5185\u5176\u4ED6\u503C\u6539\u53D8"},{default:t(()=>[o(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),o(r,{class:"mt-5",title:"componentProps\u52A8\u6001\u6539\u53D8"},{default:t(()=>[o(a,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}j.render=S;export default j;
