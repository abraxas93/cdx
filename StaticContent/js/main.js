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
    function renderTopMenu(menu) {
        menu.forEach(function(item, i) {
            console.log(item);
            var props = {
                id:item.id,
                class: item.class
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
            $('.container').css('padding-top', '50px');
        });
    }

    function renderBottomMenu(menu) {
        var menuWidth = $('#main-nav').width();
        var shift = 19 * (menu.length - 1);

        $('.navigation').css('right', shift);
        menu.forEach(function (item, i) {
            var menuEl = $('<a/>', {
                id: item.id,
                html: item.title
            });
            $(menuEl).appendTo('.navigation')
                .wrap('<li class="' + item.class + '"></li>')
                .parent().click(function() {
                    item.onClick();
                });
            if (item.active) menuEl.parent().addClass('active');
            menuEl.parent().click(item.onClick);
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
                $('.main-title').html(actualError.message.join('. ')).addClass('err-notes');
                $('.top-logo').attr('src','img/eye-err.png');
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
        $('.overlay').height(height).fadeIn('fast'); 
        var currentHeight = $('.inner-frame').height();
        $('.inner-frame').css('min-height', currentHeight);
        
        // here will start ajax request, something like $('.container').load('second.html .container');
        
        var html = $('.container');
        $('.container').transition(transition.in, transition.time, function() {
            $('.container').remove();
        });
        
        // simple mock for ajax response
        setTimeout(function() {
            $(html).appendTo('.inner-frame');
            $(html).transition(transition.out, transition.time, function() {
                $('.overlay').fadeOut('fast'); 
            });
        }, 2000);
    }

    return {
        renderBotMenu: renderBottomMenu,
        renderTopMenu: renderTopMenu,
        parseFormFields: parseFormFields,
        loadScreen: loadScreen
    }
})();



