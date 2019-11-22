// patterns : IIFE, module
// functional scoping

// var x = 100;
// console.log(x);

// (function () {
//     var x = 100; //global, window.x
//     console.log(x);
// })();


// (function () {
//     var x = 100; //global, window.x
//     console.log(x);
// }());

function student() {
    var name = "John";

    var fun = function () { };

    var add = function () {
        console.log("Adding...");
    }

    var get = function () {
        console.log("getting...");
    }

    return {
        add: add,
        get: get,
    }
}

var std = student();
std.add();
std.get();
console.log(std.name);