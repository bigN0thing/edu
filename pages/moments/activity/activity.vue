<template>
	<view class="page">
		<view class="page-section__notice">
			<ser-notice :src="noticeSrc"></ser-notice>
		</view>
		<view class="page-section__activity">
			<base-segmented-control :current="acIndex" :values="acTabList" @clickItem="acTabClick" activeColor="#f0b421"></base-segmented-control>
			<view class="activety-list">
				<view class="activety-list-box">
					<view class="activety-list-item">
						<view class="activety-list-item-box">
							<view class="activety-list-item-img">
								<image class="img" src="https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg" mode="scaleToFill"></image>
							</view>
							<view class="activety-list-item-info">
								<view class="activety-list-item-info-left">
									<text class="activety-list-item-title">活动名称：2021年3月少儿艺术节</text>
									<text class="activety-list-item-sub-title">截至日期: 2021.03.20</text>
								</view>
								<view class="activety-list-item-info-right">
									<view class="activety-list-item-status">进行中</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import BaseSegmentedControl from "@/components/base/base-segmented-control/base-segmented-control.vue"
	import SerNotice from '@/components/service/ser-notice/ser-notice.vue'
	export default {
		components: {
			BaseSegmentedControl,
			SerNotice
		},
		data() {
			return {
				noticeSrc: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				acIndex: 0,
				acTabList: [{name: '表演'}, {name: '亲子游'},{name: '考级&赛事'},{name: '往期活动回顾'}],
			}
		},
		onLoad(option) {
			
  		},
		onShow() {
			uni.navigateTo({
				url: '../user_center/login/login'
			})
		},
		onHide() {
		},
		methods: {
			acTabClick() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
page {
	background: $uni-bg-color-grey;
}
.page-section {
	&__notice {
		background-color: #fff;
	}
	
}
.activety-list {
	&-box {
		padding: 15upx 20upx 0 20upx;
	}
	&-item {
		&-box {
			display: flex;
			flex-direction: column;
			background-color: #fff;
			border-radius: 20upx;
		}
		&-img {
			height: 180upx;
			width: 100%;
			.img {
				height: 100%;
				width: 100%;
			}
		}
		&-info {
			height: 100upx;
			padding: 10upx 20upx;
			display: flex;
			&-left {
				flex: 1;
				display: flex;
				flex-direction: column;
			}
			&-right {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 220upx;
			}
		}
		&-title {
			font-size: $fsize1;
		}
		&-sub-title {
			font-size: $fsize2;
			color: $fcolor2;
		}
		&-status {
			padding: 10upx 30upx;
			color: #fff;
			border-radius: 30upx;
			background-image: linear-gradient(to bottom right, #f3bb3b, #eada31);
		}
	}
}
</style>
