import{_ as b}from"./index.2e361397.js";import{getBasicColumns as g,getBasicData as x}from"./tableData.7aa0192c.js";import{_ as C}from"./index.46623d23.js";import{d as O,r as t,h as j,o as _,i as v,j as o,w as s,m as d,l}from"./index.de7a3c72.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.8685fc69.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RightOutlined.dcad5eff.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.95c10fda.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";import"./index.1f78b020.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c9242ea7.js";import"./transButton.da8a2266.js";import"./CaretDownFilled.186d011f.js";import"./clickOutside.5a8b0ef7.js";import"./useSortable.10178c08.js";import"./SettingOutlined.198ffb5d.js";import"./useExpose.1d889469.js";import"./useForm.0d0b0437.js";import"./index.492a2c9c.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./ArrowLeftOutlined.ddcf4a87.js";var u=O({components:{BasicTable:b,PageWrapper:C},setup(){const e=t(!1),r=t(!1),a=t(!0),n=t(!0),p=t(!1);function c(){e.value=!e.value}function i(){a.value=!a.value}function m(){r.value=!0,setTimeout(()=>{r.value=!1,p.value={pageSize:20}},3e3)}function f(){n.value=!n.value}return{columns:g(),data:x(),canResize:e,loading:r,striped:a,border:n,toggleStriped:i,toggleCanResize:c,toggleLoading:m,toggleBorder:f,pagination:p}}});const y={class:"p-4"},k=d(" \u5F00\u542Floading ");function S(e,r,a,n,p,c){const i=j("a-button"),m=j("BasicTable");return _(),v("div",y,[o(m,{title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:s(()=>[o(i,{type:"primary",onClick:e.toggleCanResize},{default:s(()=>[d(l(e.canResize?"\u53D6\u6D88\u81EA\u9002\u5E94":"\u81EA\u9002\u5E94\u9AD8\u5EA6"),1)]),_:1},8,["onClick"]),o(i,{type:"primary",onClick:e.toggleBorder},{default:s(()=>[d(l(e.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),o(i,{type:"primary",onClick:e.toggleLoading},{default:s(()=>[k]),_:1},8,["onClick"]),o(i,{type:"primary",onClick:e.toggleStriped},{default:s(()=>[d(l(e.striped?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])}u.render=S;export default u;
