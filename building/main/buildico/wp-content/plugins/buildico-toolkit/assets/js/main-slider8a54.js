(function($){ "use strict";
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction("frontend/element_ready/wt_main_slider.default", function (scope, $) {
            var sliderSelector = $(scope).find(".dl-slider");
            var autoplay = sliderSelector.data('autoplay'),
                autoplaySpeed = sliderSelector.data('autoplay-speed'),
                initialSlide = sliderSelector.data('initial-slide'),
                dots = sliderSelector.data('dots'),
                arrows = sliderSelector.data('arrows'),
                pauseonHover = sliderSelector.data('pauseon-hover');

            sliderSelector.on('init', function(e, slick) {
                var $firstAnimatingElements = $('div.hero-slide:first-child').find('[data-animation]');
                doAnimations($firstAnimatingElements);    
            });
            sliderSelector.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                    var $animatingElements = $('div.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                    doAnimations($animatingElements);    
            });
            sliderSelector.slick({
                autoplay: autoplay,
                autoplaySpeed: autoplaySpeed,
                dots: dots,
                fade: true,
                initialSlide: initialSlide,
                arrows: arrows,
                pauseOnHover: pauseonHover,
                prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'
            });
            function doAnimations(elements) {
                var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                elements.each(function() {
                    var $this = $(this);
                    var $animationDelay = $this.data('delay');
                    var $animationType = 'animated ' + $this.data('animation');
                    $this.css({
                        'animation-delay': $animationDelay,
                        '-webkit-animation-delay': $animationDelay
                    });
                    $this.addClass($animationType).one(animationEndEvents, function() {
                        $this.removeClass($animationType);
                    });
                });
            }
        });

    });
   
})(jQuery);