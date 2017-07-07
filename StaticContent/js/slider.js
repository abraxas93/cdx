'use strict';

var slider = (function() {   
    var slides_margin = null;
    var visibleSlides = 5; // a number of slides in viewport
    var slideWidth = 20; // width of one slide in viewport, compare like % val
    var widthLimit = visibleSlides * slideWidth; // limit in after we reset inner circle of slides margins, compare like % val
    String.prototype.bool = function() {
        return (/^true$/i).test(this);
    };
    
    function leftArrowHandler(slides) {     
        $(this).attr('blocked', true);
        
        slides.forEach(function (slide, i) {
            if (slides_margin[i] === -60) {
                $(slide).fadeOut(900, function () {
                    slides_margin[i] = widthLimit;
                    $(slide).css('left', slides_margin[i] + '%');
                    setTimeout(function () {
                        $(slide).fadeIn();
                    }, 500);
                });
            } else {
                slides_margin[i] -= slideWidth;
            }

            $(slide).css('left', slides_margin[i] + '%');
        });
        
        var that = this;
        setTimeout(function() {            
            $(that).attr('blocked', false);
        }, 1000);
    }
                
    function rightArrowHandler(slides) {  
        $(this).attr('blocked', true);
        slides.forEach(function(slide, i) {            
            if(slides_margin[i] === widthLimit ) {                                
                $(slide).fadeOut(900, function() {                     
                     slides_margin[i] = -slideWidth * (slides.length - 1 - visibleSlides);
                     $(slide).css('left', slides_margin[i] + '%'); 
                     setTimeout(function() {
                         $(slide).fadeIn(0);
                         
                     }, 2000);
                 });                             
            }  else {                 
                slides_margin[i] += slideWidth; 
            }                 
                
            $(slide).css('left', slides_margin[i] + '%');
        });
        
        var that = this;
        setTimeout(function() {
            $(that).attr('blocked', false);
        }, 1000);        
    }    
      
    function renderSlider(slides_data, sliderWrap) {       
        var viewPort = $('<div/>').addClass('slider-viewport');
        
        slides_data.forEach(function(slide, i) {            
            var slideDiv = $('<div/>').addClass('s20');
            
            $(slideDiv).click(function(){                              
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
    
    function setArrowsHandlers(leftSel, rightSel, sliderWrap) {
        var slides = $(sliderWrap + ' .slider-viewport').children().toArray();  
        $(leftSel).attr('blocked', false);
        $(rightSel).attr('blocked', false);
        
        $(leftSel).click(function () {     
            var block = $(this).attr('blocked');            
            if(!block.bool()) leftArrowHandler.bind(this, slides)();
        });
        $(rightSel).click(function () {
            var block = $(this).attr('blocked');
            if(!block.bool()) rightArrowHandler.bind(this, slides)();            
        });
    }
    
    return {        
        render: function(opts) {             
            renderSlider(opts.slides, opts.sliderWrap);
            setMargins(opts.sliderWrap);
            setArrowsHandlers(opts.leftSel, opts.rightSel, opts.sliderWrap);
        }
    };
    
})();