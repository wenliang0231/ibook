(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{506:function(t,a,s){"use strict";s.r(a);var e=s(33),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[s("code",[t._v("rewrite")]),t._v(" 常用于 "),s("code",[t._v("url")]),t._v(" 重写，以及重定向。准确来说 "),s("code",[t._v("rewrite")]),t._v(" 是作用于 "),s("code",[t._v("$request_uri")]),t._v("。")]),t._v(" "),s("p",[t._v("其实理解完修改的是 "),s("code",[t._v("$request_uri")]),t._v(" 部分即可理解，我之前是卡在这里了。")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[t._v("Syntax"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" regex replacement "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" —\nContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" permanent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" Chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chrome"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"flag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" flag")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("flag")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("last")]),t._v(" "),s("td",[t._v("使用更改的 URI 匹配新位置。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("break")]),t._v(" "),s("td",[t._v("停止处理当前的指令集。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("redirect")]),t._v(" "),s("td",[t._v("返回 302 （临时）重定向。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("permanent")]),t._v(" "),s("td",[t._v("返回 301 （永久）重定向。")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);