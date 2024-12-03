
for( i=1; i<=5;i++){
    console.log('Hello');
}
//while
var i= 1;
while(i<=3){
    console.log(i);
    i++;
}
//do while
var i=0;
do{
    console.log(i);
    i++;
}while(i<=3);



// nested loops
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 4; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}