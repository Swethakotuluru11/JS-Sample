//Array Length Method
let arr=['ram','swetha','shiva'];
console.log(arr.length);
arr.push('prasad');
console.log(arr.length);
console.log(arr);
arr.push('MANU','Jananya');
console.log(arr);
arr.length=7;//taking more legth
console.log(arr);
arr.length=2;//fixed size length
console.log(arr);
arr.length=0;
console.log(arr);
let abc=[];
console.log(abc);
console.log(abc.length);
//concat
let exam=['orange','apple','kiwi'];
let exam1=['orange','mango'];
let combined=exam.concat(exam1);
console.log(combined);
//shift
//The shift() method in JavaScript is used to remove the first element from an array and returns that removed element. This method modifies the original array by reducing its length by one
let number=[54,90,11,4]
const length=number.shift();
console.log(number);
console.log(length);
//unshift
//add the elements to the begining of the array
let numbers = [30, 40];

const length1 = numbers.unshift(20);

console.log({ length1 });
console.log({ numbers });
//at()
//at() element returns index element of the array
let fruits=["Apple","Banana","Orange"];
let fruit=fruits.at(1);
console.log(fruits.length);
console.log(fruit);
//reverse
let arr1 = [1, 2, 3, 4, 5];
let arr2=arr1.reverse();
console.log(arr2);
//reduce()
//its print single output
let arr3 = [1, 2, 3, 4, 5];
let result = arr3.reduce((num, current) => num *current);

//0 is a current vallue of sum=0, or without use 0 its execute the reduce function
let result2=arr3.reduce((sum,start)=> sum + start,0);
console.log(result2);
console.log(result); -13
//Array.isArray
//The isArray() method returns true if an object is an array, otherwise false
let text = "W3Schools";
let result1 = Array.isArray(text);
console.log(result1);//false
let company=["Capgemini",'Infosys','Wipro'];
console.log(company.isArray);
console.log(Array.isArray(company));
//every()
const arr4=[1,4,6,2,8];
const arr5=[22,67,44,34];
function isEven(num){
    return num%2===0;
}
console.log(arr4.every(isEven));//frue
console.log(arr5.every(isEven));//false
//filter
console.log(arr4.filter((element) => element>10));
console.log(arr5.filter((index) => index%2==0));

const words = ["spra", 'elite', 'exuberant', 'destruction', 'present'];
const result4= words.filter((word) => word.length > 6);
//join
console.log(words.join());
console.log(words.join(''));
console.log(words.join(' '));

console.log(result4);
function isBigEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  //find()
  console.log(arr4.find((element)=>element>5));
  console.log(arr4.find((num)=>num==8)? true:false);//using ternary operator
  //forEach()
  function print(element,index){
    console.log(element+" is at index "+index);
  }
   arr4.forEach(print);
   function square(element){
    sum =0;
    sum+=element*element;
   }
   arr4.forEach(square);
   console.log("sum = " +sum);
   //includes
   console.log(arr4.includes(5));
   console.log(arr4.includes(4));
   //reverse
  console.log(arr4.reverse());
  //toString()
  console.log(words.toString());
  //map
  console.log(arr4.map((num)=>num*num));
  
//slice 
const abcd=[1,5,6,8];
const abcd1=abcd.slice(1,4);
console.log(abcd1);