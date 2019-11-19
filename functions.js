// in JS functions are first class citizens

// function print(){
//     console.log("Hello world");
// }

// print();
// method names: verbs
// variable names: nouns
// refactoring

function calculateSum(a){
    var sum=0;
    for(var i=0;i<a.length;i++){
        sum= sum+a[i];
    }
    return sum;
}


function add(a,b){

    if(typeof a === 'function') a= a();
    if(typeof b === 'function') b=b();

    if(Array.isArray(a))  a = calculateSum(a);
    if(Array.isArray(b)) b= calculateSum(b);

    var c= a+b;
    console.log(c);
}

add(10,20); //30
add(10,"abc"); //10abc
add("abc"," def"); //abc def
add([1,2,3],[4,5,6]); //1,2,34,5,6

function first(){
    return 100;
}

function second(){
    return 200;
}

 add(first,second);
 add(first,10);
 add(second,[1,2,3]);