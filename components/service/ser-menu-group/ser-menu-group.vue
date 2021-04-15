<template>
	<view class="menu-group-view">
		<view class="menu-group uni-flex uni-row" v-if="options.length>0||requested">
			<view class="menu-group-item uni-flex uni-column" :style="{width:(100/columnNum)+'%', marginTop:index>=columnNum?margintop:0}" v-for="(item,index) in options" :key="index" @tap="clicked(index, item)">
				<image mode="scaleToFill" class="item-image" :class="{'image-circle':type=='circle'}" :src="item[image_key]"></image>
				<text class="item-text">{{item[text_key]}}</text>
			</view>
		</view>
		<view class="menu-group uni-flex uni-row" v-else>
			<view class="menu-group-item uni-flex uni-column" :style="{width:(100/columnNum)+'%', marginTop:item>columnNum?margintop:0}" v-for="item in columnNum" :key="item">
				<view class="item-image item-image-no" :class="{'image-circle':type=='circle'}">
					<WImage width="80" height="80"></WImage>
				</view>
				<view class="item-text item-text-no">
					<WText ></WText>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import WImage from '@/components/form/nodata/placeholder-image.vue';
	import WText from '@/components/form/nodata/notext.vue';
	export default {
		name: "ser-menu-group",
		components: {
			WText,WImage
		},
		props: {
			options: Array,
			type: { //布局格式，圓形circle，正方形square
				type: String,
				default: 'circle'
			},
			columnNum: { //每一行有多少个
				type: Number,
				default: 3,
				immediate: true
			},
			text_key: {
				type: String,
				default: 'text'
			},
			image_key: {
				type: String,
				default: 'image'
			},
			requested: {
				type: Boolean,
				default: false,
				immediate: true
			}
		},
		data() {
			return {
				margintop: 0,
			}
		},
		created(){
			this.margintop = uni.upx2px(15)+'px';
		},
		methods: {
			clicked(index, menu) {
				
			}
		}
	}
</script>

<style lang="scss">
	@import "@/common/css/mixin/text-overflow.scss";
	.menu-group-view{
		background-color: #FFF;
		.menu-group{
			overflow: hidden;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: $margin 0;
			&:after{
				content: '';
				display: flex;
				flex: 1;
			}
			&-item{
				align-items: center;
				.item-image{
					width: 80upx;
					height: 80upx;
					background: $uni-bg-color;
					box-sizing: border-box;
					&-no{
						border: 1upx solid #eee;
						border-radius: 50%;
					}
					.image-circle{
						border-radius: 50%;
					}
				}
				.item-text {
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					margin-top: 10upx;
					text-align: center;
					font-size: $fsize3;
					/*单行超出文本省略号*/
					@include text-overflow();
					/*单行超出文本省略号*/
					width: 100upx;
					&-no{
						width: 90upx;
					}
				}
			}
		}
	}
</style>
