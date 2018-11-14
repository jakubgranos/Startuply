import Swiper from 'swiper';

	var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
	},
});

$('#slide0').click(swiper,function(){
	swiper.slideTo(0);
});
$('#slide1').click(swiper,function(){
	swiper.slideTo(1);
});
$('#slide2').click(swiper,function(){
	swiper.slideTo(2);
});