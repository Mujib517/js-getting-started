// Functions: no void functions

// function fun() {
//     console.log(arguments);
//     console.log("Hello world", arguments[0], arguments[1]);
//     // return undefined;
// }

// var res = fun(10, 20, 30, 50, 100);
// console.log(res);


// function add(a, b) {
//     var c = a + b;
//     return c;
// }



// var result = add(10, 20);
// console.log(result);

// var res2 = add(500, 100);
// console.log(res2);


// function add() {
//     var c = arguments[0] + arguments[1];
//     console.log(c);
// }


// add(10, 20);


// function add() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     console.log(sum);
// }

// add(10, 20, 43);
// add(10, 20, 43,560);
// add(10, 20, 43,560,100,2300,400);
// add(10);

// closure
// function fun2() {

//     console.log("Fun 2");

//     function fun3() {
//         console.log("Fun 3");
//     }

//     return fun3;

//     // return 100;
//     // return null;
//     // return "Kalyan";
//     // return [1, 2, 3];
//     // return {};
//     // return function abc() { };

//     // return undefined;
// }

// var res = fun2();
// console.log(typeof res);
// res();

// function fun4(a) {
//     console.log(typeof a);
//     if (typeof a === 'function')
//         a();
// }

// Dev 
// Stage
// QA
// Prod
// fun4(10);
// function test() {
//     console.log("Test function");
// }

// fun4(test);
// higher order function: takes fun as argument/return a function
// fun4("abc");
// fun4([1, 2, 3]);
