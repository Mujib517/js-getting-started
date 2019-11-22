// call, apply or bind

// function get() {
//     // return arguments.slice(0, 2);
//     // return [].slice.apply(arguments, [0, 2]);  
//     return [].slice.call(arguments, 0, 2);
// }

// var res = get(10, 20, 30, 40, 50, 60);
// console.log(res);

// closures
// function outer(a) {
//     return function inner(b) {
//         console.log(a + b);
//         return a + b;
//     }
// }

// var inner = outer(10);
// inner(20);
// inner(30);
// inner(40);
// inner(50);

function counter(count) {
    function decrement() {
        --count;
        console.log(count);
        return count;
    }

    function increment() {
        ++count;
        console.log(count)
        return count;
    }

    return {
        inc: increment,
        dec: decrement
    }
}

var count = counter(10);
count.inc();
count.inc();
count.inc();
count.inc();

count.dec();
count.dec();
count.dec();