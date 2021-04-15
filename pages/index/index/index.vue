<template>
	<view class="page">
		<view class="page-section__search">
			<navigator url="" class="search-box round">
			  <view class="search-box_icon iconfont">&#xe603;</view>
				<view class="search-box_input">请输入搜索内容</view>
			</navigator>
		</view>
		<view class="page-section__banner">
			<carousel :img-list="bannerList" url-key="url" @selected="selectedBanner"/>
		</view>
		<view class="page-section__menu">
			<ser-menu-group :options="menu_list" :requested="requested" :column-num="5" text_key="name" image_key="icon" >
			</ser-menu-group>
		</view>
		<view class="page-section__notice">
		</view>
		<view class="page-section__recommend">
			<base-segmented-control :current="recommendIndex" :values="recommendTabList" @clickItem="recommendTabClick" activeColor="#f0b421"></base-segmented-control>
			
			<view class="recommend-box">
				
			</view>
		</view>
	</view>
</template>

<script>
	import BaseSegmentedControl from "@/components/base/base-segmented-control/base-segmented-control.vue"
	import carousel from '@/components/vear-carousel/vear-carousel'
	import SerMenuGroup from "@/components/service/ser-menu-group/ser-menu-group.vue"
	export default {
		components: {
			BaseSegmentedControl,
			carousel,
			SerMenuGroup
		},
		data() {
			return {
				bannerList: [{
					url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
					id: 1
				},{
					url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
					id: 2
				},{
					url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
					id: 3
				},{
					url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
					id: 4
				},],
				menu_list: [{
					name: '测试',
					icon: 'https://dshopdemo.oss-cn-hangzhou.aliyuncs.com/filestorage/images/2019_10/1570609607_733.png?x-oss-process=image/resize,m_fill,h_66,w_66'
				},{
					name: '测试',
					icon: 'https://dshopdemo.oss-cn-hangzhou.aliyuncs.com/filestorage/images/2019_10/1570609607_733.png?x-oss-process=image/resize,m_fill,h_66,w_66'
				},{
					name: '测试',
					icon: 'https://dshopdemo.oss-cn-hangzhou.aliyuncs.com/filestorage/images/2019_10/1570609607_733.png?x-oss-process=image/resize,m_fill,h_66,w_66'
				},{
					name: '测试',
					icon: 'https://dshopdemo.oss-cn-hangzhou.aliyuncs.com/filestorage/images/2019_10/1570609607_733.png?x-oss-process=image/resize,m_fill,h_66,w_66'
				},{
					name: '测试',
					icon: 'https://dshopdemo.oss-cn-hangzhou.aliyuncs.com/filestorage/images/2019_10/1570609607_733.png?x-oss-process=image/resize,m_fill,h_66,w_66'
				}],
				requested: false,
				recommendIndex: 0,
				recommendTabList: [{name: '机构推荐'}, {name: '教师推荐'}],
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
			selectedBanner(item, index) {
				console.log('馃', item, index)
			},
			recommendTabClick() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
$banner-height: 360upx;
page {
	background: $uni-bg-color-grey;
}
.page-section {
	&__banner {
		position: relative;
		height: $banner-height;
		.nav-top {
			position: absolute;
		}
		.banner {
			height: $banner-height;
			&-item {
				background-color: #FFF;
				height: $banner-height;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
}

.search-box {
  position: relative;
  padding: 0 40upx 0 80rpx;
  height: 60upx;
  line-height: 60upx;
  box-sizing: border-box;
  background-color: #fff;
  margin: 10rpx 25rpx;
  &.square{
	border-radius: 0;
  }
  &.round{
	border-radius: 30upx;
  }
  &.fillet{
	border-radius: 10upx;
  }
  .iconfont {
	position: absolute;
	left: 20upx;
	font-size: 36upx;
  }
  &_input {
	border: none;
	height: 100%;
	line-height: 60upx;
	padding: 0;
	width: 100%;
	background: none;
	display: block;
	&:-webkit-input-placeholder {
	color: #c6cbd3;
	}
	&::-webkit-input-placeholder {
	  color: #c6cbd3;
	}
	&:focus {
	  outline: none;
	}
  }
}
</style>
