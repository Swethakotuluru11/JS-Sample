try{
    let a = 5/0;
}
catch(err){
    console.log('Error:',err.message);

}


    
try{
    let x= undefined;
    console.log(x.y);

}catch (err)
{
    if(err instanceof TypeError){
        console.log("TypeError:",err.message);
    }
    else {
        console.log("UnKnown Error:", err.message);
    }
}


//Throwing custom errors
try{
    let age =16;
    if(age< 18)
    {
         throw new Error("you must be 18 or older");
    }
}catch(err){
    console.log("Error:",err.message);
}

try{
    let b = 5/0;
}
catch(err){
    console.log('Error:',err.message);

}finally{
    console.log("Finally block executed");
}


//using function
function divide(f,g){
    if(f==0){
        throw "cannot divide by zero!";
    }
    return f/g;
}
try{
    console.log(divide(10,0));

}
catch(err){
    console.log("Error:",err);
    console.log("Running Sucessfully");
}
