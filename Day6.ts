// function add(a, b) {
//     if (a === null || a === undefined) a = 10;
//     if (!a) a = 10; // "", 0, false, NaN, null, undefined
//     if (!b) b = 20;
//     console.log(a + b);
// }

// add();
// add(40, 50);
// Typescipt superset JS
// set {1,2,3}  subset ->{1}, {1,2} , {1,3}
// superset -> {1,2,3,4,5,6}
// var person = {
//     name: "JOhn",
//     age: 20
// };
// person.age = 100;
// person.age++;
// console.log(person);

// var x: number = 10;
// x = 100.20;
// console.log(x);
// flexibility  --> safety

// function add(a: any, b: any) {
//     console.log(a + b);
// }
// add(10, 20);
// add("abc", "def");
// number, string, boolean, object, undefined, function, any
var x: any = 10;
x = "abc";

console.log(x);

