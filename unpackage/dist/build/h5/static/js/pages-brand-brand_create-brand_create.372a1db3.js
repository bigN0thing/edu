(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-brand-brand_create-brand_create"],{"4f6f":function(n,t,a){var e=a("9260");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var r=a("4f06").default;r("bfd18c60",e,!0,{sourceMap:!1,shadowMode:!1})},6856:function(n,t,a){"use strict";a.r(t);var e=a("b4c1"),r=a("bc70");for(var i in r)"default"!==i&&function(n){a.d(t,n,function(){return r[n]})}(i);a("c596");var d=a("2877"),c=Object(d["a"])(r["default"],e["a"],e["b"],!1,null,"62f2c1e2",null);t["default"]=c.exports},9260:function(n,t,a){t=n.exports=a("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-62f2c1e2]{background-color:#f8f8f8}.tip[data-v-62f2c1e2]{padding:%?20?%;font-size:%?24?%}.btn-box[data-v-62f2c1e2]{margin-top:%?60?%}.brand-create[data-v-62f2c1e2]{background-color:#fff;padding:%?20?%}.brand-create .title[data-v-62f2c1e2]{font-size:%?35?%}.brand-create .title.required[data-v-62f2c1e2]:after{content:"*";color:#dd524d}.brand-create .brand-name[data-v-62f2c1e2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:%?20?%}.brand-create .brand-name .name[data-v-62f2c1e2]{background-color:silver;padding:%?2?% %?10?%;border-radius:%?15?%}.brand-create .brand-name .del[data-v-62f2c1e2]{color:#fff;background-color:silver;border-radius:50%;height:%?50?%;width:%?50?%;line-height:1.6;text-align:center}.brand-create .industry .input[data-v-62f2c1e2]{border:%?1?% solid #333;padding:%?2?% %?6?%;min-height:%?46?%}.sure-btn[data-v-62f2c1e2]{width:%?400?%;font-size:%?30?%;background-color:#f6375b;color:#fff}body.?%PAGE?%[data-v-62f2c1e2]{background-color:#f8f8f8}',""])},b4c1:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"brand-create"},[a("v-uni-view",{staticClass:"brand-info"},[a("v-uni-text",{staticClass:"title"},[n._v("我的品牌(简称)")]),a("v-uni-view",{staticClass:"brand-name"},[a("v-uni-text",{staticClass:"name"},[n._v(n._s(n.brand))]),a("v-uni-text",{staticClass:"iconfont del",on:{click:function(t){t=n.$handleEvent(t),n.clear(t)}}},[n._v("")])],1)],1),a("v-uni-view",{staticClass:"industry"},[a("v-uni-text",{staticClass:"title required"},[n._v("选择行业")]),a("v-uni-view",{staticClass:"input",on:{click:function(t){t=n.$handleEvent(t),n.choseIndustry(t)}}},[n._v(n._s(n.industry?n.industry.name:"请选择行业"))])],1)],1),a("v-uni-view",{staticClass:"btn-box"},[a("v-uni-button",{staticClass:"sure-btn",attrs:{loading:n.loading},on:{click:function(t){t=n.$handleEvent(t),n.submit(t)}}},[n._v("确定")])],1)],1)},r=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return r})},bc70:function(n,t,a){"use strict";a.r(t);var e=a("fd89"),r=a.n(e);for(var i in e)"default"!==i&&function(n){a.d(t,n,function(){return e[n]})}(i);t["default"]=r.a},c596:function(n,t,a){"use strict";var e=a("4f6f"),r=a.n(e);r.a},fd89:function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{brand:"",industry:{},loading:!1,from:""}},onLoad:function(n){var t=this;this.brand=n.brand_name,this.from=n.from,this.brand||uni.redirectTo({url:"/pages/brand/new_brand/new_brand"}),this.$http.auth("industry_list",{id:n.industry_id}).then(function(n){t.industry=n.data.data}).catch(function(n){})},methods:{submit:function(){var t=this;this.loading||(this.industry?(this.loading=!0,this.$http.auth("new_brand",{name:this.brand,industry_id:this.industry.id}).then(function(a){t.loading=!1,n.toast("提交成功",function(){"create"!==t.from?uni.redirectTo({url:"/pages/brand/brand_select/brand_select"}):uni.redirectTo({url:"/pages/card/card_create/card_create"})})}).catch(function(n){})):n.toast("请选择行业"))},choseIndustry:function(){uni.navigateTo({url:"/pages/brand/industry/industry?brand_name=".concat(this.brand)})},clear:function(){uni.redirectTo({url:"/pages/brand/new_brand/new_brand"})}}};t.default=a}).call(this,a("c8ba"))}}]);