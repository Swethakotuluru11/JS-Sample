//ForEach
const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => {
    console.log(item);
});
//Filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(result);


//map
let bestBoxers = new Map();
bestBoxers.set(1, "the Champion");
bestBoxers.set(2,"The RunnerUp");
bestBoxers.set(3,"Third Place");
console.log(bestBoxers);
console.log(bestBoxers.get(1));

//set()
 let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
console.log(s1.delete(40));
console.log(s1.add(60));
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);
console.log(s2.has('gfg'));
let s3 = new Set("fooooooood");

s3.clear();


let s4 = new Set();
console.log(s4);