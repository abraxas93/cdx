

function renderBottomMenu(menu) {
    var container = $('#main-nav .navigation');
    
    var pixels = -((menu.length - 1) * 37); 
    
    menu.forEach(function(item, i) {        
        var menuEl = $('<a/>', {
            href: item.url,
            id: item.id,
            html: item.title,
            click: item.onClick
        });              
        $(menuEl).appendTo(container).wrap('<li class="'+ item.class +'"></li>');
        if(item.active) menuEl.parent().addClass('active');
        if(i !== menu.length - 1) menuEl.parent().css('right', pixels);
        pixels += 37;
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

