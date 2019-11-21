// constructor function
// Pascal Casing 
function Mobile(color) {
    // data/ state
    this.width = 7;
    this.height = 10;
    this.color = color;
}

Mobile.prototype.PI = 3.14;
// behavior
Mobile.prototype.call = function () {
    console.log("Calling...");
}
Mobile.prototype.sms = function () { }

var m1 = new Mobile("Black"); // 12 bytes
var m2 = new Mobile("Red");  // 12 bytes
var m3 = new Mobile("Blue"); // 12 bytes

// var m4 = m1;

// console.log(m1 === m2); // reference equality
// console.log(m4 === m1); // reference equality

console.log(m1.color);
m1.call();