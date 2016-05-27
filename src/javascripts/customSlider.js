/**
 * Created by vinside on 5/26/16.
 */
;(function ($){

    var $sliderContainer = $('.slider__container');
    var $sliderCustom = $('.slider__custom');
    var $sliderItem = $(".slider__item");
    var $prevSlide = $('.prev__slide');
    var $nextSlide = $('.next__slide');

    var $btnsSlide = $().add( $prevSlide).add( $nextSlide );

    var slideCloneShift = 0;
    var slidePosition = 0;
    var lastSlidePosition = 0;
    var startSlidePosition = 0;
    //Adds clones to the sliderCustom to achive looping
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
        //activleSlideLeft = $activeSlide.position().left;

        //$sliderCustom.css('left', -activleSlideLeft);
        $sliderCustom.css('left', -containerWidth * (slidePosition + slideCloneShift) );
        $activeSlide.addClass('active').siblings().removeClass("active");
    };

    function prevSlidePosition () {
        slidePosition--;
        if ( slidePosition < -1 ) {
            console.log('return to last')

            slidePosition = $sliderItem.length - 1;
            $sliderCustom.addClass('transition_none');
            slideTo( slidePosition );

            setTimeout(function () {
                $sliderCustom.removeClass('transition_none');
                slidePosition--;
                slideTo( slidePosition );
            }, 10);

        } else if ( slidePosition < 0 ) {
            slideTo(slidePosition);

            console.log('go to clone')
        } else {
            slideTo(slidePosition);
        }

        console.log(slidePosition);
    }

    function nextSlidePosition () {
        slidePosition++;
        console.log( slidePosition );
        if (slidePosition > $sliderItem.length - 1) {
            slidePosition = -1;
            $sliderCustom.addClass('transition_none');
            slideTo( slidePosition );

            setTimeout(function() {
                $sliderCustom.removeClass('transition_none');
                slidePosition++;
                slideTo( slidePosition );
            }, 10);
        } else if (slidePosition >= $sliderItem.length - 1) {
            slideTo(slidePosition);
        } else {
            slideTo( slidePosition );
        }
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