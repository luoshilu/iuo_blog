webpackJsonp([15],{oEX0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("gyMJ"),l=a("BTaQ"),s={components:{Form:l.Form,FormItem:l.FormItem,Input:l.Input,Button:l.Button,Tabs:l.Tabs,TabPane:l.TabPane,RadioGroup:l.RadioGroup,Radio:l.Radio},data:function(){return{site:{},email:{secure:1},qiniu:{},contact:{}}},methods:{get:function(){var t=this;o.c.getList().then(function(e){e.data.site&&(t.site=e.data.site),e.data.email&&(t.email=e.data.email),e.data.qiniu&&(t.qiniu=e.data.qiniu),e.data.contact&&(t.contact=e.data.contact)})},post:function(t,e){var a=this;console.log(t),o.c.update(t,e).then(function(t){0===t.errno&&a.$message.info("更新成功")})}},mounted:function(){this.get()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Tabs",[a("TabPane",{attrs:{label:"站点设置"}},[a("Form",{attrs:{model:t.site,"label-width":80}},[a("FormItem",{attrs:{label:"站点名称"}},[a("Input",{model:{value:t.site.title,callback:function(e){t.$set(t.site,"title",e)},expression:"site.title"}})],1),t._v(" "),a("FormItem",{attrs:{label:"站点logo"}},[a("Input",{model:{value:t.site.logo,callback:function(e){t.$set(t.site,"logo",e)},expression:"site.logo"}})],1),t._v(" "),a("FormItem",{attrs:{label:"站点favicon"}},[a("Input",{model:{value:t.site.ico,callback:function(e){t.$set(t.site,"ico",e)},expression:"site.ico"}})],1),t._v(" "),a("FormItem",{attrs:{label:"站点地址"}},[a("Input",{model:{value:t.site.url,callback:function(e){t.$set(t.site,"url",e)},expression:"site.url"}})],1),t._v(" "),a("FormItem",{attrs:{label:"cdn域名"}},[a("Input",{model:{value:t.site.cdn,callback:function(e){t.$set(t.site,"cdn",e)},expression:"site.cdn"}})],1),t._v(" "),a("FormItem",{attrs:{label:"关键词"}},[a("Input",{model:{value:t.site.keywords,callback:function(e){t.$set(t.site,"keywords",e)},expression:"site.keywords"}})],1),t._v(" "),a("FormItem",{attrs:{label:"站点描述"}},[a("Input",{model:{value:t.site.description,callback:function(e){t.$set(t.site,"description",e)},expression:"site.description"}})],1),t._v(" "),a("FormItem",{attrs:{label:"底部说明"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.site.footer,callback:function(e){t.$set(t.site,"footer",e)},expression:"site.footer"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.post("site",t.site)}}},[t._v("保存")])],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"邮箱设置"}},[a("Form",{attrs:{model:t.email,"label-width":80}},[a("FormItem",{attrs:{label:"服务器"}},[a("Input",{model:{value:t.email.host,callback:function(e){t.$set(t.email,"host",e)},expression:"email.host"}})],1),t._v(" "),a("FormItem",{attrs:{label:"端口"}},[a("Input",{model:{value:t.email.port,callback:function(e){t.$set(t.email,"port",e)},expression:"email.port"}})],1),t._v(" "),a("FormItem",{attrs:{label:"安全模式"}},[a("RadioGroup",{model:{value:t.email.secure,callback:function(e){t.$set(t.email,"secure",e)},expression:"email.secure"}},[a("Radio",{attrs:{label:0}},[t._v("否")]),t._v(" "),a("Radio",{attrs:{label:1}},[t._v("是")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"账号"}},[a("Input",{model:{value:t.email.user,callback:function(e){t.$set(t.email,"user",e)},expression:"email.user"}})],1),t._v(" "),a("FormItem",{attrs:{label:"密码"}},[a("Input",{model:{value:t.email.pass,callback:function(e){t.$set(t.email,"pass",e)},expression:"email.pass"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.post("email",t.email)}}},[t._v("保存")])],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"七牛配置"}},[a("Form",{attrs:{model:t.qiniu,"label-width":80}},[a("FormItem",{attrs:{label:"access_key"}},[a("Input",{model:{value:t.qiniu.access_key,callback:function(e){t.$set(t.qiniu,"access_key",e)},expression:"qiniu.access_key"}})],1),t._v(" "),a("FormItem",{attrs:{label:"secret_key"}},[a("Input",{model:{value:t.qiniu.secret_key,callback:function(e){t.$set(t.qiniu,"secret_key",e)},expression:"qiniu.secret_key"}})],1),t._v(" "),a("FormItem",{attrs:{label:"bucket"}},[a("Input",{model:{value:t.qiniu.bucket,callback:function(e){t.$set(t.qiniu,"bucket",e)},expression:"qiniu.bucket"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.post("qiniu",t.qiniu)}}},[t._v("保存")])],1)],1)],1),t._v(" "),a("TabPane",{attrs:{label:"联系方式"}},[a("Form",{attrs:{model:t.contact,"label-width":80}},[a("FormItem",{attrs:{label:"github"}},[a("Input",{model:{value:t.contact.github,callback:function(e){t.$set(t.contact,"github",e)},expression:"contact.github"}})],1),t._v(" "),a("FormItem",{attrs:{label:"qq"}},[a("Input",{model:{value:t.contact.qq,callback:function(e){t.$set(t.contact,"qq",e)},expression:"contact.qq"}})],1),t._v(" "),a("FormItem",{attrs:{label:"wechat"}},[a("Input",{model:{value:t.contact.wechat,callback:function(e){t.$set(t.contact,"wechat",e)},expression:"contact.wechat"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.post("contact",t.contact)}}},[t._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(s,i,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=15.2750222cf81c49439ed9.js.map