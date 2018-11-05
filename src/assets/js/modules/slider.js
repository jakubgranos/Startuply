import Swiper from 'swiper';

	var swiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.swiper-pagination',
	},
});

$('#slide0').on('click', function() {
  swiper.slideTo(0);

});
$('#slide2').on('click', function() {
  swiper.slideTo(1);

});
$('#slide3').on('click', function() {
  swiper.slideTo(2);

});