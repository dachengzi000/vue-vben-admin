import{d,b2 as m,u as F,a0 as f,e as g,h as n,o,i as s,w as y,j as E}from"./index.de7a3c72.js";import"./index.95c10fda.js";import{u as O}from"./useFullScreen.1ca0532c.js";import{F as _,a as T}from"./FullscreenOutlined.09f91c42.js";var r=d({name:"FullScreen",components:{FullscreenExitOutlined:_,FullscreenOutlined:T,Tooltip:m},setup(){const{t:e}=F(),{toggleFullscreen:t,isFullscreenRef:l}=O();return{getTitle:f(()=>g(l)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull")),isFullscreen:l,toggleFullscreen:t}}});function j(e,t,l,u,k,x){const i=n("FullscreenOutlined"),c=n("FullscreenExitOutlined"),a=n("Tooltip");return o(),s(a,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:y(()=>[E("span",{onClick:t[1]||(t[1]=(...p)=>e.toggleFullscreen&&e.toggleFullscreen(...p))},[e.isFullscreen?(o(),s(c,{key:1})):(o(),s(i,{key:0}))])]),_:1},8,["title","mouseEnterDelay"])}r.render=j;export default r;
