$(document).ready(function(){
  $('.testemonies').slick({
  	autoplay:true,
  	dots:true,
  	arrows:true,
    speed: 5000
  });
});

    var width = $(window).width(); 

if(width<640){
	$('.centered').addClass("panel");
}


//smooth scrolling
$(function() {
  if ($(window).width() > 640) {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  }
});