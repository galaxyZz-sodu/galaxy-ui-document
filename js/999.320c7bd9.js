"use strict";(self["webpackChunkgalaxy_ui"]=self["webpackChunkgalaxy_ui"]||[]).push([[999],{7999:function(a,t,e){e.r(t),e.d(t,{default:function(){return g}});var l=function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"title"},[a._v("分页")]),t("div",{staticClass:"secondTitle"},[a._v("基础用法")]),t("g-pagination",{attrs:{total:200,defaultPageSize:10,defaultCurrentPage:a.currentPage},on:{change:a.pagiChange}}),t("Code",{attrs:{js:a.basicUsageJs,html:a.basicUsageHTML}}),t("div",{staticClass:"tabelTitle"},[a._v(" pagination事件 ")]),t("g-table",{staticClass:"table",attrs:{data:a.tableData}},[t("g-table-column",{attrs:{prop:"parameter",label:"参数",width:170}}),t("g-table-column",{attrs:{prop:"explain",label:"解释",width:160}}),t("g-table-column",{attrs:{prop:"type",label:"数据类型",width:100}}),t("g-table-column",{attrs:{prop:"select",label:"可选值",width:100}}),t("g-table-column",{attrs:{prop:"default",label:"默认值",width:100}})],1),t("div",{staticClass:"tabelTitle"},[a._v(" pagination事件 ")]),t("g-table",{staticClass:"table",attrs:{data:a.event}},[t("g-table-column",{attrs:{prop:"eventName",label:"参数",width:100}}),t("g-table-column",{attrs:{prop:"explain",label:"解释",width:400}}),t("g-table-column",{attrs:{prop:"callBackPara",label:"回调参数",width:100}})],1)],1)},s=[],n={data(){return{basicUsageHTML:'<p>&lt;<span style="color: rgb(224, 108, 117);">g-pagination</span> :<span style="color: rgb(209, 154, 102);">total</span>="<span style="color: rgb(209, 154, 102);">200</span>" :<span style="color: rgb(209, 154, 102);">defaultPageSize</span>="<span style="color: rgb(209, 154, 102);">10</span>" :<span style="color: rgb(209, 154, 102);">defaultCurrentPage</span>="<span style="color: rgb(224, 108, 117);">5</span>" @<span style="color: rgb(209, 154, 102);">change</span>="<span style="color: rgb(224, 108, 117);">pagiChange</span>"&gt;&lt;/<span style="color: rgb(224, 108, 117);">g-pagination</span>&gt;</p>',basicUsageJs:'<p><span style="color: rgb(224, 108, 117);">methods</span>: {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(97, 175, 239);">pagiChange</span>(<span style="color: rgb(224, 108, 117);">page</span>) {</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span style="color: rgb(229, 192, 123);">console</span>.<span style="color: rgb(97, 175, 239);">log</span>(<span style="color: rgb(224, 108, 117);">page</span>);</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>}</p>',currentPage:5,tableData:[{parameter:"total",explain:"数据总数",type:"Number",select:"-",default:"100"},{parameter:"defaultPageSize",explain:"默认每页数据的条数",type:"Number",select:"-",default:"10"},{parameter:"defaultCurrentPage",explain:"默认当前页数",type:"Number",select:"-",default:"1"}],event:[{eventName:"change",explain:"当页码发生改变时调用",callBackPara:"改变后的页码"}]}},methods:{pagiChange(a){console.log(a)}}},p=n,r=e(1001),o=(0,r.Z)(p,l,s,!1,null,"636e4434",null),g=o.exports}}]);
//# sourceMappingURL=999.320c7bd9.js.map