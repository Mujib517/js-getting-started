// every js file is a valid ts file
class AbstractMobile {
    sms() { }
}

class Mobile implements IMobile {
    width = 10;
    constructor() {
        // super();
    }

    call() { }
    sms() { }
}

// interfaces. Props and Methods
// transpilation
// interface IMobile {
//     width: number;
//     call();
//     sms();
// }
// import myVar, { MyClass, PI, myFun, IMobile } from './Day6_2';

// var mc = new MyClass();
// mc.myMethod();
// console.log(myVar);