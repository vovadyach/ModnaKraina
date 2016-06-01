/**
 * Created by vinside on 5/26/16.
 */
;(function ($){

    var $window = $(window);

    function __Slider (options) {
        options = options || {};

        this.$clonedSlides = $('');

        this.slidePosition = 0;
        this.startSlidePosition = 0;

        this.slidesToShow = 1;

        this.slideNavPosition = 0;
        this.infinite = false;
        this.containerWidth = 0;

        this.onNextSlide = null;

        $.extend(this, options);

        this.slideCloneShift = 0;

        this.$sliderContainer =         this.$sliderContainer.eq(0);

        this.$sliderCustom =            this.$sliderContainer .find('.slider__custom');
        this.$sliderItem =              this.$sliderContainer .find(".slider__item");

        this.$prevSlide =               this.$sliderContainer .find('.prev__slide');
        this.$nextSlide =               this.$sliderContainer .find('.next__slide');

        this.$sliderNavContainer =      this.$sliderContainer .find(".slider__nav-container");
        this.$sliderNavCustom =         this.$sliderContainer .find(".slider__nav-custom");
        this.$sliderNavItem =           this.$sliderContainer .find(".slider__item-nav");

        this.init();
    }

    $.extend(__Slider.prototype, {
        ololo: 10,
        init: function () {
            var self = this;
            var slideWidth;

            if ( this.infinite ) {
                //this.$sliderItem.last().clone().addClass('item_clone').prependTo(this.$sliderCustom);
                //this.$sliderItem.first().clone().addClass('item_clone').appendTo(this.$sliderCustom);


                //debugger;

                var leftClone = this.$sliderItem.slice(0, this.slidesToShow).clone()
                    .addClass('item_clone');

                var rightCLone = this.$sliderItem.slice(this.$sliderItem.length - this.slidesToShow, this.$sliderItem.length)
                    .clone().addClass('item_clone');


                rightCLone.each(function () {
                    console.log( rightCLone.data() )
                });



                this.$sliderCustom.append(leftClone);
                this.$sliderCustom.prepend(rightCLone);

                this.$clonedSlides = this.$clonedSlides.add(leftClone).add(rightCLone);
                this.slideCloneShift = (leftClone.length);
            }

            this.containerWidth = this.$sliderContainer.width();


            slideWidth = this.containerWidth / this.slidesToShow;
                //this.containerWidth * ( this.$sliderItem.length + this.$clonedSlides.length ) / this.slidesToShow;
            this.$sliderCustom.width( slideWidth * (this.$sliderItem.length + this.$clonedSlides.length) );
            this.$sliderItem.width(slideWidth);
            this.$clonedSlides.width(slideWidth);

            this.$sliderCustom.css('transition', 'transition: 0.4s all');

            $window.load(function () {
                self.$sliderCustom.addClass('transition_none');

                self.slideTo( self.startSlidePosition );

                setTimeout(function() {
                    self.$sliderCustom.removeClass('transition_none');
                }, 10);
            });

            if ( this.$prevSlide.length ) {
                this.$prevSlide.on('click', function (event){
                    self.prevSlidePosition();
                    event.preventDefault();
                });
            }

            if ( this.$nextSlide.length ) {
                this.$nextSlide.on('click', function (event){
                    self.nextSlidePosition();
                    event.preventDefault();
                });
            }
        },

        getSlide: function (pos) {
            return this.$sliderItem.eq(pos);
        },

        setActiveSlide: function (pos) {
            var $activeSlide = this.getSlide(this.slidePosition);
            $activeSlide.addClass('active').siblings().removeClass("active");
        },

        getActiveSlide: function () {
            return false;
        },

        slideTo: function (slidePosition) {
            var left = -this.$sliderItem.width() * (slidePosition + this.slideCloneShift);
            this.$sliderCustom.css('left', left );
            console.log( left );
            //
            //debugger;

            this.setActiveSlide( this.slidePosition );
        },

        getCurrentPosition: function () {
          return this.slidePosition;
        },

        prevSlidePosition: function () {
            var self = this;

            this.slidePosition--;

            if ( this.slidePosition < -1 ) {
                this.slidePosition = this.$sliderItem.length - 1;
                this.$sliderCustom.addClass('transition_none');

                this.slideTo( self.slidePosition );
                setTimeout(function () {
                    self.$sliderCustom.removeClass('transition_none');
                    self.slidePosition--;
                    self.slideTo( self.slidePosition );
                }, 10);

            } else if ( this.slidePosition < 0 ) {
                this.slideTo( self.slidePosition );
                console.log('go to clone')
            } else {
                this.slideTo(this.slidePosition);
            }
        },

        nextSlidePosition: function () {
            var self = this;
            this.slidePosition++;
            //console.log( slidePosition );
            if (this.slidePosition > this.$sliderItem.length - 1) {

                this.slidePosition = -1;
                this.$sliderCustom.addClass('transition_none');

                this.slideTo( this.slidePosition );

                setTimeout(function() {
                    self.$sliderCustom.removeClass('transition_none');
                    self.slidePosition++;
                    self.slideTo( self.slidePosition );
                }, 10);

            } else if ( this.slidePosition >= this.$sliderItem.length - 1) {
                this.slideTo( this.slidePosition );
            } else {
                this.slideTo( this.slidePosition );
            }

            if ( typeof this.onNextSlide === 'function' ) {
                this.onNextSlide();
            }
        }

    });

    window.Slider = __Slider;

})(jQuery);


/**
 * Created by vinside on 5/26/16.
 */
;(function ($){

    window.slider1 = new Slider({
        $sliderContainer: $('.slider1'),
        infinite: true,
        slidesToShow: 1

    });
    //
    window.slider2 = new Slider({
        $sliderContainer: $('.slider2'),
        infinite: true,
        slidesToShow: 5,
        onNextSlide: function () {
            slider1.nextSlidePosition();
        }
    });
    //
    //$('.slider2 .slider__item:not(.item_clone)').on('click', function () {
    //
    //    var position = slider2.getCurrentPosition();
    //
    //
    //
    //    slider1.slideTo( position );
    //});

})(jQuery);