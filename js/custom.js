function stickyHeader () {
	if ($('.sticky-top').length) {
		var strickyScrollPos = 200;
		if($(window).scrollTop() > strickyScrollPos) {
			$('.sticky-top').removeClass('fadeIn animated');
			  $('.sticky-top').addClass('sticky-fixed fadeInDown animated');
			
	      	$('.scroll-to-top').fadeIn(500);
		}
		else if($(this).scrollTop() <= strickyScrollPos) {
			$('.sticky-top').removeClass('sticky-fixed fadeInDown animated');
	      	$('.sticky-top').addClass('slideIn animated');
	      	$('.scroll-to-top').fadeOut(500);
		}
	};
}

jQuery(document).on('ready', function () {
	(function ($) {
		
      
        stickyHeader ()
		
		
	})(jQuery);
});

jQuery(window).on('scroll', function () {	
	(function ($) {
		stickyHeader();
	})(jQuery);
});
