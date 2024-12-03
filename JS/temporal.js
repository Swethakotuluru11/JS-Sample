//temporal var
console.log(name1);//undefined
var name1="swetha";
//temporal let & const
{
    console.log(a);//reference error because is stored in different memory space . so its not created window.
    let a = 10;
    console.log(a);//10
    const b=100;
    console.log(b);
}