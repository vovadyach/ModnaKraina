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

    var position = 0;
    var lastPosition = 0;

    //Calculates containers width
    var containerWidth = $sliderContainer.width();
    $sliderCustom.width(containerWidth * $sliderItem.length);
    $sliderItem.width(containerWidth);

    window.slideTo = function (pos) {
        if ( pos < 0 ) pos = 0;
        if ( pos >= $sliderItem.length ) pos = $sliderItem.length - 1;

        $sliderCustom.css('left', -pos * containerWidth );
    };

    $btnsSlide.on('click', function (event) {
        var $this = $(this);

        if ( $this.hasClass('next__slide') ) {
            position++;
        } else {
            position--;
        }

        if ( position < 0 ) {
            position = $sliderItem.length - 1;
        }

        if ( position >= $sliderItem.length ) {
            position = 0;
        }

        console.log( position );

        slideTo(position);

        event.preventDefault();
    });


    //$nextSlide.on('click', function () {
    //    position++;
    //    var shift;
    //    if (position <= $sliderItem.length) {
    //        shift = -position * containerWidth;
    //        $sliderCustom.css("left", shift);
    //        if (position > $sliderItem.length) {
    //            position = 0;
    //        }
    //
    //    }
    //});

    var shift = -position * containerWidth;
    $sliderCustom.css("left", shift);

})(jQuery);