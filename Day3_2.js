// "this"
// 'use strict';

var mobile = {
    width: 10,

    display: function (a, b) {
        // function inner() {
        console.log(this);
        console.log(this.width, a, b);
        // }
        // inner();
    }
};

function Car() {
    this.width = 1000;
}

var c = new Car();

// context
// mobile.display(); // "this" : referring to mobile object

// var fun = mobile.display;
// fun();  // "this": referring to global object

// mobile.display();
// Runtime polymorphism
mobile.display.call(c, 10, 20, 30, 40, 50);
mobile.display.apply(c, [10, 20, 30, 40, 50]);


var resultFn = mobile.display.bind(c); // context is Car
resultFn.call(mobile, 10, 20);

