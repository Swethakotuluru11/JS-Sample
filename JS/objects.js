
    
const person={
    empid:123,
    empname:'swetha',
    emplage:22
}

person.company='capgemini';//add new property
console.log(person);

console.log(person.emplage);

var house={};
house["rooms"]=4;
house['color']='blue';
console.log(house);
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn();