//assignment operator:
let a = 10;
console.log("Initial value of a:", a);  

a += 5; 
console.log("After a += 5, a:", a);  
a -= 3;  
console.log("After a -= 3, a:", a);  
a *= 2;  
console.log("After a *= 2, a:", a);  
a /= 4;  
console.log("After a /= 4, a:", a);  
a %= 4;  
console.log("After a %= 4, a:", a);  
a **= 3;  
console.log("After a **= 3, a:", a); 
let b = 5;
b = c = 3;  
console.log("Value of b:", b);  
console.log("Value of c:", c);  
//logical operator
let x = 0; 
let y = 5;  
let z = ""; 
console.log(x && y); 
console.log(y && z); 
console.log(y && y); 
console.log(x || y); 
console.log(z || x); 
console.log(y || z); 
console.log(!x); 
console.log(!y);
console.log(!z); 

//Bitwise operators:s
let  f= 4; 
let g = 1; 
console.log(f&g);
console.log("f& g = " + (f& g)); 
console.log("f | g = " + (f|g)); 
console.log("~g = " + (~g));//flip the value
//ternary operator:
let marks = 95;
    let result = (marks < 40) ? "Unsatisfactory" :
        (marks < 60) ? "Average" :
            (marks < 80) ? "Good" : "Excellent";

    console.log(result)