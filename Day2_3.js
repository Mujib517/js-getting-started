// constructor function
// Pascal Casing 
function Mobile(color) {

    this.width = 7;
    this.height = 10;
    this.color = color;
    this.call = function () {
        console.log("Calling...");
    }

    this.sms = function () { }
}

var m1 = new Mobile("Black");
var m2 = new Mobile("Red");
var m3 = new Mobile("Blue");

console.log(m1);