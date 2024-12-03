/*function x(){
    for(var i=1; i<=5;i++){
        setTimeout(function(){
        console.log(i);//i refering to for loop i
    },1000);//doesnot wait for anything so,it's take directly take  6.and print 6 in 6times
}
}
x();
function x(){
    for(let i=1; i<=5;i++){
        setTimeout(function(){//let is used in block scope only, it's everytime take new value and its bound the value and stored differen value

        console.log(i);//i refering to for loop i
    },i*1000);
}
}
x();
*/
//
function x(){
    for(var i=1; i<=5;i++){
        function y(i){//using this close function everytime the close function is called the copy of new i
        setTimeout(function(){
        console.log(i);//i refering to for loop i
    },1000);//doesnot wait for anything so,it's take directly take  6.and print 6 in 6times
}
y(i);
}
}
x();
