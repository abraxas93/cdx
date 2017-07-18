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
            $(selector).addClass('error').attr('placeholder', errorFieldMessages[i] || 'default msg').focus(function() {
                $(this).removeClass('error').attr('placeholder','');
                if(!$('.error').length) {
                    $('.top-banner').removeClass('err-banner');
                    $('.top-logo').attr('src', 'img/reg-head.jpg');
                }
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
                $('.main-title').html(actualError.message).addClass('err-notes');
                $('.top-logo').attr('src','img/eye-err.png');
                $('.top-banner').addClass('err-banner');                
                highlightErrors(actualError.fields, actualError.message);
            });
        });
    }
    
    function loadScreen() {
        
    }
    
    return {
        renderBotMenu: renderBottomMenu,
        renderTopMenu: renderTopMenu,
        parseFormFields: parseFormFields,
        loadScreen: loadScreen
    }

})();

/* Switcher for test table */
var TestSwitcher = (function() {
    var positions = null;
    var animationTime = 500;
    var blocked = false;   
    
    
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
    
    function init(tests) {
        tests.forEach(function(test, i) {           
            var testLi = $('<li/>', {               
                class: 'list-item',  
                html: '<div class="test-position">'+ (i + 1) +'</div><div class="test-name">'
                + test.title + '</div><div class="test-control">' 
                + '<ul class="controls"><li class="move-up">▲</li><li class="move-down">▼</li></ul>'
                + '</div>'
            }).attr('data-pos', i);
            
            $(testLi).appendTo('.test-list');
        });        
        positions = $('.list-item').toArray();
        
        $('.move-up').click(function() {
            var listItem = $(this).parent().parent().parent();
            var moveFunc = moveTestUp.bind(listItem);
            if(!blocked) {
                moveFunc();
            }
        });

        $('.move-down').click(function() {            
            var listItem = $(this).parent().parent().parent();
            var moveFunc = moveTestDown.bind(listItem);
            if(!blocked) {
                moveFunc();
            }            
        }); 
    }   
    
    
    return {
        initTests: function(testsArray) {
            init(testsArray);
        },
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

