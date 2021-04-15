<template>
	<view class="ser-notice">
		<view class="ser-notice-box">
			<image class="ser-notice-box-img" :src="src" mode="scaleToFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ser-notice",
		props: {
			src: { //图片地址
				type: String,
				default: ''
			},
		},
		data() {
			return {}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.ser-notice {
		display: flex;
		justify-content: center;
		&-box {
			width: 100%;
			padding: 25upx;
			&-img {
				width: 100%;
				height: 180upx;
				border-radius: 15upx;
			}
		}
	}
</style>
