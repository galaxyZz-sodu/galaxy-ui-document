"use strict";(self["webpackChunkgalaxy_ui"]=self["webpackChunkgalaxy_ui"]||[]).push([[130],{143:function(s,t,p){p.r(t),p.d(t,{default:function(){return o}});var e=function(){var s=this,t=s._self._c;return t("div",[t("div",{staticClass:"title"},[s._v(" 开关 ")]),t("div",{staticClass:"secondTitle"},[s._v(" 基础用法 ")]),t("g-switch",{model:{value:s.switchOpen,callback:function(t){s.switchOpen=t},expression:"switchOpen"}}),t("Code",{attrs:{js:s.basicUsageJs,html:s.basicUsageHTML}}),t("div",{staticClass:"secondTitle"},[s._v(" 设置开关两侧文本 ")]),t("g-switch",{attrs:{activeText:"开启",inactiveText:"关闭"},model:{value:s.switchOpen2,callback:function(t){s.switchOpen2=t},expression:"switchOpen2"}}),t("Code",{attrs:{js:s.textJs,html:s.textHTML}}),t("div",{staticClass:"secondTitle"},[s._v(" 开关事件 ")]),t("g-switch",{on:{change:s.swiChange},model:{value:s.switchOpen3,callback:function(t){s.switchOpen3=t},expression:"switchOpen3"}}),t("Code",{attrs:{js:s.eventJs,html:s.eventHTML}}),t("div",{staticClass:"tabelTitle"},[s._v(" switch参数 ")]),t("g-table",{staticClass:"table",attrs:{data:s.tableData}},[t("g-table-column",{attrs:{prop:"parameter",label:"参数",width:100}}),t("g-table-column",{attrs:{prop:"explain",label:"解释",width:200}}),t("g-table-column",{attrs:{prop:"type",label:"数据类型",width:100}}),t("g-table-column",{attrs:{prop:"select",label:"可选值",width:100}}),t("g-table-column",{attrs:{prop:"default",label:"默认值",width:100}})],1)],1)},n=[],a={data(){return{switchOpen:!1,switchOpen2:!1,switchOpen3:!1,basicUsageJs:'<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">switchOpen</span>: <span style="color: rgb(209, 154, 102);">false</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',basicUsageHTML:'<p>&lt;<span style="color: rgb(224, 108, 117);">g-switch</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">switchOpen</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-switch</span>&gt;</p>',textJs:'<p><span style="color: rgb(97, 175, 239);">data</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(198, 120, 221);">return</span> {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(224, 108, 117);">switchOpen2</span>: <span style="color: rgb(209, 154, 102);">false</span></p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',textHTML:'<p>&lt;<span style="color: rgb(224, 108, 117);">g-switch</span> <span style="color: rgb(209, 154, 102);">activeText</span>=<span style="color: rgb(152, 195, 121);">"开启"</span> <span style="color: rgb(209, 154, 102);">inactiveText</span>=<span style="color: rgb(152, 195, 121);">"关闭"</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">switchOpen2</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-switch</span>&gt;</p>',eventJs:'<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">swiChange</span>() {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(229, 192, 123);">this</span>.<span style="color: rgb(224, 108, 117);">switchOpen3</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',eventHTML:'<p>&lt;<span style="color: rgb(224, 108, 117);">g-switch</span> <span style="color: rgb(209, 154, 102);">v-model</span>="<span style="color: rgb(224, 108, 117);">switchOpen3</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">swiChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-switch</span>&gt;</p>',tableData:[{parameter:"v-model",explain:"绑定值",type:"Boolean",select:"true/false",default:"-"},{parameter:"activeText",explain:"打开文字描述",type:"String",select:"-",default:"-"},{parameter:"inactiveText",explain:"关闭文字描述",type:"String",select:"-",default:"-"},{parameter:"disabled",explain:"是否禁用",type:"Boolean",select:"true/false",default:"false"}]}},methods:{swiChange(){console.log(this.switchOpen3)}}},l=a,r=p(1001),c=(0,r.Z)(l,e,n,!1,null,"34768640",null),o=c.exports}}]);
//# sourceMappingURL=130.c505c7c6.js.map