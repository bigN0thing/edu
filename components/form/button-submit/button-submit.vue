<template>
		<view class="btns">
			<view class="btn-box">
				<button class="btn-submit" :loading="loading" :class="{'disabled': disabled}" @tap="submit">{{title}}</button>
			</view>
		</view>
</template>

<script>
	
	export default {
		name: "button-submit",
		props: {
			title: {
				type: String,
				default: '',
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			loading: {
				type: [Boolean, String],
				default: false,
			}
		},
		methods: {
			submit() {
				this.$emit('submit');
			}
		}
	}
</script>

<style lang="scss">
	.btns {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 99;
		background-color: $uni-bg-color;
		.btn-box {
			display: block;
			padding: $padding;
			.btn-submit {
				background-color: $tcolor;
				color: $uni-text-color-inverse;
				margin-top: $margin;
				&.disabled {
					color: $uni-text-color-disable;
					background-color: $uni-bg-color;
				}
			}
		}
	}
</style>
