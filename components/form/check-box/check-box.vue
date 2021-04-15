<template>
	<view class="d-check-box">
		<view class="check-select active iconfont" v-if="selected" @tap="checkChange">&#xe607;</view>
		<view class="check-select" v-if="!selected" @tap="checkChange"></view>
	</view>
</template>

<script>
	/**  
	 * 多选框  
	 * @description 多选框组件  
	 * @property {Boolean} selected 选中状态 
	 * @event {Function} change 选中事件
	 * @example <check-box :selected="true" @change="change"></check-box>  
	 */  
	export default {
		name: "check-box",
		props: {
			selected: {
				type: Boolean,
				default: false,
			}
		},
		methods: {
			checkChange() {
				this.$emit('change');
			}
		}
	}
</script>

<style lang="scss">
	.d-check-box {
		position: relative;
		width: 36upx;
		height: 36upx;
		.check-select {
			width: 36upx;
			height: 36upx;
			line-height: 36upx;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			height: 100%;
			width: 100%;
			text-align: center;
			color: #ffffff;
			font-size: $fsize3;
			background-color: #ffffff;
			border-radius: 20upx;
			border: $select-circular-color solid 2upx;
			
			&.active {
				background-color: $tcolor;
				border-color: $tcolor;
			}
		}
	}
</style>
