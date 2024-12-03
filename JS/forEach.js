let arr = [1, 2, 3, 4, 5];

arr.forEach(function(item)  {
    let sum=0;
    sum+=item*item;
    console.log(sum);
});
const items = [1, 29, 47];
const squareOfItems = [];

items.forEach(function (item) {
    squareOfItems.push(item * item);
});

console.log(squareOfItems);
//using arrow
let a = [4, 8, 7, 13, 12]
let sum1 = 0;
a.forEach(ele => {
    sum1 += ele;
});
console.log(sum1);
var a1=[10,30,40];
var copy=[];
let sum2=0;
a1.forEach(function(ele){
    console.log(ele);
});
a1.forEach(function(x){
    sum2+=x;
});
console.log(sum2);
a31.forEach(inc=>{
    copy.push(inc*inc);
});
console.log(copy);

