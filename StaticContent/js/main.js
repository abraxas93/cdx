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

var positions = [];

$('.list-item').each(function(i, test) {    
    $(test).attr('data-pos', i);
    positions[i] = test;    
});

console.log(positions.length);

$('.list-item').click(function() {
    
    var currentPos = $(this).attr('data-pos');
    var previousPos = currentPos - 1;
    var previousTest = positions[previousPos];
    
    
    if(parseInt(currentPos) === 0) {
        
        $(this).attr('data-pos',  positions.length - 1);
        var lastTest = positions.pop();
        positions.push(this);
        positions[0] = lastTest;                
        
        $(this).appendTo('#tests');
        $('.test-position').each(function(i, el) {            
            $(el).html(i + 1);
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
    
});


