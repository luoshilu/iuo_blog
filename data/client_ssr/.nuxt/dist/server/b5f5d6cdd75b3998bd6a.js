exports.ids=[5],exports.modules={55:function(t,e,n){"use strict";n.r(e);var o=n(14),d={transition:"page",async asyncData({params:t,error:e}){let map={[t.type]:t.content},n={meta:"",posts:{data:[]}},d=await o.c.getList(map);return d.data&&(n.meta=d.data.meta,n.posts=d.data.contents),n},head(){return{title:`muster | ${this.meta.key}:${this.meta.value}`,meta:[{hid:"description",name:"description",content:`搜索与 ${this.meta.key} ${this.meta.value} 相关的文章，search posts of about ${this.meta.key} ${this.meta.value}.`}]}}},r=n(1),component=Object(r.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._ssrNode('<div class="main-content common-page clearfix">',"</div>",[t._ssrNode('<div class="common-item">',"</div>",[t._ssrNode((t.meta?'<div class="common-title">'+t._ssrEscape("\n        "+t._s(t.meta.key)+" : "+t._s(t.meta.value)+"\n      ")+"</div>":"\x3c!----\x3e")+" "),t._ssrNode('<div class="post-lists">',"</div>",[t._ssrNode('<div class="post-lists-body">',"</div>",t._l(t.posts.data,function(e){return t._ssrNode('<div class="post-list-item">',"</div>",[t._ssrNode('<div class="post-list-item-container">',"</div>",[t._ssrNode('<div class="item-label ">',"</div>",[t._ssrNode('<div class="item-title">',"</div>",[n("nuxt-link",{attrs:{to:"/content/"+e.category.slug+"/"+e.slug}},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"find-content",domProps:{innerHTML:t._s(e.content)}})])],1),t._ssrNode(' <div class="item-meta clearfix"><div class="item-meta-date">'+t._ssrEscape("\n                      "+t._s(t._f("moment")(1e3*e.create_time,"YYYY.MM.DD"))+"\n                  ")+"</div></div>")],2)])])}),0)])],2)])])},[],!1,null,null,"6ba63e95");e.default=component.exports}};
//# sourceMappingURL=b5f5d6cdd75b3998bd6a.js.map