native = window.native || {
    // Mocking native if launched not from c#
    init: function () {},
    log: function (string, level) {
        console.log(string);
    },
    btmMenuClick: function (id) {
        console.log(id + ' clicked....');
    },
    testsOrderSubmitted: function(payload) {
        console.log('Saving sort order ...');
    },
    registrationSubmitted(payload, callback) {
        console.log('Submitting registration page...');
        if (!payload.firstName || payload.firstName == '') {
            callback(new Error("Please enter first name\nMultiline example"), ['firstName'])
        } else {
            window.location.href = 'second.html';
        }
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
        var itemWidth = 215; // min-width of menu item        
        var menuWidth = $('#main-nav').width();
        var marginRight = 188;
        
        var container = $('#main-nav .navigation');
        var maxMenuItems = Math.round(menuWidth / marginRight);       
        console.log(maxMenuItems); // should be redone
        if(maxMenuItems < menu.length) {
            
            var pixels = 0;
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
            
        } else {
            
            var pixels = 0;
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
    }

    function highlightErrors(errorFieldNames) {
        $("input[name='first-name']").removeClass('error');
        $("input[name='last-name']").removeClass('error');
        $("input[name='email']").removeClass('error');
        $("input[name='phone']").removeClass('error');
        $("input[name='company-name']").removeClass('error');
        $("input[name='web-site']").removeClass('error');
        $("input[name='adress']").removeClass('error');
        $("input[name='city']").removeClass('error');
        $("input[name='state']").removeClass('error');
        $("input[name='country']").removeClass('error');
        $("input[name='zip-code']").removeClass('error');
        $("input[name='distributor']").removeClass('error');
        $("input[name='distributor']").removeClass('error');
        $("input[name='sales']").removeClass('error');
        $("input[name='trade']").removeClass('error');
        $("input[name='other']").removeClass('error');

        errorFieldNames.forEach(function (item) {
            // TODO full mapping
            if (item == 'firstName') {
                $("input[name='first-name']").addClass('error');
            }
        });
    }
    
    function parseFormFields() {
        var model = {};
        model.firstName = $("input[name='first-name']").val();
        model.lastName = $("input[name='last-name']").val();
        model.email = $("input[name='email']").val();
        model.phone = $("input[name='phone']").val();
        model.companyName = $("input[name='company-name']").val();
        model.webSite = $("input[name='web-site']").val();
        model.adress = $("input[name='adress']").val();
        model.city = $("input[name='city']").val();
        model.state = $("input[name='state']").val();
        model.country = $("input[name='country']").val();
        model.zipCode = $("input[name='zip-code']").val();
        model.distributor = $("input[name='distributor']").val();
        model.friend = $("input[name='distributor']").val();
        model.sales = $("input[name='sales']").val();
        model.trade = $("input[name='trade']").val();
        model.other = $("input[name='other']").val();
        
        native.registrationSubmitted(model, function (err, errorFieldNames) {
            if (err) {
                alert(err.message);
                highlightErrors(errorFieldNames);
            }
        });
    }
    
    return {
        renderBotMenu: renderBottomMenu,
        parseFormFields: parseFormFields
    }

})();

/* Switcher for test table */
var TestSwitcher = (function() {
    var positions = $('.list-item').toArray();
    var animationTime = 1000;
    var blocked = false;
    
    positions.forEach(function(el, i) {
        $(el).attr('data-pos', i);
    });
    
    function refreshAll() {
        $('.list-item').each(function (i, el) {
            $(el).attr('data-pos', i).css('top', '0px');
            $(el).children('.test-position').html(i + 1);
            positions[i] = el;
        });
        blocked = false;
    }
    
    function moveTestUp() {       
        blocked = true;
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
            }, animationTime, function () {
                $(this).children('.test-position').html(++currentPos);
            });
            $(previousTest).animate({
                top: "+=58"
            }, animationTime, function () {
                $(previousTest).children('.test-position').html(++previousPos);
                blocked = false;
            });
        }
        native.testsOrderSubmitted();
    }
    
    function moveTestDown() {
        blocked = true;
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
            $(nextTest).attr('data-pos', --nextPos);

            $(this).animate({
                top: "+=58"
            }, animationTime, function () {
                $(this).children('.test-position').html(++currentPos);
            });
            $(nextTest).animate({
                top: "-=58"
            }, animationTime, function () {
                $(nextTest).children('.test-position').html(++nextPos);
                blocked = false;
            });
        }
        native.testsOrderSubmitted();
    }
    
    
    return {
        moveUp: function(context) {            
            var moveFunc = moveTestUp.bind(context);
            if(!blocked) {
                moveFunc();
            }
        },
        moveDown: function(context) {
            var moveFunc = moveTestDown.bind(context);
            if(!blocked) {
                moveFunc();
            }
        }
    }
    
})();

