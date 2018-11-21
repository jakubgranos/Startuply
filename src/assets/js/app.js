import swiper from './modules/slider';
import './modules/showing-menu.js'; 
import './modules/video.js'; 
import './modules/scrol-menu.js'; 
import './modules/sticky.js'; 

import getWindowUserAgent from './modules/userAgent';
window.onload = () => {
	console.log('You are using:', getWindowUserAgent());
}