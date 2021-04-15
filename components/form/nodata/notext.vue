<template>
	<view class="no-text">
		<view class="no-txt" :style="{
			backgroundColor:color,
			width: viewWidth,
			height: viewHeight,
			marginTop:idx>0?margin_top:0}" 
		v-for="(index, idx) in rowNum" :key="idx" :aaa="index">
		</view>
	</view>
</template>

<script>
	/**
	 * 文字占位组件
	 * @description 暂无数据组件  
	 * @property {String,Number} width 宽度upx
	 * @property {String,Number} height 高度upx
	 * @property {Number} row x行
	 * @property {String} color 占位颜色
	 */
	export default {
		props: {
			width: {
				type: [String,Number],
				default: '100%'
			},
			height: {
				type: [String, Number],
				default: '22'
			},
			rowNum: {
				type: Number,
				default: 1,
				immediate: true
			},
			color: {
				type: String,
				default: 'rgb(214, 207, 207)'
			}
		},
		data(){
			return {
				viewWidth: 0,
				viewHeight: 0,
				margin_top: 0
			}
		},
		created() {
			this.margin_top = uni.upx2px(6)+'px';
			if( this.width.indexOf("%") != -1){
				this.viewWidth = this.width;
			} else {
				this.viewWidth = uni.upx2px(parseInt(this.width)) + 'px';
			}
			if(this.height.indexOf("%") != -1){
				this.viewHeight = this.height;
			} else {
				this.viewHeight = uni.upx2px(parseInt(this.height)) + 'px';
			}
		}
	}
</script>

<style>
	.no-text{
		width: 100%;
		height: 100%;
	}
	.no-txt{
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}
</style>
