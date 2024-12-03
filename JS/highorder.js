function multiply(num){
    return num*2;
}
function add(num){
    return num+num;
}
function applyOperator(num,operation){
    return operation(num);
}
const result = applyOperator(10,multiply);
const result1=applyOperator(2,add);
console.log(result);
console.log(result1);