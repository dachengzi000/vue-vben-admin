import{d as f,aN as j,a0 as a,o as l,i as g,l as b,k as x}from"./index.de7a3c72.js";import{c as T}from"./index.56e996f0.js";import"./isNumeric.2bec345d.js";import"./RightOutlined.dcad5eff.js";import"./LeftOutlined.6e782dc0.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useHeaderSetting.0d239ac1.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useSortable.10178c08.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.2865f037.js";import"./useWindowSizeFn.5bd3f00e.js";import"./usePageContext.05da5891.js";import"./index.4e4cdfc2.js";import"./clickOutside.5a8b0ef7.js";import"./index.dad53a49.js";import"./UpOutlined.b1a0aa74.js";import"./DownOutlined.2e949c36.js";import"./PlusOutlined.20641b62.js";import"./index.967c47da.js";var d=f({name:"MenuItemTag",props:T,setup(t){const{prefixCls:o}=j("basic-menu-item-tag"),r=a(()=>{const{item:e,showTitle:i,isHorizontal:n}=t;if(!e||i||n)return!1;const{tag:s}=e;if(!s)return!1;const{dot:p,content:u}=s;return!(!p&&!u)}),c=a(()=>{if(!r.value)return"";const{item:e}=t,{tag:i}=e,{dot:n,content:s}=i;return n?"":s}),m=a(()=>{const{item:e}=t,{tag:i={}}=e||{},{dot:n,type:s="error"}=i;return[o,[`${o}--${s}`],{[`${o}--dot`]:n}]});return{prefixCls:o,getTagClass:m,getShowTag:r,getContent:c}}});function C(t,o,r,c,m,e){return t.getShowTag?(l(),g("span",{key:0,class:t.getTagClass},b(t.getContent),3)):x("",!0)}d.render=C;export default d;
