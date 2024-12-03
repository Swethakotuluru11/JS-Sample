/*console.log(a);//undefined
a=10;
console.log(a);
var a="hello";
console.log(a);
*/
//scope means where can we access variables
//wherever execution context created on that time lexical environmsnt created.
//Global scope
let name = "John"; 

function sayHello() {
      console.log("Hello " + name);
}

sayHello(); 
//local variable
function abc(){
    let a ="hello";
    console.log("hello"+a);//hello hello
}
abc();
console.log(a);//reference type error
//Nested variable
function greet1(){
    console.log("message");
    let b=10;
    function greet2(){
        console.log(b);
    }
    greet2();
}
greet1();
//block variable
console.log(b);
function sayHello() {
    let name = "John"; // Function variable

    if (true) {
        let message = "Hello"; // Block variable
        console.log(message + " " + name); 
        // Output: "Hello John"
    }

    console.log(message); 
    // Output: Uncaught ReferenceError: 
    // message is not defined
}
e();//hoisted
function e(){
    var c=10;
    console.log(c);//it will lexically environment is created in function e().
    f();
    function f(){
    console.log(c);//c has access to lexical environment of parent(a())elements
    }
}

//console.log(c);
