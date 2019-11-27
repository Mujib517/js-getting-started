// arrow functions (lambda)
// Covert functions to arrow functions 

// function add(a) {
//     console.log("adding");
//     return a + 10;
// }

// var fun = (a, b) => a + b;

// var res = fun(20, 30);
// console.log(res);

// a => {
//     console.log("adding");
//     return a + 10;
// }

// () => console.log("arrow function");


// function add(a, b) {
//     if (typeof a === 'function') a = a();
//     if (typeof b === 'function') b = b();
//     console.log(a + b);
// }

// add(10, 20);
// add("Mr.", " Joseph");
// add(function () {
//     return 100;
// }, () => 200);

var car = { width: 10000 };

class Mobile {
    width = 100;

    makeCall(phoneNumber) {
        var inner = () => {
            console.log(this);
            console.log(this.width);
        }
        inner();
    }
}

var m = new Mobile();
// m.makeCall(1234567890);
m.makeCall.call(car, 1234567890);
