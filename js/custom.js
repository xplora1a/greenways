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

  $(".owl-carousel").owlCarousel({

    autoPlay: 3000, //Set AutoPlay to 3 seconds
    navigation: true,
    navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    pagination: true,
    items: 1,
  });
});
