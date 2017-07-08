var menu = [{
                id: 12,
                title: "UsersKeyboard",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: false
            },
            {
                id: 24,
                title: "Exit",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: true
            },
            {       
                id: 34,
                title: "ItemTab",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: false
            },
            {
                id: 67,
                title: "Some",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: false
            },
            {
                id: 67,
                title: "Some",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: false
            },
            {
                id: 67,
                title: "Category",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: false
            },
            {
                id: 67,
                title: "MenuItem",
                url: '#',
                class: '',
                onClick: function() {
                    console.log('clicked item: ' + this.id);
                },
                active: false
            }          
           ];

var slides = [
    {
        id: 252,
        title: "Slide1",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);            
        },
        description: 'Sample text slide1. Sample text slide1. Sample text slide1. Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1.Sample text slide1. '
    },
    {
        id: 252,
        title: "Slide2",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description:'Here will be demo text for slide 2. Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.Here will be demo text for slide 2.'
    },
    {
        id: 252,
        title: "Slide3",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description:'Here will be special description for third sample. Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.Here will be special description for third sample.'
    },
    {
        id: 252,
        title: "Slide4",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Slide5",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Slide6",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Slide7",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Slide8",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
    {
        id: 252,
        title: "Slide9",
        img: 'img/scr2-pic1.jpg',
        onclick: function (position) {
            console.log('Item was clicked: ' + this.title);
            var classes = $('.text-box').attr('class').split(' ');
            
            
            classes.forEach(function(className, i) {
                if(i != 0) $('.text-box').removeClass(className);
            });
            
            $('.text-box').addClass('box' + position);
            this.showTextBox('.text-box');
        },
        showTextBox: function(textBox) {
            $(textBox).text('').text(this.description);
        },
        description: 'Sample text. Sample text. Sample text. Sample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample textSample text. Sample text. Sample text'
    },
];