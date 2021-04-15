### BaseSegmentedControl 切换组件

自定义 BaseSegmentedControl 切换组件

**使用方式：**

在 script 中引用组件

```javascript
import BaseSegmentedControl from "@/components/base/base-segmented-control/base-segmented-control.vue";
export default {
    components: { BaseSegmentedControl }
}
```

基础使用方式

```html
<base-segmented-control :current="tabcurrent" :values="tabitems" @clickItem="ontabClickItem" style-type="button" active-color="#f6375b"></base-segmented-control>
```

**属性说明：**

| 属性名 | 类型 | 默认值 | 说明 |
| ---	| ---- | --- | --- |
| current | Number | 0 | 当前选中的tab索引值，从0计数 |
| values | Array | [{name:'',num:''}] | 选项数组 |
| activeColor | String | '#000' | 选中的标签字体颜色 |
| styleType | String | 'button' | 分段器样式类型，可选值：button（按钮类型），text（文字类型） |
| isNumb | Boolean,String | false | 选项是否有数字 |

**事件说明：**

| 事件名 | 说明 |
| clickItem | 点击切换事件 |

**其他**

* BaseSegmentedControl 组件非原生组件；
