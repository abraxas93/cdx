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




