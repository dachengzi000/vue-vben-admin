import{_ as c}from"./index.2e361397.js";import{getBasicColumns as l}from"./tableData.7aa0192c.js";import{d as j}from"./table.973d050d.js";import{d as u,h as n,o as f,i as b,j as i,w as o,m as d}from"./index.de7a3c72.js";import{u as x}from"./useTable.aa27e6e7.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.8685fc69.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RightOutlined.dcad5eff.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.95c10fda.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";import"./index.1f78b020.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c9242ea7.js";import"./transButton.da8a2266.js";import"./CaretDownFilled.186d011f.js";import"./clickOutside.5a8b0ef7.js";import"./useSortable.10178c08.js";import"./SettingOutlined.198ffb5d.js";import"./useExpose.1d889469.js";import"./useForm.0d0b0437.js";var p=u({components:{BasicTable:c},setup(){const[e,{reload:t}]=x({title:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",api:j,columns:l()});function s(){t()}function r(){t({page:1})}return{registerTable:e,handleReloadCurrent:s,handleReload:r}}});const _={class:"p-4"},O=d(" \u5237\u65B0\u5F53\u524D\u9875 "),h=d(" \u5237\u65B0\u5E76\u8FD4\u56DE\u7B2C\u4E00\u9875 ");function C(e,t,s,r,T,g){const a=n("a-button"),m=n("BasicTable");return f(),b("div",_,[i(m,{onRegister:e.registerTable},{toolbar:o(()=>[i(a,{type:"primary",onClick:e.handleReloadCurrent},{default:o(()=>[O]),_:1},8,["onClick"]),i(a,{type:"primary",onClick:e.handleReload},{default:o(()=>[h]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}p.render=C;export default p;
