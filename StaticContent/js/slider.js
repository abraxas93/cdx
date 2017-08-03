'use strict';

var slider = (function () {
    var slides = null;
    var slides_margin = null;
    var visibleSlides = 5; // a number of slides in viewport
    var slideWidth = 20; // width of one slide in viewport, compare like % val
    var widthLimit = visibleSlides * slideWidth; // limit in after we reset inner circle of slides margins, compare like % val
    String.prototype.bool = function () {
        return (/^true$/i).test(this);
    };

    function leftArrowHandler() {
        $(this).attr('blocked', true);
        $('.test-description').fadeOut();
        slides.forEach(function (slide, i) {
            if (slides_margin[i] === - (slides.length - visibleSlides - 1) * slideWidth) {
                $(slide).hide();
                slides_margin[i] = widthLimit;
            } else {
                $(slide).show();
                slides_margin[i] -= slideWidth;
            }

            $(slide).css('left', slides_margin[i] + '%');
        });

        var that = this;
        setTimeout(function () {
            $(that).attr('blocked', false);
        }, 300);
    }

    function rightArrowHandler() {
        $(this).attr('blocked', true);
        $('.test-description').fadeOut();
        slides.forEach(function (slide, i) {
            if (slides_margin[i] === widthLimit) {
                $(slide).hide();
                slides_margin[i] = -slideWidth * (slides.length - 1 - visibleSlides);
            } else {
                $(slide).show();
                slides_margin[i] += slideWidth;
            }

            $(slide).css('left', slides_margin[i] + '%');
        });

        var that = this;
        setTimeout(function () {
            $(that).attr('blocked', false);
        }, 300);
    }

    function renderSlider(slides_data, sliderWrap) {
        var viewPort = $('<div/>').addClass('slider-viewport');

        slides_data.forEach(function (slide, i) {
            var slideDiv = $('<div/>').addClass('s20');

            $(slideDiv).click(function () {
                var sliderPxWidth = parseInt($(slideDiv).width());
                var sliderMargin = parseInt($(slideDiv).css('left'));
                var position = Math.round(sliderMargin / sliderPxWidth) + 1;

                slide.onclick(position);
            });

            var h3 = $('<h3/>', { html: slide.title }).addClass('slide-title');
            var img = $('<img/>', { src: slide.img }).addClass('slide-item');
            slideDiv.append(img).append(h3);
            viewPort.append(slideDiv);
        });
        $(sliderWrap).append(viewPort);
        slides = $(sliderWrap + ' .slider-viewport').children().toArray();
    }

    function setMargins(sliderWrap) {
        var slides = $(sliderWrap + ' .slider-viewport').children().toArray();
        slides_margin = new Array(slides.length);
        var zeroPoint = (slides.length - visibleSlides) * -slideWidth;

        slides.forEach(function (slide, i) {
            if (i < visibleSlides) {
                slides_margin[i] = (i + 1) * slideWidth;
                $(slide).css('left', (i + 1) * slideWidth + '%');
            } else {
                zeroPoint += slideWidth;
                slides_margin[i] = zeroPoint;
                $(slide).css('left', zeroPoint + '%');
            }
        });
    }

    function setArrowsHandlers(leftSel, rightSel) {
        $(leftSel).attr('blocked', false);
        $(rightSel).attr('blocked', false);

        $(rightSel).click(function (e) {
            var block = $(this).attr('blocked');
            if (!block.bool()) leftArrowHandler.bind(this)();
            else e.stopImmediatePropagation();
        });
        $(leftSel).click(function (e) {
            var block = $(this).attr('blocked');
            if (!block.bool()) rightArrowHandler.bind(this)();
            else e.stopImmediatePropagation();
        });
    }

    function onResize() {
        var sliderMargin = 0;
        var sliderHeight = $('.slider-viewport .s20 img').height();

        if (sliderHeight > 256) {
            sliderMargin = Math.floor((sliderHeight - 256) / 2);
            sliderHeight = 256;
        }

        sliderMargin += 5;

        $('.slider-wrap .left-arrow').css('margin-top', sliderMargin + 'px');
        $('.slider-wrap .right-arrow').css('margin-top', sliderMargin + 'px');
        $('.slider-wrap .left-arrow').height(sliderHeight);
        $('.slider-wrap .right-arrow').height(sliderHeight);
        $('.slider-wrap').height(sliderHeight + sliderMargin * 2 + $('.slider-viewport .s20 h3').height());

        if (sliderHeight < 5) {
            setTimeout(onResize, 100);
        }
    }

    return {
        render: function (opts) {
            renderSlider(opts.slides, opts.sliderWrap);
            setMargins(opts.sliderWrap);
            setArrowsHandlers(opts.leftSel, opts.rightSel, opts.sliderWrap);
            onResize();
            $(window).on('resize', onResize);
        }
    };
})();