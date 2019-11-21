// Objects : Dictionaries
// Object literals

var mobile = {
    //nouns : Data/Properties
    color: 'Black',
    width: 5,
    height: 7,

    //verbs
    // methods / behavior
    call: function () {
        console.log("Calling....");
    },
    sms: function () {
        console.log("SMSing");
    },
    'propName': "Hello",
};
// dot notation
// assignment log 

// console.log(mobile.width, mobile.color, mobile.height);
// mobile.call();

//bracket notation
// console.log(mobile["width"], mobile.color);
// mobile["call"]();

// Reflection: for:in
// for (var key in mobile) {
//     console.log(key, mobile[key]);
// }



mobile.width = 100;

console.log(mobile);