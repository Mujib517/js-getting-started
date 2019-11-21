// Object.create
// two modes: Sloppy mode and Strict Mode
'use strict';
// function newFun() {
//     x = 100;
// }

// y = 1000;

// newFun();

// var x = "abc";
// x = 100;
// Object -> abstractMobile -> mobile

var abstractMobile = {
    call: function (mobileNumber) {
        console.log("Calling...", mobileNumber);
    },
    sms: function () { }
}

var mobile = Object.create(abstractMobile, {
    width: { value: 10, writable: false, enumerable: true, configurable: false }, //readonly
    height: { value: 5, enumerable: false },
    color: { value: "Black", enumerable: true },
});

mobile.toString = function () {
    console.log("Strigifying object");
}

mobile.call(123457890);
console.log(mobile.toString());
// mobile.someMethod();

// function add(a, b, a) {
//     console.log(a + b);
// }

// add(10, 20, 30);

// var x = 100;
// console.log(x);

// Object.defineProperty(mobile, "width", {
//     writable: true
// });

// mobile.width = 1000;

// console.log(mobile.width);

// //reflection
// for (var key in mobile) {
//     console.log(key);
// }


// console.log(mobile.color, mobile.width);

// var mobile = {
//     width: 10,
//     height: 5,
//     color: "Black"
// }