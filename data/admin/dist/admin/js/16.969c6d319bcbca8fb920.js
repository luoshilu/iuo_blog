webpackJsonp([16],{nVCP:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("BTaQ"),m=r("gyMJ"),a={components:{Form:o.Form,FormItem:o.FormItem,Button:o.Button,RadioGroup:o.RadioGroup,Radio:o.Radio,Input:o.Input},data:function(){return{formItem:{id:"",text:"",status:99},ruleInline:{author:[{required:!0,message:"作者不能为空"}],email:[{required:!0,message:"邮箱不能为空"},{type:"email",message:"邮箱格式错误"}],url:[{required:!0,message:"地址不能为空"},{type:"url",message:"地址格式错误"}],text:[{required:!0,message:"留言内容不能为空"}]}}},methods:{post:function(){var t=this;this.$refs.formItem.validate(function(e){e?m.b.update(t.formItem.id,t.formItem).then(function(e){0==e.errno&&t.$router.push("/comment/list")}):t.$Message.error("请填写必要信息")})},get:function(t){var e=this;m.b.getInfo(t).then(function(t){e.formItem=t.data})}},mounted:function(){this.$route.query.id&&this.get(this.$route.query.id)}},s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Form",{ref:"formItem",attrs:{model:t.formItem,rules:t.ruleInline,"label-width":80}},[r("FormItem",{attrs:{label:"作者",prop:"author"}},[r("Input",{attrs:{type:"text"},model:{value:t.formItem.author,callback:function(e){t.$set(t.formItem,"author",e)},expression:"formItem.author"}})],1),t._v(" "),r("FormItem",{attrs:{label:"邮箱",prop:"email"}},[r("Input",{attrs:{type:"text"},model:{value:t.formItem.email,callback:function(e){t.$set(t.formItem,"email",e)},expression:"formItem.email"}})],1),t._v(" "),r("FormItem",{attrs:{label:"地址",prop:"url"}},[r("Input",{attrs:{type:"text"},model:{value:t.formItem.url,callback:function(e){t.$set(t.formItem,"url",e)},expression:"formItem.url"}})],1),t._v(" "),r("FormItem",{attrs:{label:"状态",prop:"status"}},[r("RadioGroup",{model:{value:t.formItem.status,callback:function(e){t.$set(t.formItem,"status",e)},expression:"formItem.status"}},[r("Radio",{attrs:{label:1}},[t._v("隐藏")]),t._v(" "),r("Radio",{attrs:{label:99}},[t._v("显示")])],1)],1),t._v(" "),r("FormItem",{attrs:{label:"内容",prop:"text"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"Enter something..."},model:{value:t.formItem.text,callback:function(e){t.$set(t.formItem,"text",e)},expression:"formItem.text"}})],1),t._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:t.post}},[t._v("提交")])],1)],1)},staticRenderFns:[]},u=r("VU/8")(a,s,!1,null,null,null);e.default=u.exports}});
//# sourceMappingURL=16.969c6d319bcbca8fb920.js.map