/*
//arrays
const a=[10,20,30];
console.log("example1");
const[x,y,z]=a;
console.log(x);
console.log(y);
console.log(z);
console.log("exmple2");
console.log(x);
console.log(y);
*/
//Object Destructuring
const obj = { x: 1, y: 2 };
const { x, y } = obj;
console.log(x); // 1
console.log(y); // 2

//Rest Operator
//using rest operator
let[first, ,...last]=["a",'b','c','d'];
console.log(first);
console.log(last);
//Without using Rest Operator
function fun(g, h) {
return g + h;
}
console.log(fun(1, 2)); 
console.log(fun(1, 2, 3, 4, 5));

/*
//Function Return
function nameList(){
    return ['a','b','c','d'];
}
let [fst,snd]=nameList();
console.log(fst);
console.log(snd);
//Spread Operator
const numberOne=[1,2,3];
const numberTwo=[6,8,9];
const numberCombined=[...numberOne,...numberTwo];
console.log(numberCombined);

//copying array using spread operator
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr2); // [1, 2, 3, 4]
console.log(arr); // [1, 2, 3]

//Spread Operator Using Objects
const user1={name:'swetha',age:22};
const user2={name:"Shivani", location:"Kadapa"};
const mergeAddress={...user1,...user2};
console.log(mergeAddress);
*/
