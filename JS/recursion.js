function fibonacci(n){
    if(n===0|| n===1)
    {
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(3));
//factorial
function factorial(n){
    if(n===0||n===1){
        return 1;
    }
    return n*factorial(n-1);
    
}
console.log(factorial(5));