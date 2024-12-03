//lexical scope is the accessbility of variables and functiond depending on their location in source code.
//closure in javascript is the combination of function  bundled together with their surrounding state(lexical state).
outer();
function outer(){
    console.log(a);
    var a=100;
    function inner(){
        console.log(a);
    }
    inner();
}
 function z(){
    var b=100;
    function x(){
        let c=100;
        console.log(b,c);
        function y(){
            console.log(c);
        }
        y();

    }
    x();
 }
 z();