//console.log("Hello javascript");
//console.log("Ram");

var abc=11;
if(abc<=10){
    console.log("This is false");
}
else{
    console.log("This is True");
}
console.log(typeof(abc));
console.log(abc);


console.log(3 + 4 * 5); 

console.log(4 * 3 ** 2); 


let a;
let b;

console.log((a = b = 5))
console.log(1 + 2 ** 3 * 4 / 5 >> 6);

function A() { console.log('called A'); return false; }
function B() { console.log('called B'); return false; }
function C() { console.log('called C'); return true; }

console.log(C() || B() && A());
function echo(name, num) {
    console.log(`Evaluating the ${name} side`);
    return num;
  }
  console.log(echo("left", 4) ** echo("middle", 3) ** echo("right", 2));
var place ='kjp';
if (place == 'Rjp'){
    console.log(place  );

}
else if(place=='kjp'){
    console.log("place is " +place);

}
else{
    console.log("No Place");
}

var age = 10;
if (age >= 65) {
   console.log('You get your income from your pension');
} else if (age < 65 && age >= 18) {
   console.log('Each month you get a salary');
} else if (age < 18) {
   console.log('You get an allowance');
} else {

   console.log('The value of the age variable is not numerical');
}