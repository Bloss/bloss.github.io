(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{93:function(t,a,e){"use strict";e.r(a);var s=e(3),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"打包后访问不到静态资源目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包后访问不到静态资源目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包后访问不到静态资源目录")]),t._v(" "),e("p",[t._v("原因: 打包后以相对路径去访问静态资源目录, 导致没有找到资源")]),t._v(" "),e("p",[t._v("解决方案:\n"),e("code",[t._v("index.html")]),t._v("中加入下面这一行")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),t._v(" "),e("blockquote",[e("p",[t._v("HTML ")]),e("base"),t._v(" 元素 指定用于一个文档中包含的所有相对URL的基本URL。一份中只能有一个"),e("base"),t._v("元素。 --- "),e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/base",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),e("OutboundLink")],1),e("p")]),t._v(" "),e("h3",{attrs:{id:"使用-browserhistory-时-直接访问子路由-404"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-browserhistory-时-直接访问子路由-404","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 browserHistory 时, 直接访问子路由 404")]),t._v(" "),e("p",[t._v("原因: 当直接访问或者刷新子路由时, 浏览器会向服务器请求 "),e("code",[t._v("example.com/child")]),t._v(", 服务器\n会去根目录下找 "),e("code",[t._v("child.html")]),t._v(" 文件, 但是我们服务器实际上并没有这样的物理路径文件, 因为\n我们的内容都是通过 "),e("code",[t._v("React-Router")]),t._v(" 渲染出来的, 所以报了 "),e("code",[t._v("404 error")])]),t._v(" "),e("p",[t._v("解决方案:\n这里给出一个 "),e("code",[t._v("nginx")]),t._v(" 的方案:\n既然我们知道了出错的原因, 自然而然能想到一个方案, 就是让所有的请求都指向 "),e("code",[t._v("index.html")]),t._v(",\n子路由转交给 "),e("code",[t._v("React-Router")]),t._v(" 处理")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("当然也有其他的一些解决方案, 比如使用 "),e("code",[t._v("webpack-dev-server")]),t._v(" 的服务器, 加上 "),e("code",[t._v("–history-api-fallback")]),t._v(" 参数.")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("Node")]),t._v(" 服务器的也有对应解决方案, 这里也不做赘述了.")])])},[],!1,null,null,null);r.options.__file="webpack-common-solution.md";a.default=r.exports}}]);