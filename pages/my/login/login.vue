<template>
	<view>
		<view class="page-section__logo">
			<image class="logo" src="../../../static/logo.png" mode="scaleToFill"></image>
		</view>
		<view class="page-section__button">
			<button class="btn">微信用户一键登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
page {
	background-color: #fff;
}
.logo {
	width: 200upx;
	height: 250upx;
}
.page-section {
	&__logo {
		margin-top: 200upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__button {
		margin-top: 160upx;
		display: flex;
		align-items: center;
		justify-content: center;
		.btn {
			padding: 25upx 50upx;
			line-height: 1.4;
			border-radius: 50upx;
			background-image: linear-gradient(to bottom right, #f3bb3b, #eada31);
			color: #fff;
		}
	}
}
</style>
