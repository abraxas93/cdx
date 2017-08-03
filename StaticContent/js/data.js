var log = {
    info: 1,
    warning: 5,
    error: 10
};

var buttons = {
    close: 1,
    minimize: 2
};


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