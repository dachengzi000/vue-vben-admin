var f=Object.assign;import{ds as h,e as k,d as v,bt as D,r as _,a as A,aE as E,h as p,bA as W,H as w,o as R,i as $,w as s,j as n,m as l}from"./index.de7a3c72.js";import{A as L}from"./index.aa7240c2.js";import{_ as T}from"./index.46623d23.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./RightOutlined.dcad5eff.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./DownOutlined.2e949c36.js";import"./index.95c10fda.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";function y(e){let t,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const o=e;t=o.props||{},a=o.target||document.body}else t=e;const r=h(t);return[()=>{const o=k(a);!o||r.open(o)},()=>{r.close()}]}var C=v({components:{Loading:D,PageWrapper:T,[L.name]:L},setup(){const e=_(null),t=_(!1),a=A({absolute:!1,loading:!1,tip:"\u52A0\u8F7D\u4E2D..."}),[r,d]=y({tip:"\u52A0\u8F7D\u4E2D..."}),[c,o]=y({target:e,props:{tip:"\u52A0\u8F7D\u4E2D...",absolute:!0}});function i(F){a.absolute=F,a.loading=!0,setTimeout(()=>{a.loading=!1},2e3)}function u(){i(!1)}function m(){i(!0)}function g(){r(),setTimeout(()=>{d()},2e3)}function j(){c(),setTimeout(()=>{o()},2e3)}function b(){t.value=!0,setTimeout(()=>{t.value=!1},2e3)}return f({openCompFullLoading:u,openFnFullLoading:g,openFnWrapLoading:j,openCompAbsolute:m,wrapEl:e,loadingRef:t,openDirectiveLoading:b},E(a))}});const O=l("\u5168\u5C4F Loading"),P=l("\u5BB9\u5668\u5185 Loading"),x=l("\u5168\u5C4F Loading"),B=l("\u5BB9\u5668\u5185 Loading"),N=l(" \u6253\u5F00\u6307\u4EE4Loading ");function V(e,t,a,r,d,c){const o=p("a-alert"),i=p("a-button"),u=p("Loading"),m=p("PageWrapper"),g=W("loading");return w((R(),$(m,{"loading-tip":"\u52A0\u8F7D\u4E2D...",title:"Loading\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[n(o,{message:"\u7EC4\u4EF6\u65B9\u5F0F"}),n(i,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:s(()=>[O]),_:1},8,["onClick"]),n(i,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:s(()=>[P]),_:1},8,["onClick"]),n(u,{loading:e.loading,absolute:e.absolute,tip:e.tip},null,8,["loading","absolute","tip"]),n(o,{message:"\u51FD\u6570\u65B9\u5F0F"}),n(i,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:s(()=>[x]),_:1},8,["onClick"]),n(i,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:s(()=>[B]),_:1},8,["onClick"]),n(o,{message:"\u6307\u4EE4\u65B9\u5F0F"}),n(i,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:s(()=>[N]),_:1},8,["onClick"])]),_:1},512)),[[g,e.loadingRef]])}C.render=V;export default C;
