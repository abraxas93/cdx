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




