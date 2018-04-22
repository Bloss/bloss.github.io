(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{78:function(t,a,n){"use strict";n.r(a);var s=n(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h3",{attrs:{id:"作用域是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用域是什么")]),n("blockquote",[n("p",[t._v("作用域(scope)是指名字(name)与实体(entity)的绑定(binding)保持有效的那部分计算机程序 "),n("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BD%9C%E7%94%A8%E5%9F%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki")])])]),n("p",[n("strong",[t._v("作用域规定了如何查找变量")])]),n("h3",{attrs:{id:"词法作用域与动态作用域"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法作用域与动态作用域","aria-hidden":"true"}},[t._v("#")]),t._v(" 词法作用域与动态作用域")]),n("ul",[n("li",[n("p",[t._v("词法作用域的函数中遇到非形参非局部变量的时候，去函数定义的env中查询")])]),n("li",[n("p",[t._v("动态作用域的函数中遇到非形参非局部变量的时候，去函数调用的环境中查询")])])]),n("p",[t._v("JS采用的是词法作用域(静态作用域)")]),n("p",[t._v("举个栗子：")]),n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("bar")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("foo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("bar")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])]),n("ol",[n("li",[n("p",[t._v("采用词法作用域\n执行 "),n("code",[t._v("foo")]),t._v(" 函数，"),n("code",[t._v("foo")]),t._v(" 函数内部没有查找到局部变量 value，则在定义函数的环境中查找，value = 1，所以打印 1")])]),n("li",[n("p",[t._v("采用动态作用域("),n("code",[t._v("bash")]),t._v(")\n执行 "),n("code",[t._v("foo")]),t._v(" 函数，"),n("code",[t._v("foo")]),t._v(" 函数内部没有查找到局部变量 value，则从函数调用的作用域中查找，value = 2，所以打印 2")])])])])}],!1,null,null,null);a.default=o.exports}}]);