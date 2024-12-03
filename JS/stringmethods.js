//Length
let str="HIIIIIII EveryOne";
console.log(str.length);
//charAt()
console.log(str.charAt(1));
console.log(str.charAt(15));
console.log(str.charAt());//default value index=0, So it's take first value
console.log(str[12]);
console.log(str[0]);
//charCodeAt()
console.log(str.charCodeAt(0));
console.log(str.charCodeAt());
console.log(str.charCodeAt("E"));
console.log(str.charCodeAt(18));
//concat
const str1="Welcome!!!!!!";
console.log(str.concat(str1));
console.log(str+" "+str1);
console.log("Learning"+ " "+"to"+" "+" code.");
//includes
console.log(str.includes("EveryOne", 1));
console.log(str.includes("EveryOne",7));
const sentence = "carbon emission is increasing day by day";
console.log(sentence.length);
console.log(sentence.includes("is",2));
//lastIndexOf
console.log(sentence.lastIndexOf("to"));//if the substring is not in string it returns -1 index value
console.log(sentence.lastIndexOf("is"));
//repeat()
console.log(str.repeat(2));
console.log(str.repeat(0));
console.log(str.repeat(2.5));//coverts the decimal value to integer 
//trim()
const word=" swetha  ";//it removes White spaces
console.log(word.trim());
//toUpperCase()
console.log(word.toUpperCase());
const abc="SHIvANI";
//toLowerCase()
console.log(abc.toLowerCase());
//substr()
console.log(sentence.substring(10,6));
console.log(sentence.substring(-4,3));
//toString
console.log(str.toString(str));
const num1=20;
console.log(num1.toString(20));
//substring();
console.log(sentence.substring(10));
console.log(sentence.substring(20,10));
//slice
console.log(sentence.slice(5,15));
console.log(sentence.slice(5));
//replace()
console.log(sentence.replace("day","year"));
console.log(sentence.replace("day","month"));
