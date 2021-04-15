<template>
	<view class="no-image">
		<image 
			:style="[{
					height: imgHeight,
					width: imgWidth
			}]" 
			:src="imgUrl"
			mode="aspectFit"
		></image>
	</view>
</template>

<script>
  /**  
   * 图片占位组件
   * @description 暂无数据组件  
   * @tutorial type=[square|higher|wider] 类型:正方形 |偏高长方形|偏宽长方形
   * @property {String} type=[square|higher|wider] 类型:正方形 |偏高长方形|偏宽长方形
   * @property {String,Number} height 高度
	 * @property {String,Number} height 高度
   */  
	export default {
		props: {
			type: {
				type: String,
				default: 'square'  //square higher wider
			},
			height: {
				type: [String, Number],
				default: '100%'
			},
			width: {
				type: [String, Number],
				default: '100%'
			}
		},
		data(){
			return {
				imgUrl: this.$http.static_url('static/components/nodata/no-img-square.png'),
				imgHeight: 0,
				imgWidth: 0,
			}
		},
		created() {
			if (this.type === 'higher') {
				this.imgUrl = this.$http.static_url('static/components/nodata/no-img-higher.png');
			} else if (this.type === 'wider') {
				this.imgUrl = this.$http.static_url('static/components/nodata/no-img-wider.png');
			}
			if(this.width.indexOf("%") != -1){
				this.imgWidth = this.width;
			} else {
				this.imgWidth = uni.upx2px(parseInt(this.width)) + 'px';
			}
			if(this.height.indexOf("%") != -1){
				this.imgHeight = this.height;
			} else {
				this.imgHeight = uni.upx2px(parseInt(this.height)) + 'px';
			}
		}
	}
</script>

<style>
	.no-image{
		width: 100%;
		height: 100%;
	}
</style>
