"use strict";(self["webpackChunkmusic"]=self["webpackChunkmusic"]||[]).push([[43],{6043:function(t,s,i){i.r(s),i.d(s,{default:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"out"},t._l(t.listdata,(function(i,e){return s("div",{key:e,staticClass:"li"},[s("div",{staticClass:"name",on:{click:function(s){return t.changeShow(i.name,i.func)}}},[t._v(t._s(i.name))]),s("transition",{attrs:{name:"siderChild"}},[s("siderBar",{directives:[{name:"show",rawName:"v-show",value:t.isShowArr[e]?.show&&i.child,expression:"isShowArr[index]?.show && item.child"}],attrs:{listdata:i.child}})],1)],1)})),0)},r=[],a={name:"siderBar",data(){return{showChild:!1,isShowArr:[]}},computed:{isShow(){return(this.listdata||[]).map((t=>{let s={show:!1,title:""};return s.title=t.name,s}))}},watch:{},methods:{changeShow(t,s=this.kong){this.isShowArr.forEach((s=>{s.title==t&&(s.show=!s.show)})),s()},kong(){}},props:{listdata:{type:Array,require:!1}},components:{},mounted(){(this.listdata||[]).forEach(((t,s)=>{let i={show:!1,title:""};i.title=t.name,this.$set(this.isShowArr,s,i)}))}},n=a,h=i(1001),o=(0,h.Z)(n,e,r,!1,null,"18fe8f3e",null),l=o.exports}}]);
//# sourceMappingURL=43.34f2a8d8.js.map