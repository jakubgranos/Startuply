import Swiper from 'swiper';

	var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
	},
});

$('#slide0').on('click', function() {
  swiper.slideTo(0);

});
$('#slide1').on('click', function() {
  swiper.slideTo(1);

});
$('#slide2').on('click', function() {
  swiper.slideTo(2);

});

$('.slider-box-container').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
});
