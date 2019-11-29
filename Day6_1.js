"use strict";
exports.__esModule = true;
// every js file is a valid ts file
var AbstractMobile = /** @class */ (function () {
    function AbstractMobile() {
    }
    AbstractMobile.prototype.sms = function () { };
    return AbstractMobile;
}());
var Mobile = /** @class */ (function () {
    function Mobile() {
        this.width = 10;
        // super();
    }
    Mobile.prototype.call = function () { };
    Mobile.prototype.sms = function () { };
    return Mobile;
}());
// interfaces. Props and Methods
// transpilation
// interface IMobile {
//     width: number;
//     call();
//     sms();
// }
var Day6_2_1 = require("./Day6_2");
var mc = new Day6_2_1.MyClass();
mc.myMethod();
console.log(Day6_2_1["default"]);
