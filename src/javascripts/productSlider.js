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
        slidesToScroll: 2,
        asNavFor: '.slider__for',
        dots: false,
        arrows: true,
        //centerMode: true,
        adaptiveHeight: true
    });

});
