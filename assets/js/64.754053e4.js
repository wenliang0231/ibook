(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{565:function(s,t,a){"use strict";a.r(t);var n=a(33),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"进程与端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程与端口"}},[s._v("#")]),s._v(" 进程与端口")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ps 是 Process Status 的简写，可以通过 ps 来查看对应的进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# netstat 是 net status 的简写， 可以查看有哪些端口正在被占用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -lntup\n")])])]),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("blockquote",[a("p",[s._v("无法启动时增加 sudo")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接启动")]),s._v("\nnginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl 启动")]),s._v("\nsystemctl start nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx.service\n")])])]),a("h2",{attrs:{id:"停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止"}},[s._v("#")]),s._v(" 停止")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# normal quit")]),s._v("\nnginx -s quit\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# force stop")]),s._v("\nnginx -s stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl")]),s._v("\nsystemctl stop nginx.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kill pid")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 或")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 pid\n")])])]),a("h2",{attrs:{id:"重启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[s._v("#")]),s._v(" 重启")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# normal")]),s._v("\nnginx -s reload\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl")]),s._v("\nsystemctl restart nginx.service\n")])])]),a("h2",{attrs:{id:"启用安全组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用安全组"}},[s._v("#")]),s._v(" 启用安全组")]),s._v(" "),a("p",[s._v("上述的配置完成后可能依然无法访问，端口可能被阻挡了，如阿里云还需要配置安全组，放行对应的端口。")]),s._v(" "),a("p",[s._v("操作流程：")]),s._v(" "),a("p",[a("code",[s._v("登录")]),s._v(" > "),a("code",[s._v("控制台")]),s._v(" > "),a("code",[s._v("云服务器ECS（左侧）")]),s._v(" > "),a("code",[s._v("安全组")]),s._v(" > "),a("code",[s._v("配置规则")]),s._v(" > "),a("code",[s._v("添加安全组规则")]),s._v(" > "),a("code",[s._v("填充内容")]),s._v(" > "),a("code",[s._v("确定")])])])}),[],!1,null,null,null);t.default=e.exports}}]);