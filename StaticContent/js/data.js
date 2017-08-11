/* instructions */

var instruction = {
    type: 'instruction',
    image: 'img/small-test.jpg',
    text: 'Position your eyes approximately arms length away from the monitor.\nFrom your line of sight, make sure the test plates are at a 90° angle.\nYou have ## seconds to view each test plate before it disappears.\nAs mentioned above, the test plate will disappear but you still have ## seconds to answer.\nEnter the number on the test plate, if there is one, using the number pad on the screen or the keyboard.\nSelecting "С" clears the current answer and selecting "n" represents the answer nothing.\nAfter entering the answer, select either the enter (return) key or select the arrow on the monitor.\nThe first test plate will be a demonstration plate with the number 16.Select the arrow to begin.'
}
var test1 = {
    type: 'plate',
    image: 'img/test1-big.png',
    width: 484,
    height: 440,
    panel: 'keypad'   
}

var test2 = {
    type: 'plate',
    image: 'img/test2.png',
    width: 565,
    height: 400,
    panel: 'shapes'
}

/* side tabs json */
var tabs = [{
    active: false,
    text: 'Collor Calibration'    
}, {
    active: false,
    text: 'Luminance Calibration'
},{
    active: true,
    text: 'Size Calibration'
}];

/* config menu json for menu */
var configTabs = [{
    text: "Deactivation",
    active: false,
    onclick: "window.location.href='deactivation.html'"
},{
    text:"Calibration",
    active: true,
    onclick: "window.location.href='calibration.html'"
},{
    text: "Profile",
    active: false,
    onclick: "window.location.href='profile_calibration.html'"
},{
    text: "Email",
    active: false,
    onclick: "window.location.href='change_email.html'"
},{
    text: "Test Ordering",
    active: false,
    onclick: "window.location.href='third.html'"
},{
    text: "TeamViewer",
    active: false,
    onclick: "window.location.href='teamviewer.html'"
}];


var log = {
    info: 1,
    warning: 5,
    error: 10
};

var buttons = {
    close: 1,
    minimize: 2
};

/* bottom menu */
var menu = [{
    id: 12,
    title: "UsersKeyboard",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: 24,
    title: "Exit",
    class: '',
    onClick: function () {
        window.native.btmMenuClick(this.id);
    },
    active: false
},
{
    id: 34,
    title: "ItemTab",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: 67,
    title: "Some",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: 67,
    title: "Some",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: true
},
{
    id: 67,
    title: "Category",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: 67,
    title: "MenuItem",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: true
},
{
    id: 67,
    title: "Category",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: 22,
    title: "Active",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: true
},
{
    id: 67,
    title: "MenuItem",
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
}];

var topmenu = [{
    id: 12,
    title: "Account",
    img: '',
    position: 'left',
    class: 'active',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: buttons.close,
    title: "Close",
    img: 'img/plus.png',
    position: 'right',
    class: 'control-btn',
    onClick: function () {
        window.native.topMenuClick(this.id);
    },
    active: false
},
{
    id: buttons.minimize,
    title: "Minimize",
    img: 'img/minus.png',
    position: 'right',
    class: 'control-btn',
    onClick: function () {
        window.native.topMenuClick(this.id);
    },
    active: false
},
{
    id: 67,
    title: "Service",
    img: '',
    position: 'left',
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
},
{
    id: 67,
    title: "Profile",
    img: '',
    position: 'right',
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: true
},
{
    id: 67,
    title: "Category",
    img: '',
    position: 'left',
    class: '',
    onClick: function () {
        console.log('clicked item: ' + this.id);
    },
    active: false
}];

var slides = [
    {
        id: 252,
        title: "Older Children Diagnostic",
        img: 'img/5.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Here will be demo text for slide 2. Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.'
    },
    {
        id: 252,
        title: "Senior Diagnostic",
        img: 'img/45.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Here will be special description for third sample. Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.'
    },
    {
        id: 252,
        title: "Pediactric CVTME",
        img: 'img/7.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: '4 Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Screening: 14",
        img: 'img/8.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: '5 Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Tritan: 12",
        img: 'img/12.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: '6 Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "D - 15",
        img: 'img/15.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: '7 Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Adult Diagnostic",
        img: 'img/16.png',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box-before').attr('class', 'text-box-before');
            $('.text-box-before').addClass('box' + position);
            this.showTextBox('.text-box');
            $('.test-description').fadeIn();
        },
        showTextBox: function (textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text slide1. Sample text slide1. Sample text slide1. Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1. '
    }];


var _tests = [
    { title: 'Adult Diagnostic' },
    { title: 'Older Children Diagnostic' },
    { title: 'Senior Diagnostic' },
    { title: 'Pediactric CVTME' },
    { title: 'Screening: 14' },
    { title: 'Tritan: 12' },
    { title: 'D - 15' },
]