(function ($) {
    "use strict";
    if ($('body').hasClass('rtl')) {
        var rtlMode = true;
    } else {
        var rtlMode = false;
    }

    $(window).on('elementor/frontend/init', function () {

        // Sponsor
        elementorFrontend.hooks.addAction('frontend/element_ready/wt-sponsor.default', function ($scope) {
            var sponsor = $scope.find(".sponsor-carousel"),
                type = $scope.find(".sponsor-wrapper").data('type');
            if( 'carousel' === type ) {
                var settings = sponsor.data('settings');
                sponsor.owlCarousel({
                    loop: settings.loop,
                    autoplay: settings.autoplay,
                    margin: settings.margin,
                    smartSpeed: settings.speed,
                    dots: false,
                    nav: settings.nav,
                    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                    responsive : {
                        // breakpoint from 0 up
                        0 : {
                            items: 2
                        },
                        // breakpoint from 480 up
                        480 : {
                        items: 3
                        },
                        // breakpoint from 768 up
                        768 : {
                        items: settings.items
                        }
                    }
                });
            }
        });

        // Testimonial 1
        elementorFrontend.hooks.addAction('frontend/element_ready/wt-testimonial.default', function ($scope) {
            var testimonials = $scope.find(".testi-1-carousel"),
                settings = testimonials.data('settings'),
                center = ((3 <= settings.items) ? settings.center : false);
                testimonials.owlCarousel({
                loop: settings.loop,
                autoplay: settings.autoplay,
                margin: settings.margin,
                center: center,
                smartSpeed: settings.speed,
                dots: settings.dots,
                nav: settings.nav,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                        center: false
                    },
                    // breakpoint from 480 up
                    580 : {
                        items: 2,
                        center: false
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: settings.items
                    }
                }
            });
            
        });
         
        // Testimonial 2
        elementorFrontend.hooks.addAction('frontend/element_ready/wt_testimonials2.default', function ($scope) {
            var testimonials = $scope.find(".testimonial-carousel"),
                settings = testimonials.data('settings'),
                center = ((3 <= settings.items) ? settings.center : false);
                testimonials.owlCarousel({
                loop: settings.loop,
                autoplay: settings.autoplay,
                margin: settings.margin,
                center: center,
                smartSpeed: settings.speed,
                dots: settings.dots,
                nav: settings.nav,
                navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                        center: false
                    },
                    // breakpoint from 480 up
                    580 : {
                        items: 2,
                        center: false
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: settings.items
                    }
                }
            });
            
        });
    });

})(jQuery);