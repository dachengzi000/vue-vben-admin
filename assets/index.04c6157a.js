import{d as n,cp as t,cq as d,o as a,i as o,bw as i,cH as r}from"./index.de7a3c72.js";var e=n({name:"House",props:{size:{type:Number,default:600}},setup(){return{}}}),m=`.house-wrap[data-v-ccdee7b8] {
  position: relative;
  width: 600px;
  height: 600px;
  transform: scale(0.5);
}
.house-wrap .house[data-v-ccdee7b8] {
  position: absolute;
  position: relative;
  top: 50%;
  left: 50%;
  display: flex;
  width: 400px;
  height: 300px;
  transform: translateX(-50%) translateY(-13%);
  justify-content: center;
  perspective: 200px;
}
.house-wrap .floor[data-v-ccdee7b8] {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 95%;
  height: 30px;
  background-color: #e1f6fd;
  border: 4px solid #314b70;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-shadow: inset 4px 4px 0 #fffdff;
  justify-content: center;
}
.house-wrap .floor[data-v-ccdee7b8]::before,
.house-wrap .floor[data-v-ccdee7b8]::after {
  position: absolute;
  bottom: 0;
  width: 32%;
  height: 60%;
  background-image: linear-gradient(to bottom, #e0f5fc 50%, #aac4d0 50%);
  border-top: 4px solid #314b70;
  border-right: 4px solid #314b70;
  border-left: 4px solid #314b70;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  content: '';
  box-shadow: 4px 0 0 #aac4d0;
}
.house-wrap .floor[data-v-ccdee7b8]::after {
  top: 0;
  width: 25%;
  height: 40%;
  border-top: none;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.house-wrap .wall[data-v-ccdee7b8] {
  position: absolute;
  bottom: 30px;
  display: flex;
  width: 91%;
  height: 175px;
  overflow: hidden;
  background: #c3e0e7;
  border-right: 4px solid #314b70;
  border-left: 4px solid #314b70;
  justify-content: space-between;
  align-items: flex-end;
}
.house-wrap .window[data-v-ccdee7b8] {
  position: relative;
  width: 34%;
  height: 125px;
  background: #aac4d0;
  border-top: 4px solid #314b70;
  border-right: 4px solid #314b70;
  border-bottom: none;
  border-left: none;
  border-top-right-radius: 8px;
  box-shadow: inset 0 4px 2px #e0f5fc;
}
.house-wrap .window[data-v-ccdee7b8]::before {
  position: absolute;
  top: 6%;
  left: 0;
  width: 94%;
  height: 88%;
  background-image: linear-gradient(to top, #f3f6fa 47%, #9ab2d3 47%, #9ab2d3 50%, #f3f6fa 50%);
  border-top: 4px solid #314b70;
  border-right: 4px solid #314b70;
  border-bottom: 4px solid #314b70;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  content: '';
}
.house-wrap .window[data-v-ccdee7b8]::after {
  position: absolute;
  top: 19%;
  left: 20%;
  width: 30px;
  height: 40px;
  background-color: #f9aabe;
  border: 4px solid #9ab2d3;
  content: '';
}
.house-wrap .window[data-v-ccdee7b8]:nth-of-type(3) {
  border-top: none;
  border-right: 4px solid #314b70;
  border-bottom: 4px solid #314b70;
  border-left: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 8px;
  transform: rotateZ(180deg);
  box-shadow: inset 0 -4px 2px #e0f5fc;
}
.house-wrap .window[data-v-ccdee7b8]:nth-of-type(3)::after {
  content: none;
}
.house-wrap .door[data-v-ccdee7b8] {
  display: flex;
  width: 20%;
  height: 130px;
  padding-left: 8px;
  background-color: #ffc26b;
  border: 4px solid #314b70;
  border-bottom: none;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: inset 3px 3px #ffe0ad, inset -10px -8px #ffad61, 4px 0 #aac4d0;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}
.house-wrap .door__square[data-v-ccdee7b8] {
  width: 85%;
  height: 47px;
  border: 4px solid #314b70;
  border-radius: 4px;
  box-shadow: inset 3px 3px #ffe0ad;
}
.house-wrap .door__line[data-v-ccdee7b8] {
  width: 25%;
  height: 4px;
  background: #314b70;
  border-radius: 4px;
}
.house-wrap .top[data-v-ccdee7b8] {
  position: absolute;
  width: 82%;
  height: 30px;
  background-color: #aac4d0;
  border: 4px solid #314b70;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-shadow: inset 4px 4px 0 #e1f6fd;
}
.house-wrap .circle[data-v-ccdee7b8] {
  position: absolute;
  top: -10%;
  display: flex;
  width: 115px;
  height: 115px;
  background-color: #e0f5fc;
  border: 4px solid #314b70;
  border-radius: 50%;
  content: '';
  box-shadow: inset 4px 4px 0 #fffdff, inset 4px -4px 0 #fffdff, inset -4px 4px 0 #fffdff, inset -4px -4px 0 #fffdff;
  justify-content: center;
  align-items: center;
}
.house-wrap .circle[data-v-ccdee7b8]::before,
.house-wrap .circle[data-v-ccdee7b8]::after {
  position: absolute;
  top: 35%;
  width: 70%;
  height: 4px;
  background-color: #314b70;
  content: '';
}
.house-wrap .circle[data-v-ccdee7b8]::after {
  top: 20%;
  width: 35%;
}
.house-wrap .plastic[data-v-ccdee7b8] {
  position: absolute;
  top: 30%;
  z-index: 100;
  width: 100%;
  height: 30px;
  overflow: hidden;
}
.house-wrap .plastic__g[data-v-ccdee7b8] {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  transform: translateY(-22px);
}
.house-wrap .plastic__item[data-v-ccdee7b8] {
  width: 43px;
  height: 43px;
  margin-bottom: 4px;
  border: 3px solid #314b70;
  border-radius: 50%;
  box-shadow: 0 4px 0 #aac4d0;
}
.house-wrap .plastic__item[data-v-ccdee7b8]:nth-child(odd) {
  background: #0792d9;
  box-shadow: 0 4px 0 #aac4d0, inset 4px 4px 0 #66c8fa;
}
.house-wrap .plastic__item[data-v-ccdee7b8]:nth-child(even) {
  background: #fffdff;
}
.house-wrap .plastic__item[data-v-ccdee7b8]:nth-of-type(1),
.house-wrap .plastic__item[data-v-ccdee7b8]:nth-last-of-type(1) {
  width: 45px;
  height: 45px;
  box-shadow: none;
  box-shadow: inset 4px 4px 0 #66c8fa;
}
.house-wrap .plastic__item[data-v-ccdee7b8]:nth-of-type(5) {
  width: 45px;
  height: 45px;
}
.house-wrap .line[data-v-ccdee7b8] {
  position: absolute;
  top: 15px;
  display: flex;
  width: 90%;
  height: 85px;
  background-color: #e1f6fd;
  border-right: 4px solid #314b70;
  border-bottom: 4px solid #314b70;
  border-left: 4px solid #314b70;
  border-radius: 4px;
  transform: rotateX(25deg);
  transform-style: preserve-3d;
}
.house-wrap .line__item[data-v-ccdee7b8] {
  height: 100%;
  flex-grow: 1;
  border-right: 4px solid #314b70;
}
.house-wrap .line__item[data-v-ccdee7b8]:nth-child(odd) {
  background: #00affa;
  box-shadow: inset 4px 4px 0 #66c8fa;
}
.house-wrap .line__item[data-v-ccdee7b8]:nth-child(even) {
  background: #fffdff;
}
.house-wrap .line__item[data-v-ccdee7b8]:nth-last-of-type(1) {
  border-right: none;
}
.house-wrap .line__item[data-v-ccdee7b8]:nth-child(4),
.house-wrap .line__item[data-v-ccdee7b8]:nth-child(5),
.house-wrap .line__item[data-v-ccdee7b8]:nth-child(6) {
  border-top: 6px solid #314b70;
}
.house-wrap .tree[data-v-ccdee7b8] {
  position: absolute;
  bottom: 19%;
  left: 10%;
  display: flex;
  width: 100px;
  height: 165px;
  background-color: #00d398;
  border: 4px solid #314b70;
  border-radius: 50px;
  box-shadow: inset 4px 0 0 #77e4c6, inset -4px 0 0 #00a073;
  -webkit-animation: tree-ccdee7b8 1s linear alternate infinite;
          animation: tree-ccdee7b8 1s linear alternate infinite;
  justify-content: center;
  transform-origin: 0% 100%;
}
.house-wrap .tree__item[data-v-ccdee7b8] {
  position: absolute;
  bottom: -80px;
  width: 4px;
  height: 140px;
  background: #314b70;
}
.house-wrap .tree__item[data-v-ccdee7b8]:nth-of-type(2) {
  bottom: 80px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 0 0 8px #77e4c6;
}
.house-wrap .tree__item[data-v-ccdee7b8]:nth-of-type(2)::before {
  position: absolute;
  bottom: -45px;
  left: -30px;
  width: 20px;
  height: 35px;
  background-color: #77e4c6;
  border-radius: 15px;
  content: '';
}
.house-wrap .tree__item[data-v-ccdee7b8]:nth-of-type(3) {
  bottom: 20px;
  left: 36%;
  width: 4px;
  height: 30px;
  background-color: #314b70;
  transform: rotateZ(-45deg);
}
.house-wrap .dot[data-v-ccdee7b8] {
  position: absolute;
  bottom: 38px;
  width: 100%;
  height: 4px;
  background-image: linear-gradient(to right, #314b70 10%, transparent 10%, transparent 11%, #314b70 11%, #314b70 85%, transparent 85%, transparent 86%, #314b70 86%);
}
.house-wrap .bush__item[data-v-ccdee7b8] {
  position: absolute;
  bottom: 40px;
  left: 18%;
  width: 80px;
  height: 60px;
  background-color: #00d398;
  border: 1px solid red;
  border: 4px solid #314b70;
  border-bottom: none;
  border-top-right-radius: 100px;
  border-top-left-radius: 50px;
  box-shadow: inset 4px 0 0 #77e4c6, inset -4px 0 0 #00a073;
  -webkit-animation: bush-ccdee7b8 2s alternate infinite;
          animation: bush-ccdee7b8 2s alternate infinite;
  transform-origin: bottom center;
}
.house-wrap .bush__item[data-v-ccdee7b8]:nth-of-type(2) {
  left: 13%;
  width: 50px;
  height: 40px;
  border-top-right-radius: 10px;
  border-top-left-radius: 50px;
  animation: tree-ccdee7b8 2s alternate reverse infinite 0.5s;
}
.house-wrap .bush__item[data-v-ccdee7b8]::before {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  background: #77e4c6;
  border-radius: 50%;
  content: '';
}
.house-wrap .cloud[data-v-ccdee7b8] {
  position: absolute;
  top: 200px;
  left: 60px;
  display: flex;
  justify-content: center;
  width: 85px;
  height: 20px;
  border-bottom: 4px solid #e1e8f2;
  -webkit-animation: cloud-ccdee7b8 4s infinite alternate;
          animation: cloud-ccdee7b8 4s infinite alternate;
}
.house-wrap .cloud[data-v-ccdee7b8]:nth-of-type(2) {
  top: 150px;
  left: 50%;
  animation: cloud-ccdee7b8 4s infinite reverse alternate 0.5s;
}
.house-wrap .cloud[data-v-ccdee7b8]:nth-of-type(3) {
  top: 250px;
  left: 80%;
  -webkit-animation: cloud-ccdee7b8 4s ease infinite alternate 0.75s;
          animation: cloud-ccdee7b8 4s ease infinite alternate 0.75s;
}
.house-wrap .cloud__item[data-v-ccdee7b8] {
  position: relative;
  border-top: 20px solid #e1e8f2;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #e1e8f2;
  border-radius: 50%;
  transform: rotateZ(45deg);
}
.house-wrap .cloud__item[data-v-ccdee7b8]:nth-of-type(2) {
  margin-top: 5px;
  margin-left: -7px;
  border-top: 15px solid #e1e8f2;
  border-right: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid #e1e8f2;
}
.house-wrap .bird[data-v-ccdee7b8] {
  position: absolute;
  right: 10%;
  bottom: 40%;
  z-index: -1;
  width: 20px;
  height: 20px;
  border-top: 4px solid #becde2;
  border-left: 4px solid #becde2;
  transform: rotateZ(-135deg);
  -webkit-animation: bird-ccdee7b8 1s ease alternate infinite;
          animation: bird-ccdee7b8 1s ease alternate infinite;
}
.house-wrap .bird[data-v-ccdee7b8]:nth-of-type(2) {
  right: 20%;
  bottom: 30%;
  width: 15px;
  height: 15px;
}
@-webkit-keyframes bird-ccdee7b8 {
0% {
    transform: scaleY(0.7) rotateZ(-135deg) translateX(0) translateY(0) skew(-10deg, -10deg);
}
100% {
    transform: scaleY(1) rotateZ(-135deg) translateX(50%) translateY(50%) skew(-10deg, -10deg);
}
}
@keyframes bird-ccdee7b8 {
0% {
    transform: scaleY(0.7) rotateZ(-135deg) translateX(0) translateY(0) skew(-10deg, -10deg);
}
100% {
    transform: scaleY(1) rotateZ(-135deg) translateX(50%) translateY(50%) skew(-10deg, -10deg);
}
}
@-webkit-keyframes tree-ccdee7b8 {
0% {
    transform: scaleY(1);
}
100% {
    transform: scaleY(0.975);
}
}
@keyframes tree-ccdee7b8 {
0% {
    transform: scaleY(1);
}
100% {
    transform: scaleY(0.975);
}
}
@-webkit-keyframes bush-ccdee7b8 {
0% {
    transform: skewX(-2deg);
}
100% {
    transform: skewX(5deg);
}
}
@keyframes bush-ccdee7b8 {
0% {
    transform: skewX(-2deg);
}
100% {
    transform: skewX(5deg);
}
}
@-webkit-keyframes cloud-ccdee7b8 {
0% {
    transform: translateX(-10%);
}
100% {
    transform: translateX(20%);
}
}
@keyframes cloud-ccdee7b8 {
0% {
    transform: translateX(-10%);
}
100% {
    transform: translateX(20%);
}
}
`;const s=i("data-v-ccdee7b8");t("data-v-ccdee7b8");const c={class:"house-wrap"},b=r('<div class="house" data-v-ccdee7b8><div class="floor" data-v-ccdee7b8></div><div class="wall" data-v-ccdee7b8><div class="window" data-v-ccdee7b8></div><div class="door" data-v-ccdee7b8><div class="door__square" data-v-ccdee7b8></div><div class="door__line" data-v-ccdee7b8></div><div class="door__square" data-v-ccdee7b8></div></div><div class="window" data-v-ccdee7b8></div></div><div class="top" data-v-ccdee7b8></div><div class="circle" data-v-ccdee7b8></div><div class="plastic" data-v-ccdee7b8><div class="plastic__g" data-v-ccdee7b8><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div><div class="plastic__item" data-v-ccdee7b8></div></div></div><div class="line" data-v-ccdee7b8><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div><div class="line__item" data-v-ccdee7b8></div></div></div><div class="clouds" data-v-ccdee7b8><div class="cloud" data-v-ccdee7b8><div class="cloud__item" data-v-ccdee7b8></div><div class="cloud__item" data-v-ccdee7b8></div></div><div class="cloud" data-v-ccdee7b8><div class="cloud__item" data-v-ccdee7b8></div><div class="cloud__item" data-v-ccdee7b8></div></div><div class="cloud" data-v-ccdee7b8><div class="cloud__item" data-v-ccdee7b8></div><div class="cloud__item" data-v-ccdee7b8></div></div><div class="bird" data-v-ccdee7b8></div></div><div class="birds" data-v-ccdee7b8><div class="bird" data-v-ccdee7b8></div><div class="bird" data-v-ccdee7b8></div></div><div class="tree" data-v-ccdee7b8><div class="tree__item" data-v-ccdee7b8></div><div class="tree__item" data-v-ccdee7b8></div><div class="tree__item" data-v-ccdee7b8></div></div><div class="bush" data-v-ccdee7b8><div class="bush__item" data-v-ccdee7b8></div><div class="bush__item" data-v-ccdee7b8></div></div><div class="dot" data-v-ccdee7b8></div>',6);d();const p=s((l,h,v,f,x,u)=>(a(),o("div",c,[b])));e.render=p,e.__scopeId="data-v-ccdee7b8";export default e;
