webpackJsonp([17],{XfaP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("gyMJ"),r=n("BTaQ"),i={components:{Button:r.Button,Table:r.Table,Page:r.Page,Form:r.Form,FormItem:r.FormItem,Input:r.Input},data:function(){var t=this;return{loading:!0,columns:[{title:"文章名称",key:"title",render:function(t,e){return t("a",{attrs:{href:"/"+e.row.category+"/"+e.row.slug,target:"_blank"}},e.row.title)}},{title:"作者",key:"title",render:function(t,e){return t("a",{attrs:{href:e.row.url,target:"_blank"}},e.row.author)}},{title:"IP",key:"ip",render:function(t,e){return t("span",e.row.ip)}},{title:"邮箱",key:"email",render:function(t,e){return t("span",e.row.email)}},{title:"评论",key:"text"},{title:"显示",key:"view",width:100,align:"center",render:function(t,e){return t("Icon",{props:{type:e.row.status==CONST.S_BS_PUBLISH.v?"checkmark":"close"},style:{color:e.row.status==CONST.S_BS_PUBLISH.v?"#19be6b":"#ed3f14"}})}},{title:"时间",key:"create_time",width:200,align:"center",render:function(t,e){return e.row.create_time?t("span",new Date(1e3*e.row.create_time).toLocaleString()):""}},{title:"操作",key:"action",width:150,align:"center",render:function(e,n){return e("div",[e("Button",{props:{type:"primary",size:"small",icon:"edit"},style:{marginRight:"5px"},on:{click:function(){t.$router.push({path:"/comment/save",query:{id:n.row.id}})}}}),e("Button",{props:{type:"error",size:"small",icon:"trash-a"},on:{click:function(){confirm("确定要删除吗？")&&t.delete(n.row.id,n.index)}}})])}}],data:{},map:{page:1,key:"",all:1,pageSize:10}}},methods:{getList:function(){var t=this;this.loading=!0,a.b.getList(this.map).then(function(e){t.data=e.data,t.loading=!1})},delete:function(t,e){var n=this;a.b.delete(t).then(function(t){n.data.data.splice(e,1)})},changePage:function(t){this.map.page=t,this.getList()}},mounted:function(){this.getList()}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Form",{ref:"formInline",staticClass:"search",attrs:{model:t.map,inline:""}},[n("FormItem",[n("Input",{attrs:{type:"text",placeholder:"关键字"},model:{value:t.map.key,callback:function(e){t.$set(t.map,"key",e)},expression:"map.key"}})],1),t._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("查询")])],1)],1),t._v(" "),n("Table",{attrs:{border:"",loading:t.loading,columns:t.columns,data:t.data.data}}),t._v(" "),n("Page",{staticClass:"page",attrs:{total:t.data.count,"page-size":t.data.pagesize,"show-total":""},on:{"on-change":t.changePage}})],1)},staticRenderFns:[]},l=n("VU/8")(i,o,!1,null,null,null);e.default=l.exports}});