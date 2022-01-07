<template>
	<div>
		<h3>슬라이드(@apps/core/components/Slide.vue)</h3>
		<div class="b_mainbox">
			<swiper :options="swiperOption">
				<swiper-slide v-for="data in slideData" :key="data.id">
					<div
						class="large_image"
						:style="data.wrapStyle"
						v-if="data.hasOwnProperty('useMap')"
					>
						<img
							:src="data.imgSrc"
							:alt="data.imgAlt"
							:usemap="'#' + data.useMap.id"
						/>
						<map :name="data.useMap.id">
							<area
								v-for="area in data.useMap.area"
								:key="area.id"
								:shape="area.shape"
								:coords="area.coords"
								:href="area.href"
								:target="area.target"
							/>
						</map>
					</div>
					<div class="large_image" :style="data.wrapStyle" v-else>
						<img :src="data.imgSrc" :alt="data.imgAlt" />
						<a
							:href="data.anchor.href"
							class="btnMainbnnr"
							:style="data.anchor.style"
						>
							{{ data.anchor.text }}
						</a>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
	components: {
		swiper,
		swiperSlide,
	},
	props: {
		slideData: Array,
		slideOption: Object,
	},
	data() {
		return {
			defaultSwiperOption: {
				autoplay: { delay: 2500, disableOnInteraction: false },
				slidesPerView: 1,
				loop: true,
				pagination: { el: '.swiper-pagination', clickable: true },
			},
			swiperOption: { ...this.defaultSwiperOption, ...this.slideOption },
		};
	},
};
</script>
<style scoped>
div.b_mainbox {
	min-width: 1000px;
}
div.b_mainbox .large_image {
	position: relative;
	width: 990px;
	margin: 0 auto;
}
div.mban_benefit a.btnMainbnnr,
div.mban_burgerking a.btnMainbnnr {
	border: 1px solid #333 !important;
	color: #333 !important;
}
a.btnMainbnnr {
	width: 212px;
	line-height: 46px;
	bottom: 46px;
	font-size: 16px;
	text-align: center;
	background: none;
	font-family: 'malgun Gothic', NG, dotum, sans-serif;
	letter-spacing: -1px;
}
a.btnMainbnnr {
	position: absolute;
	left: 34px;
	display: block;
	height: 46px;
	text-decoration: none;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
	top: 10px;
	left: 461px;
	width: 100%;
	height: 20px;
}
</style>
