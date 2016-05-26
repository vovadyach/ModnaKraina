/**
 * Created by vinside on 5/26/16.
 */
;(function ($){
    var $sliderContainer = $('.slider__container');
    var $sliderCustom = $('.slider__custom');
    var $sliderItem = $(".slider__item");

    var $prevSlide = $('.prev__slide');
    var $nextSlide = $('.next__slide');

    var position = 0;
    var lastPosition = 0;

    //Calculates containers width
    var containerWidth = $sliderContainer.width();
    $sliderCustom.width(containerWidth * $sliderItem.length);
    $sliderItem.width(containerWidth);


    var shift = -position * containerWidth;
    $sliderCustom.css("left", shift);

})(jQuery);