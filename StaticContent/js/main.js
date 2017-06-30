

function renderBottomMenu(menu) {
    var container = $('#main-nav .navigation');
    
    menu.forEach(function(item) {
        var menuEl = $('<a/>', {
            href: item.url,
            id: item.id,
            html: item.title,
            click: item.onClick
        });
        $(menuEl).appendTo(container).wrap('<li><div class="wrapper"></div></li>');
        if(item.active) menuEl.addClass('active');
    });
}
var menu = [{
        id: 12,
        title: "Keyboard",
        url: '#',
        onClick: function () {
            console.log('clicked item: ' + this.id);
        },
        active: false
    },
    {
        id: 24,
        title: "Exit",
        url: '#',
        onClick: function () {
            console.log('clicket item: ' + this.id);
        },
        active: true
    }];

