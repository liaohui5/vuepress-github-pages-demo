(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("利用 github pages 部署 vuepress 项目")]),s._v(" "),t("h2",{attrs:{id:"部署步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署步骤"}},[s._v("#")]),s._v(" 部署步骤")]),s._v(" "),t("h3",{attrs:{id:"_1-新建编译部署脚本-publish-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-新建编译部署脚本-publish-sh"}},[s._v("#")]),s._v(" 1.新建编译部署脚本 "),t("code",[s._v("publish.sh")])]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹(注意目录路径)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .vuepress/dist\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意修改用户名和分支名(有的人默认分支是master而不是main)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 而且需要再 github 中存在这个仓库并且有访问权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最终会部署到: https://<USER_NAME>.github.io/<REPO_NAME>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://github.com/liaohui5/vuepress-github-pages-demo.git main:gh-pages\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写好文档之后, 执行这个脚本")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-新建仓库操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-新建仓库操作"}},[s._v("#")]),s._v(" 2.新建仓库操作")]),s._v(" "),t("ol",[t("li",[s._v("创建仓库")]),s._v(" "),t("li",[s._v("在 "),t("code",[s._v(".vitepress/config.js")]),s._v(" 中设置 "),t("code",[s._v("base")]),s._v(" 选项(和仓库名同名)")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/liaohui5/images/main/images/202209302347575.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_3-github-pages-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-github-pages-设置"}},[s._v("#")]),s._v(" 3.github pages 设置")])])}),[],!1,null,null,null);t.default=e.exports}}]);