//============================== header =========================

jQuery(document).ready(function($) {

    var navbar = $('.navbar-main'),
        $window = $(window);

	    $window.scroll(function() {
	    	if(($window.scrollTop() >= 200) && ($(".navbar-default").hasClass("navbar-main")))
	        {
	          	navbar.addClass("navbar-fixed");
	        } else {
	            navbar.removeClass("navbar-fixed");
	        }
	    });
	
});



//============================== Caroucel Filter =========================
$(document).ready(function () {

  $("#testimonial-slider").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
    navigation: false,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    pagination: true,
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [979, 2],
    itemsDesktopSmall: [768, 1],
    itemsDesktopSmall: [479, 1]

  });
});
