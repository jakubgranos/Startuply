import swiper from './modules/slider';
import './modules/showing-menu.js'; 


import getWindowUserAgent from './modules/userAgent';
window.onload = () => {
	console.log('You are using:', getWindowUserAgent());
}