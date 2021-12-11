(function($){ 
	"use strict";

    $(document).ready(function($) {

        // Isotope Active
		var filterSelector = $('.portfolio-items');
		filterSelector.imagesLoaded( function() {

			 // Add isotope click function
			$('.filter-menu li').on('click', function(){
				$(".filter-menu li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr('data-filter');
				filterSelector.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}
				});
				return false;
			});

			filterSelector.isotope({
				itemSelector: '.single-item',
				layoutMode: 'fitRows',
			});
		});

		// Hoverdir Active
		$('.portfolio-items .portfolio-box ').each( function() {
			$(this).hoverdir();
		});

		$(function () {
		  $('[data-toggle="popover"]').popover()
		});

		/* Project Carousel */
        $('#project-single-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            items: 1,
            dots: true,
            nav: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
        });

		// Active WOW
		new WOW().init();

    });

})(jQuery);