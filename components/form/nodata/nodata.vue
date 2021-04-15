<template>
	<view class="contain">
		<image class="n-img" v-if="type=='default'" :src="default_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='order'" :src="order_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='coupon'" :src="coupon_url"  mode="aspectFit"></image>
		<image class="n-img" v-if="type=='collection'" :src="collection_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='commodity'" :src="commodity_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='result'" :src="result_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='article'" :src="article_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='network'" :src="network_url" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='other'" :src="otherurl" mode="aspectFit"></image>
		<image class="n-img" v-if="type=='permissions'" :src="permissions_url" mode="aspectFit"></image>
		<text v-if="tip!=null">{{tip}}</text>
		<text v-else>{{tips}}</text>
	</view>
</template>

<script>
  /**  
   * 暂无数据组件  
   * @description 暂无数据组件  
   * @tutorial type=[default|order|coupon|collection|commodity|result|article|network|other] 类型:默认 |订单|优惠券 |收藏 |商品|结果|文章|网络  
   * @property {String} type=[default|order|coupon|collection|commodity|result|article|network|other] 类型:默认 |订单|优惠券 |收藏 |商品|结果|文章|网络  
   * @property {String} tip  提示文字描述  
   * @event {Function} close 关闭事件  
   * @example <no-data type="default" tip="暂无数据"></no-data>  
   */  
	export default {
		props: {
			type: {
				type: String,
				default: 'default' 
			},
			tip: {
				type: String,
				default: null 
			},
		},
		data(){
			return {
				default_url:this.$http.static_url('static/components/nodata/default.png'),
				order_url:this.$http.static_url('static/components/nodata/order.png'),
				coupon_url:this.$http.static_url('static/components/nodata/coupon.png'),
				collection_url:this.$http.static_url('static/components/nodata/collection.png'),
				commodity_url:this.$http.static_url('static/components/nodata/commodity.png'),
				result_url:this.$http.static_url('static/components/nodata/result.png'),
				article_url:this.$http.static_url('static/components/nodata/article.png'),
				network_url:this.$http.static_url('static/components/nodata/network.png'),
				otherurl:this.$http.static_url('static/components/nodata/default.png'),
				permissions_url:this.$http.static_url('static/components/nodata/permissions.png'),
				page_lang: {},
				tips: null
			}
		},
		beforeMount() {
			this.page_lang = global.loadPageLang();
			this.tips = this.page_lang.common.base.nodata;
		},
		activated() {
			this.page_lang = global.loadPageLang();
			this.tips = this.page_lang.common.base.nodata;
		},
	}
</script>

<style lang="scss">
	.contain {
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-top: 20%;
		padding-bottom: 20%;
		color: #a3abc0;
		.n-img {
			width: 60%;
		}
	}
</style>
