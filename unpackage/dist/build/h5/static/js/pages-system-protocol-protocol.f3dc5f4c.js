(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-protocol-protocol"],{2308:function(n,t,o){"use strict";o.r(t);var r=o("f508"),e=o("5efb");for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);o("fb22");var u=o("2877"),c=Object(u["a"])(e["default"],r["a"],r["b"],!1,null,"211eba13",null);t["default"]=c.exports},5109:function(n,t,o){var r=o("d493");"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var e=o("4f06").default;e("164c45e3",r,!0,{sourceMap:!1,shadowMode:!1})},"57e0":function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{protocol:""}},onLoad:function(){var n=this;this.$store.dispatch("loadSystemInfo").then(function(t){t&&t.protocol&&(n.protocol=t.protocol)})}};t.default=r},"5efb":function(n,t,o){"use strict";o.r(t);var r=o("57e0"),e=o.n(r);for(var a in r)"default"!==a&&function(n){o.d(t,n,function(){return r[n]})}(a);t["default"]=e.a},d493:function(n,t,o){t=n.exports=o("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-211eba13]{padding:%?30?% %?20?%}',""])},f508:function(n,t,o){"use strict";var r=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("v-uni-view",[o("v-uni-rich-text",{attrs:{nodes:n.protocol}})],1)},e=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return e})},fb22:function(n,t,o){"use strict";var r=o("5109"),e=o.n(r);e.a}}]);