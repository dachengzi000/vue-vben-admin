import{d as f,aN as d,a0 as l,o as m,i as C,l as $,k as T}from"./index.de7a3c72.js";var g=f({name:"SimpleMenuTag",props:{item:{type:Object,default:{}},collapseParent:{type:Boolean,default:!1}},setup(e){const{prefixCls:u}=d("simple-menu"),r=l(()=>{const{item:t}=e;if(!t)return!1;const{tag:n}=t;if(!n)return!1;const{dot:a,content:s}=n;return!(!a&&!s)}),i=l(()=>{if(!r.value)return"";const{item:t,collapseParent:n}=e,{tag:a}=t,{dot:s,content:c}=a;return s||n?"":c});return{getTagClass:l(()=>{const{item:t,collapseParent:n}=e,{tag:a={}}=t||{},{dot:s,type:c="error"}=a,o=`${u}-tag`;return[o,[`${o}--${c}`],{[`${o}--collapse`]:n,[`${o}--dot`]:s}]}),getShowTag:r,getContent:i}}});function y(e,u,r,i,p,t){return e.getShowTag?(m(),C("span",{key:0,class:e.getTagClass},$(e.getContent),3)):T("",!0)}g.render=y;export default g;
