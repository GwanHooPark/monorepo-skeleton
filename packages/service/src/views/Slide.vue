<template>
	<div class="slide">
		<Slide :slideData="slideData" :slideOption="slideOption"></Slide>
	</div>
</template>

<script>
import Slide from '@apps/core/components/Slide.vue';
export default {
	components: {
		Slide,
	},
	data() {
		return {
			slideOption: {
				autoplay: { delay: 2500, disableOnInteraction: false },
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: { el: '.swiper-pagination', clickable: true },
			},
			slideData: [
				{
					wrapStyle: '',
					imgSrc: 'https://www.ppurio.com/static/ppurio30/images/uni/main/banner_certificate.png?210907',
					imgAlt: 'ISMSP인증, 개인정보우수인증, 15년연속1위, 코스피상장기업',
					useMap: {
						id: 'MapMain2',
						area: [
							{
								shape: 'rect',
								coords: '20,281,105,306',
								href: 'javascript:sguide("privacy/isms_certification.html",600,870)',
								target: '_self',
							},
							{
								shape: 'rect',
								coords: '119,281,204,306',
								href: 'https://isms.kisa.or.kr/main/ispims/intro/',
								target: '_blank',
							},
							{
								shape: 'rect',
								coords: '271,281,357,306',
								href: 'javascript:fguide("https://www.eprivacy.or.kr/front/certifiedSiteMark/certifiedSiteMarkPopup.do?certCmd=E&amp;certNum=2021-E-R056", 527, 720)',
								target: '_self',
							},
							{
								shape: 'rect',
								coords: '521,281,619,306',
								href: 'javascript:sguide("privacy/ranky_certification.html",300,270)',
								target: '_self',
							},
							{
								shape: 'rect',
								coords: '771,281,857,306',
								href: 'https://www.daou.co.kr/',
								target: '_self',
							},
						],
					},
				},
				{
					wrapStyle: '',
					imgSrc: 'https://www.ppurio.com/static/ppurio30/images/uni/main/banner_burgerking.png?211129',
					imgAlt: '새해에는 호랑이 기운이 솟아나는 버거킹 전상품 11% 적립!',
					anchor: {
						href: '/mgr/DFCouponGoods.qri?act=search&amp;categoryNo=4&amp;brandNo=8',
						style: 'border: 1px solid #333 !important;color: #333 !important;',
						text: '11% 적립 받기',
						target: '_self',
					},
				},
			],
		};
	},
};
</script>
