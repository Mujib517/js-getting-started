"use strict";
// modules, IIFE, Module design pattern
// ES6 modules
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.myMethod = function () {
        console.log("My method");
    };
    return MyClass;
}());
exports.MyClass = MyClass;
var x;
exports["default"] = x = "Value of x";
exports.PI = 3.14;
function myFun() { }
exports.myFun = myFun;
