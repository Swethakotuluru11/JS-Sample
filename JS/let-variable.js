//global declaration
//let is keyword is used to declare the variables in blocked scope.
let y =20;   
console.log("Outside the function x = " + y);   
  
function show(){   
    console.log("Inside the function x = " + y);   
}   
show();
//function scope
function show1(){   
   let num = 15;   
    console.log("Inside the function num = " + num);   
}   
show1();   
//console.log("Outside the function num = " + num);   //ReferenceError: num is not defined
//Block scope
{
    let abc=40;
    console.log("Inside the function abc =" + abc);
}
//console.log("Outside the function is "+abc);//referenceError
function exampleFunction() {
    if (true) {
    let x = 10; // Variable x has block scope
    console.log(x); // Output: 10
    }
    // console.log(x); // Error: x is not defined
    }
    exampleFunction();
    //Block scope is often confused with function scope, but there's a key distinction. In function scope, variables are typically defined within a function, while block scope is created within code blocks like if, for, or while statements. Local scope is function-level, meaning it encompasses the entire function, while block scope is limited to the specific block where the variable is declared.
    function myFunction() {
        if (true) {
        var localVariable = "I'm in block scope";
        //let blockVariable = "I'm also in block scope";
        }
        console.log(localVariable); // Accessible
        //console.log(blockVariable); // Error: blockVariable is not defined
        }
        myFunction();
        //Using Block Scope with let and const
        exampleBlockScope();
        function exampleBlockScope() {
            if (true) {
            let blockVariable = "I'm block-scoped with 'let'";
            const constantBlockVar = "I'm block-scoped with 'const'";
            console.log("Hiiiiiiiiiiii!!!!!!!!!!!!!");
            }
            //console.log(blockVariable); // Error: blockVariable is not defined
            //console.log(constantBlockVar); // Error: constantBlockVar is not defined
            }
            var x1 = 1;
            let y1 = 1;
            
            if (true) {
              var x1 = 2;
              let y1 = 2;
            }
            
            console.log(x1);//var variable is used to take reassigned value, its ignore global value.
            // Expected output: 2
            
            console.log(y1);//its taking global value
            // Expected output: 1
            
              