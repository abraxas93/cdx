/* Switcher for test table */
var TestSwitcher = (function() {
    var positions = null;
    var animationTime = 200;
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

    function onResize() {
        $('.test-list').height($(window).height() - 400);
    }

    function init(tests) {
        onResize();
        $(window).on('resize', onResize);

        tests.forEach(function (test, i) {
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