var m=Object.assign;import{u as j}from"./useTimeout.5494657f.js";import{r as I,B as k}from"./DragVerify.981673b2.js";import{h as g}from"./domUtils.aa6aef94.js";import{d as M,r as O,a as P,u as C,aW as $,a0 as _,j as a,e as l,m as V,T as W,b0 as E}from"./index.de7a3c72.js";import"./useExpose.1d889469.js";import"./CheckOutlined.615f0fd5.js";import"./DoubleRightOutlined.b4ab6685.js";import"./_stringToArray.9f34c09e.js";var G=`.ir-dv {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ir-dv-img__wrap {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}
.ir-dv-img__wrap img {
  width: 100%;
  border-radius: 50%;
}
.ir-dv-img__wrap img.to-origin {
  transition: transform 0.3s;
}
.ir-dv-img__tip {
  position: absolute;
  bottom: 10px;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
.ir-dv-img__tip.success {
  background: rgba(85, 209, 135, 0.6);
}
.ir-dv-img__tip.error {
  background: rgba(237, 111, 111, 0.6);
}
.ir-dv-img__tip.normal {
  background: rgba(0, 0, 0, 0.3);
}
.ir-dv-drag__bar {
  margin-top: 20px;
}
`,F=M({name:"ImgRotateDargVerify",inheritAttrs:!1,props:I,emits:["success","change","update:value"],setup(i,{emit:d,attrs:T}){const u=O(null),e=P({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:f}=C();$(()=>e.isPassing,t=>{if(t){const{startTime:n,endTime:r}=e,s=(r-n)/1e3;d("success",{isPassing:t,time:s.toFixed(1)}),d("change",t),d("update:value",t)}});const b=_(()=>{const{imgWrapStyle:t,imgWidth:n}=i;return m({width:`${n}px`,height:`${n}px`},t)}),x=_(()=>{const{minDegree:t,maxDegree:n}=i;return t===n?Math.floor(1+Math.random()*1)/10+1:1});function w(){e.startTime=new Date().getTime()}function y(t){e.draged=!0;const{imgWidth:n,height:r,maxDegree:s}=i,{moveX:c}=t,o=Math.ceil(c/(n-parseInt(r))*s*l(x));e.currentRotate=o,e.imgStyle=g("transform",`rotateZ(${e.randomRotate-o}deg)`)}function p(){const{minDegree:t,maxDegree:n}=i,r=Math.floor(t+Math.random()*(n-t));e.randomRotate=r,e.imgStyle=g("transform",`rotateZ(${r}deg)`)}function R(){const{randomRotate:t,currentRotate:n}=e,{diffDegree:r}=i;Math.abs(t-n)>=(r||20)?(e.imgStyle=g("transform",`rotateZ(${t}deg)`),e.toOrigin=!0,j(()=>{e.toOrigin=!1,e.showTip=!0},300)):D(),e.showTip=!0}function D(){e.isPassing=!0,e.endTime=new Date().getTime()}function h(){e.showTip=!1;const t=l(u);!t||(e.isPassing=!1,t.resume(),p())}const v=E();return v&&(v.resume=h),()=>{const{src:t}=i,{toOrigin:n,isPassing:r,startTime:s,endTime:c}=e,o=[];n&&o.push("to-origin");const S=(c-s)/1e3;return a("div",{class:"ir-dv"},[a("div",{class:"ir-dv-img__wrap",style:l(b)},[a("img",{src:t,onLoad:p,width:parseInt(i.width),class:o,style:e.imgStyle,onClick:()=>{h()}},null),e.showTip&&a("span",{class:["ir-dv-img__tip",e.isPassing?"success":"error"]},[e.isPassing?f("component.verify.time",{time:S.toFixed(1)}):f("component.verify.error")]),!e.showTip&&!e.draged&&a("span",{class:["ir-dv-img__tip","normal"]},[V("t('redoTip')")])]),a(k,W({class:"ir-dv-drag__bar",onMove:y,onEnd:R,onStart:w,ref:u},m(m({},T),i),{value:r,isSlot:!0}),null)])}}});export default F;
