import{d as r,aN as l,a0 as p,h as c,o as m,i as f,j as o,l as u,T as j,bw as b}from"./index.de7a3c72.js";import{a as g}from"./index.2419be78.js";import{b as v}from"./index.253c3e5f.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.b01ba49c.js";import"./index.b2e7aa8c.js";import"./index.4e4cdfc2.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./ArrowLeftOutlined.ddcf4a87.js";import"./useAttrs.5fb4b160.js";import"./isEqual.42834150.js";import"./useHeaderSetting.0d239ac1.js";import"./SettingOutlined.198ffb5d.js";var t=r({name:"SelectItem",components:{Select:g},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:n}=l("setting-select-item"),i=p(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function s(a){e.event&&v(e.event,a)}return{prefixCls:n,handleChange:s,getBindValue:i}}}),G=`.vben-setting-select-item[data-v-e2504774] {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.vben-setting-select-item-select[data-v-e2504774] {
  width: 126px;
}
`;const h=b("data-v-e2504774"),S=h((e,n,i,s,a,_)=>{const d=c("Select");return m(),f("div",{class:e.prefixCls},[o("span",null,u(e.title),1),o(d,j(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)});t.render=S,t.__scopeId="data-v-e2504774";export default t;
