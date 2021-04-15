<template>
	<view class="lazy-image">
		<image :lazy-load="true" class="real-image" :style="{borderRadius:radius+'px'}" @load="onLoaded" :src="realSrc" :mode="mode"></image>
		<view class="placehold-view" :class="loaded?'loaded':'loading'">
			<image class="placehold-image" :src="placeholdSrc" mode="aspectFit"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			mode:{
				type:String,
				default:'widthFix'
			},
			radius: {
				type: [Number, String],
				default: 0
			},
			realSrc:{
				type:String,
				default:""
			}
		},
		data(){
			return {
				loaded:false,
				placeholdSrc: '@/static/components/nodata/no-img-square.png'
			}
		},
		methods:{
			onLoaded(){
				this.loaded = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.lazy-image{
		height: 100%;
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		.real-image,.placehold-image{
			width: 100%;
			height: 100%;
		}
		.placehold-view{
			background-color: #eee;
			position: absolute;
			z-index: 2;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: opacity 0.4s linear;
			.placehold-image{
				width: 100%;
			}
		}
		.loaded{
			opacity: 0;
		}
		.loading{
			background: white;
		}
	}
</style>
