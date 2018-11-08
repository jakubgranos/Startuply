$(function() {     
	$('.openbtn').on('click',function(e) {
			e.preventDefault();
			$(".nav").slideToggle();
	});
});