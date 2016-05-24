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
});

$(document).ready(function () {
    $('.slider__for-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav-gallery'
    });

    $('.slider__nav-gallery').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider__for-gallery',
        dots: false,
        arrows: true,
        adaptiveHeight: true
    });

});
