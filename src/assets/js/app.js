import Swiper from 'swiper';
import getWindowUserAgent from './modules/userAgent';
window.onload = () => {
	console.log('You are using:', getWindowUserAgent());
}

var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 5500,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });