/**
 * Created by vinside on 5/20/16.
 */
$(document).ready(function() {

    $('.slider__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__nav'
    });

    $('.slider__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider__for',
        dots: false,
        arrows: true,
        adaptiveHeight: true
    });


});

$(document).ready(function () {
    $('.color__chosen-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        infinite: true
    });
    //$('.color__chosen-slider').on('click', '.slick-slide', callBack);
    //$('.slider__img-item').on('click', function(){
    //    //var $this = $(this);
    //    //var $parentslider = $this.closest('.color__chosen-slider');
    //    //var $slide = $parentslider.find('.slider__img-item');
    //    //
    //    //$slide.toggleClass("slick-current");
    //    var currentSlide = $('.slider__img-item').slick('slick-current');
    //});
});