jQuery(document).ready(function($) {
  $('#play-button').on('click', function(ev) {
    $('.video-overlay').addClass('clicked');
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
  });
});
