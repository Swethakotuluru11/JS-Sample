/*
// var code (global)
console.log(name1); // undefined//because var stored in global scope it gives undefined. in let and const gives reference error because stored in another memoory.not in global execution memory.
var name1 = 'Mukul';
// how interpreter sees the above code
var name2;
console.log(name2); // undefined
name2 = 'Mukul Latiyan';
console.log(foo); // undefined
var foo = 'bar';
var foo='red'
console.log(foo); // red
//console.log(bar); // ReferenceError: Cannot access 'bar' before initialization
let bar = 'baz';

var y = 5;
let z= 7;
console.log(y + " " + z); // "5 7"
*/

function codeHoist() {
   a = 10;//hoisting allows variables declared with var to be accessed before declaration, but not those declared with let or const. Thus, a is accessible, but b throws a ReferenceError
    b = 50;
    //the a , b acts global variable and prints a nd b valus
    var c=10;//it's defined in local scope only so its printt
    console.log(c);
}
codeHoist();

console.log(a); // 10
console.log(b);
console.log(c); // ReferenceError : c is not defined
/*
//the above code having error that's why the compiler doesn't move to next line of the code.

//function Hoisting
var x=7;
function getName(){
    console.log("JavaScript");
}
getName();
console.log(x);
console.log(getName);

getName();//function is hoisted
var x=7;
function getName(){
    console.log("JavaScript");
}

console.log(x);
console.log(getName);
getName();//function hoisted
console.log(x);//undefined
console.log(getName);//Output is showing function getName(){console.log("JavaScript");}

var x=7;
function getName(){
    console.log("JavaScript");
}

getName();//its print getName is nat a function
console.log(x);
console.log(getName);
var x=7;

var getName= ()=>{ //Arrow
    console.log("JavaScript");
}
    
getName();//its print nothing
console.log(getName);
var x=7;

function getName(){ 
    
}
// Function scoped
function fun() {
    console.log(name3);
    var name3 = 'Mukul Latiyan';
  }
  fun(); // Undefined
  //globally
  var name5;
function fun() {
    console.log(name5);
    name5 = 'ram';
    }
fun(); // undefined
//let example(global)
console.log(name5);
let name5 = 'Mukul Latiyan'; // ReferenceError: name is not defined


var foo;

console.log(foo); // undefined

foo = 'foo';

console.log(foo);
console.log(a);//its get a reference error
a=10;//
console.log(b);//its get undefined. because the var stored in globally exeecution same way window is created..so, its take undefined.
 var b=100;
 */
//hoisting refers to where the interpreter moves functions and variable declaraton to their respecive scope before executig the code.