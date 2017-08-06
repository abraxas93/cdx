var requiredTable = {
        "firstName" : "first-name",
        "lastName" : "last-name",
        "email" : "email",
        "phone": "phone",
        "adress" : "adress",
        "city": "city",
        "state": "state",
        "country": "country",
        "zipCode": "zip-code"
    };

var notValidFields;
var fieldsString;
native = window.native || {
    // Mocking native if launched not from c#
    init: function () {},
    log: function (string, level) {
        console.log(string);
    },
    btmMenuClick: function (id) {
        console.log(id + ' clicked....');
        return Promise.resolve(null);
    },
    topMenuClick: function (id) {
        console.log(id + ' clicked....');
    },
    testsOrderSubmitted: function(payload) {
        console.log('Saving sort order ...');
    },
    registrationSubmitted(payload) {
        console.log('Submitting registration page...');
        payload = JSON.parse(payload);
        notValidFields = [];
        for(var field in payload) {
            if(payload[field] == 0 && field in requiredTable) {
                notValidFields.push(field);
            }
        }
        if(notValidFields.length) {
            fieldsString = notValidFields.join(',');
            return Promise.reject('whatever');
        } else {
            return Promise.resolve('second.html');
        }
    },
    getRegistrationError() {
        var messagesFromServer = ['msg from server1 ', 'msg from server2 ', 'msg from server3 ', 'err message4 ','msg from server4 '];
        return Promise.resolve(JSON.stringify({ message: messagesFromServer, fields: notValidFields }));
    },
    getTopMenuItems() {
        return Promise.resolve(JSON.stringify(topmenu));
    },
    getBotMenuItems() {
        return Promise.resolve(JSON.stringify(menu));
    },
    getTabsItems() {
        return Promise.resolve(JSON.stringify(tabs));
    }
};

var app = (function () {  
    function renderTopMenu(menu) {
        menu.forEach(function(item, i) {
            var props = {
                id: item.id,
                class: item.class,
                click: function () {
                    window.native.topMenuClick(this.id);
                }
            }
            if(item.img) {
                props.html = '<img src="' + item.img + '" alt="'+ item.title + '">' + '</img>';
            } else {
                props.html = item.title;
            }

            var menuEl = $('<a/>', props);

            $(menuEl)
                .wrap('<div class="top-menu-item ' + item.class + '"></div>')
                .parent()
                .css('float', item.position)
                .appendTo('.top-nav-wrap');

            if (item.active) menuEl.parent().addClass('active');
            var width = $(menuEl).width();
        });
    }

    function renderBottomMenu(menu) {
        var menuWidth = $('#main-nav').width();
        var shift = 19 * (menu.length - 1);

        menu.forEach(function (item, i) {
            var menuEl = $('<a/>', {
                id: item.id,
                html: item.title
            });
            $(menuEl).appendTo('.navigation')
                .wrap('<li class="' + item.class + '"></li>')
                .parent().click(function () {
                    window.native.btmMenuClick(item.id.toString()).then(function (page) { if (page != null) { window.location.href = page; } });
                });
            if (item.active) menuEl.parent().addClass('active');
            menuEl.parent().css('right', -shift);
            shift -= 17;
        });
    }

    function highlightErrors(errorFieldNames, errorFieldMessages) {
        errorFieldNames.forEach(function (item, i) {
            var selector = "input[name='" + requiredTable[item] + "']";
            $(selector).addClass('error').attr('placeholder', errorFieldMessages[i] || 'Error in the field').focus(function() {
                $(this).removeClass('error').attr('placeholder', '');
                // That looks strange
                // if(!$('.error').length) {
                //     $('.top-banner').removeClass('err-banner');
                //     $('.top-logo').attr('src', 'img/reg-head.jpg');
                // }
            })
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

        native.registrationSubmitted(JSON.stringify(model)).then(function (location) {
            window.location.href = location;
        }).catch(function (errorObject) {
            native.getRegistrationError().then(function (errorObject) {
                var actualError = JSON.parse(errorObject);
                $('.main-title').html(actualError.message.join('. ')).addClass('err-notes').removeClass('flash');
                window.setTimeout(function () { $('.main-title').addClass('flash'); }, 0);
                $('.top-logo').attr('src', 'img/eye-err.png');
                $('.top-banner').addClass('err-banner');
                highlightErrors(actualError.fields, actualError.message);
            });
        });
    }

    function loadScreen(transition) {
        if(!$('.overlay').length) {
            $('<div/>', {
                class: 'overlay'
            }).appendTo('body');
        }

        var height = $(document).height();
        $('.overlay').height(height).fadeIn(200); 

        $('.loading-cont2').load('second.html .bg-wrap', function () {
            $('.loading-cont').transition(transition.out, transition.time);
            $('.loading-cont2').transition(transition.in, transition.time);
            $('.overlay').fadeOut(200);
        });
    }
    
    function renderSettingTabs(data) {
        var sideMenu = $('<ul/>', {
            class: 'side-menu'
        }).appendTo('.setting-tabs');
        data.forEach(function(item) {            
            var menuEl = $('<a/>', {                
                html: item.text
            });
            if(item.active) 
                menuEl.wrap('<li class="side-menu-item active"></li>');
            else
                menuEl.wrap('<li class="side-menu-item"></li>');
                
            menuEl.parent().appendTo('.side-menu');
        });
        sideMenu.appendTo('.side-bar');
        $('.side-menu-item').click(function() {
            $('.side-menu-item.active').removeClass('active');
            $(this).addClass('active');                
        });
    }
    
    return {
        renderBotMenu: renderBottomMenu,
        renderTopMenu: renderTopMenu,
        renderTabs: renderSettingTabs,
        parseFormFields: parseFormFields,
        loadScreen: loadScreen
    }
})();

/* keypress event handler for arrow */

$(document).keypress(function(e) {
    if(e.which === 13) {
        $('.submit-arrow').click();    
        $('.save').click();
        $('.submit-btn').click();
    }
});
