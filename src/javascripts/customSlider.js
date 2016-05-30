/**
 * Created by vinside on 5/26/16.
 */
;(function ($){

    var $sliderContainer =  $('.slider__container');
    var $sliderCustom =     $('.slider__custom');
    var $sliderItem =       $(".slider__item");

    var $prevSlide =        $('.prev__slide');
    var $nextSlide =        $('.next__slide');

    var slideCloneShift = 0;
    var slidePosition = 0;
    var startSlidePosition = 0;

    //Creates variable for the navigation slider
    var $sliderNavContainer =  $(".slider__nav-container");
    var $sliderNavCustom =      $(".slider__nav-custom");
    var $sliderNavItem =        $(".slider__item-nav");

    var slideNavPosition = 0;
    //NAVIGATION SLIDER
    //------------------------------------------------------------------------------
    // Calculates the width of slider nav
    var containerNavWidth = $sliderNavItem.width();
    $sliderNavCustom.width(containerNavWidth * $sliderItem.length);

    window.slideNavTo = function (slideNavPos) {
        var $activeSlide;
        $activeSlide = $sliderNavItem.eq(slideNavPos);
        $sliderNavCustom.css('left', -containerNavWidth * slideNavPos);
        $activeSlide.addClass('active').siblings().removeClass('active');
    };

    //------------------------------------------------------------------------------
    //ENDNAVIGATION SLIDER
    //Adds clones to the sliderCustom to achieve looping
    $sliderItem.last().clone().addClass('item_clone').prependTo($sliderCustom);
    $sliderItem.first().clone().addClass('item_clone').appendTo($sliderCustom);

    var $clonedSlides = $sliderCustom.find(".item_clone");

    slideCloneShift = $clonedSlides.length / 2;

    //Calculates containers width
    var containerWidth = $sliderContainer.width();
    $sliderCustom.width(containerWidth * ($sliderItem.length + $clonedSlides.length));
    $sliderItem.width(containerWidth);

    $sliderCustom.css('transition', 'transition: 0.4s all');

    window.slideTo = function (slidePosition) {
        var $activeSlide, activleSlideLeft;
        $activeSlide = $sliderItem.eq(slidePosition);

        $sliderCustom.css('left', -containerWidth * (slidePosition + slideCloneShift) );
        $activeSlide.addClass('active').siblings().removeClass("active");
    };

    function prevSlidePosition () {
        slidePosition--;
        if ( slidePosition < -1 ) {
            slideToPrev();
        } else if ( slidePosition < 0 ) {
            slideTo(slidePosition);

            console.log('go to clone')
        } else {
            slideTo(slidePosition);
        }

        console.log(slidePosition);
    }

    function slideToPrev() {
        console.log('return to last');
        skipPrevTransition();

        setTimeout(function () {
            $sliderCustom.removeClass('transition_none');
            slidePosition--;
            slideTo( slidePosition );
        }, 10);
    }

    function skipPrevTransition() {
        slidePosition = $sliderItem.length - 1;
        $sliderCustom.addClass('transition_none');

        slideTo( slidePosition );
    }

    function nextSlidePosition () {
        slidePosition++;
        console.log( slidePosition );
        if (slidePosition > $sliderItem.length - 1) {
            slideToNext();
            console.log('go to clone')

        } else if (slidePosition >= $sliderItem.length - 1) {
            slideTo(slidePosition);
        } else {
            slideTo( slidePosition );
        }
    }

    function slideToNext() {
        console.log('go to next');
        skipNextTransition();

        setTimeout(function() {
            $sliderCustom.removeClass('transition_none');
            slidePosition++;
            slideTo( slidePosition );
        }, 10);
    }

    function skipNextTransition() {
        slidePosition = -1;
        $sliderCustom.addClass('transition_none');

        slideTo( slidePosition );
    }

    $prevSlide.on('click', function (event){
        prevSlidePosition();
        event.preventDefault();
    });

    $nextSlide.on('click', function (event){
        nextSlidePosition();
        event.preventDefault();
    });

    window.onload = function () {
        $sliderCustom.addClass('transition_none');
        slideTo(startSlidePosition);
        setTimeout(function() {
            $sliderCustom.removeClass('transition_none');
        }, 10);
    }

})(jQuery);