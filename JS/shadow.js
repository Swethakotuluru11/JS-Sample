
/*console.log(a);//can not access a before initialization//Reference error
let a;
a=10;//can not access//throws reference error
var b=100;
*/
//window means that same global object used that
//shadowing
//using blockscope 
//shadowing is not applicable let and const..
let b=10;
if(true){
    let b=100;
    console.log(b);
}

console.log(b);
//using var using shadow
var c=10;
if(true){
    var c=100;
    console.log(c);
}

console.log(c);//its shadow variable that's why print 100
let a;
a=266;
console.log(a);
//const b;//syntax error missing initialization
//b=12;//it shows error syntax error
console.log(b);
//illegal shadowing
