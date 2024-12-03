var obj=[1,"ram",3];
for(var i=0;i<obj.length;i++)
{
console.log(obj[i]);
}
var emp = new Array();
emp[0]='1';
emp[1]='5';
emp[2]='8';
console.log(emp);
var fruits = new Array("Mango","Banana","orange");

for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log(fruits.concat("Apple"));
console.log(fruits.indexOf("mango"));
console.log(Array.isArray(fruits));
console.log(fruits.toString());

var arr= new Array(10,20,40,50);   
function f1() {  
      console.log("arr is forming an array i.e"+arr);    
                      }  
function f2() {  
     console.log("arr does not form any array. <br>");  
                      }  
if(Array.isArray(arr))  
f1();  
else  
    f2(); 
//to print arrays using objects
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}
// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];
console.log("Original Array: " + a);

// Removes and returns the last element
let lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);

