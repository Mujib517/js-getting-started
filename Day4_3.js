// ES 6. ECMA   --> console.log()
// ES 5

// 1. object literals {} 
// 2. constructor function
// 3. Object.create
// 4. class

class AbstractMobile {
    constructor() {
        console.log("Super");
        this.color = "Black";
    }

    sms() {
        console.log("SMSing...");
    }
}

class AbstractMobile2 {
    sms2() {
        console.log("SMSing...");
    }
}

class Mobile extends AbstractMobile {

    constructor() {
        console.log("Derived");
        super();
        this.width = 100;
        this.height = 200;
        //time consuming operation
    }

    call() {
        console.log("Calling..");
    }
}

var m = new Mobile();
m.call();
m.sms();
console.log(m.width);