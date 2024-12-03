//Prototypical Inheritance
function Animal(name){  
    this.name = name;  
  }  
  Animal.prototype.sound = function () {  
    console.log("Generic Sound");  
  };  
  function Dog(name, breed) {  
     Animal.call(this, name);  
     this.breed = breed;  
  }  
  Dog.prototype = Object.create(Animal.prototype);  
  Dog.prototype.constructor = Dog;  
  Dog.prototype.sound = function() {  
    console.log("Woof! Woof!");  
  };  
  const myDog= new Dog("Buddy", "Pitbull");  
  myDog.sound(); 
  console.log(myDog.breed);
  console.log(myDog.name);
  //classicall Inheritance
  class automobile {  
    constructor(name, cc) {  
      this.name = name;  
      this.cc = cc;  
    }  
    engine() {  
      console.log(`${this.name}   
    has ${this.cc} engine`);  
    }  
  }  
  class car extends automobile {  
    engine() {  
      console.log(this.name,  
        "has ", this.cc, "cc engine");  
    }  
  }  
  let cars = new car('Supra',"1998");  
  cars.engine();  
  //functional Inheritance
  function Person(name) {
    const obj = {};
    obj.name = name;

    obj.Work = function() {
        console.log("Person doing some work");
    };

    return obj;
}

function Student(name, age) {
    const obj = Person(name);
    obj.age = age;

    obj.Work = function() {
        console.log("I am a student");
    };

    return obj;
}

const student1 = Student("Ram",20);
student1.Work();  // Outputs: Woof! Woof!
//Prototype
function Person1(name){
  this.name=name;
}
Person1.prototype.greet =function(){
  console.log("hello",+this.name);
}
var person2=new Person1("swetha");
person2.greet();