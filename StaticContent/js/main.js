native = window.native || {
    // Mocking native if launched not from c#
    init: function () {},
    log: function (string, level) {
        console.log(string);
    },
    btmMenuClick: function (id) {
        console.log(id + ' clicked....');
    },
    submitNext: function() {
        console.log('Submitting next');
    }
};

var log = {
    info: 1,
    warning: 5,
    error: 10
};
native.init();
native.log('Native bridge inited.', log.info);


var app = (function () {

    function renderBottomMenu(menu) {
        var container = $('#main-nav .navigation');
        var marginRight = 37;

        var pixels = -((menu.length - 1) * marginRight);

        menu.forEach(function (item, i) {
            var menuEl = $('<a/>', {
                href: item.url,
                id: item.id,
                html: item.title,
                click: item.onClick
            });
            $(menuEl).appendTo(container).wrap('<li class="' + item.class + '"></li>');
            if (item.active) menuEl.parent().addClass('active');
            if (i !== menu.length - 1) menuEl.parent().css('right', pixels);
            pixels += marginRight;
        });
    }

    return {
        renderBotMenu: renderBottomMenu
    }

})();




/*$('.list-item').click(function() {
    
    var currentPos = $(this).attr('data-pos');
    var previousPos = currentPos - 1;
    var previousTest = positions[previousPos];
    
    
    if(parseInt(currentPos) === 0) {
        $(this).appendTo('#tests');
        
        $('.list-item').each(function(i, el) {
            $(el).attr('data-pos', i).css('top','0px');
            $(el).children('.test-position').html(i+1);
            positions[i] = el;
        });       
    } else {
        positions[currentPos] = previousTest;
        positions[previousPos] = this;
        
        $(this).attr('data-pos', --currentPos);    
        $(previousTest).attr('data-pos', ++previousPos);
        
        $(this).animate({        
            top: "-=58"
        }, 2000, function() {
            $(this).children('.test-position').html(++currentPos);
        });
        $(previousTest).animate({
            top: "+=58"
        }, 2000, function() {
            $(previousTest).children('.test-position').html(++previousPos);
        });
    }      
});*/

var TestSwitcher = (function() {
    var positions = $('.list-item').toArray();
    
    positions.forEach(function(el, i) {
        $(el).attr('data-pos', i);
    });
    
    function refreshAll() {
        $('.list-item').each(function (i, el) {
            $(el).attr('data-pos', i).css('top', '0px');
            $(el).children('.test-position').html(i + 1);
            positions[i] = el;
        });
    }
    
    function moveTestUp() {       
        
        var currentPos = parseInt($(this).attr('data-pos'));
        var previousPos = currentPos - 1;
        var previousTest = positions[previousPos];
        
        if (currentPos === 0) { // if we have top position , then move to bottom
            $(this).appendTo('#tests');
            refreshAll();
        } else {
            positions[currentPos] = previousTest;
            positions[previousPos] = this;

            $(this).attr('data-pos', --currentPos);
            $(previousTest).attr('data-pos', ++previousPos);

            $(this).animate({
                top: "-=58"
            }, 2000, function () {
                $(this).children('.test-position').html(++currentPos);
            });
            $(previousTest).animate({
                top: "+=58"
            }, 2000, function () {
                $(previousTest).children('.test-position').html(++previousPos);
            });
        }

    }
    
    function moveTestDown() {
        var currentPos = parseInt($(this).attr('data-pos'));
        var nextPos = currentPos + 1;
        var nextTest = positions[nextPos];
        
        if (currentPos === positions.length - 1) {
            $(this).prependTo('#tests');
            refreshAll();
        } else {
            positions[currentPos] = nextTest;
            positions[nextPos] = this;

            $(this).attr('data-pos', ++currentPos);
            $(nextTest).attr('data-po', --nextPos);

            $(this).animate({
                top: "+=58"
            }, 2000, function () {
                $(this).children('.test-position').html(++currentPos);
            });
            $(nextTest).animate({
                top: "-=58"
            }, 2000, function () {
                $(nextTest).children('.test-position').html(++nextPos);
            });
        }        
    }
    
    
    return {
        moveUp: function(context) {            
            var moveFunc = moveTestUp.bind(context);
            moveFunc();
        },
        moveDown: function(context) {
            var moveFunc = moveTestDown.bind(context);
            moveFunc();
        }
    }
    
})();

$('.move-up').click(function() {
    var listItem = $(this).parent().parent().parent();
    TestSwitcher.moveUp(listItem);
});

$('.move-down').click(function() {
    var listItem = $(this).parent().parent().parent();
    TestSwitcher.moveDown(listItem);
});