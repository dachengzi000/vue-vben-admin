import{d as x,h as t,o as y,i as O,w as n,j as e,m as a}from"./index.de7a3c72.js";import{A as R}from"./index.aa7240c2.js";import{u as p}from"./index.b2e7aa8c.js";import $ from"./Drawer1.6fdcf790.js";import C from"./Drawer2.edac6780.js";import h from"./Drawer3.b8f8cf82.js";import k from"./Drawer4.3b89e246.js";import v from"./Drawer5.1355a69f.js";import{_ as A}from"./index.46623d23.js";import"./index.4e4cdfc2.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./ArrowLeftOutlined.ddcf4a87.js";import"./useAttrs.5fb4b160.js";import"./isEqual.42834150.js";import"./index.8685fc69.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useWindowSizeFn.5bd3f00e.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";import"./useForm.0d0b0437.js";import"./index.492a2c9c.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";var g=x({components:{Alert:R,PageWrapper:A,Drawer1:$,Drawer2:C,Drawer3:h,Drawer4:k,Drawer5:v},setup(){const[r,{openDrawer:o,setDrawerProps:m}]=p(),[u,{openDrawer:w}]=p(),[D,{openDrawer:s}]=p(),[i,{openDrawer:d}]=p(),[c,{openDrawer:f}]=p();function j(){d(!0,{data:"content",info:"Info"})}function l(){o(),m({loading:!0}),setTimeout(()=>{m({loading:!1})},2e3)}return{register1:r,openDrawer1:o,register2:u,openDrawer2:w,register3:D,openDrawer3:s,register4:i,register5:c,openDrawer5:f,send:j,openDrawerLoading:l}}});const P=a("\u6253\u5F00Drawer"),T=a("\u6253\u5F00Drawer"),L=a("\u6253\u5F00Drawer"),W=a("\u6253\u5F00Drawer\u5E76\u4F20\u9012\u6570\u636E"),B=a("\u6253\u5F00\u8BE6\u60C5Drawer");function E(r,o,m,u,w,D){const s=t("Alert"),i=t("a-button"),d=t("Drawer1"),c=t("Drawer2"),f=t("Drawer3"),j=t("Drawer4"),l=t("Drawer5"),b=t("PageWrapper");return y(),O(b,{title:"\u62BD\u5C49\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:n(()=>[e(s,{message:"\u4F7F\u7528 useDrawer \u8FDB\u884C\u62BD\u5C49\u64CD\u4F5C","show-icon":""}),e(i,{type:"primary",class:"my-4",onClick:r.openDrawerLoading},{default:n(()=>[P]),_:1},8,["onClick"]),e(s,{message:"\u5185\u5916\u540C\u65F6\u63A7\u5236\u663E\u793A\u9690\u85CF","show-icon":""}),e(i,{type:"primary",class:"my-4",onClick:o[1]||(o[1]=_=>r.openDrawer2(!0))},{default:n(()=>[T]),_:1}),e(s,{message:"\u81EA\u9002\u5E94\u9AD8\u5EA6/\u663E\u793Afooter","show-icon":""}),e(i,{type:"primary",class:"my-4",onClick:o[2]||(o[2]=_=>r.openDrawer3(!0))},{default:n(()=>[L]),_:1}),e(s,{message:"\u5185\u5916\u6570\u636E\u4EA4\u4E92,\u5916\u90E8\u901A\u8FC7 transferModalData \u53D1\u9001\uFF0C\u5185\u90E8\u901A\u8FC7 receiveDrawerDataRef \u63A5\u6536\u3002\u8BE5\u6570\u636E\u5177\u6709\u54CD\u5E94\u5F0F","show-icon":""}),e(i,{type:"primary",class:"my-4",onClick:r.send},{default:n(()=>[W]),_:1},8,["onClick"]),e(s,{message:"\u8BE6\u60C5\u9875\u6A21\u5F0F","show-icon":""}),e(i,{type:"primary",class:"my-4",onClick:o[3]||(o[3]=_=>r.openDrawer5(!0))},{default:n(()=>[B]),_:1}),e(d,{onRegister:r.register1},null,8,["onRegister"]),e(c,{onRegister:r.register2},null,8,["onRegister"]),e(f,{onRegister:r.register3},null,8,["onRegister"]),e(j,{onRegister:r.register4},null,8,["onRegister"]),e(l,{onRegister:r.register5},null,8,["onRegister"])]),_:1})}g.render=E;export default g;
