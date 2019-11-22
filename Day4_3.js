// ES 6. ECMA   --> console.log()
// ES 5

// 1. object literals {} 
// 2. constructor function
// 3. Object.create
// 4. class

class Mobile {
    
    constructor() {
        this.width = 100;
        this.height = 200;
    }

    call() {
        console.log("Calling..");
    }
}

var m = new Mobile();
m.call();
console.log(m.width);