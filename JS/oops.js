class Person{
    constructor(name,age){
        this.name= name;
        this.age=age;

    }
    greet(){
        console.log('This is student details');
    }
}
class Student extends Person{
    constructor(name,age){
        console.log("creating student class");
        super(name,22);
    }

}
let student1 = new Student('jai');
console.log(student1.name,student1.age);
student1.greet();
//polymorphism
class Animal{
    sound(){
        console.log("the anmial makes a sound");
    }
}
class Dog extends Animal{
    sound(){
        console.log("The dog barks");
    }
}
class Cat extends Animal{
    sound(){
        console.log("the cat meow");
    }
}
const dog= new Dog();
const cat = new Cat();
dog.sound();
cat.sound();
//Encapsulation
class BankAccount{
    constructor(balance){
        this.balance=balance;
    }
    deposit(amount){
    
        this.balance +=amount;
    }
    getBalance(){
        return this.balance;
    }
}
const account = new BankAccount(100);
console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
//Abstraction
class Shape{
    constructor(){}
    area()
    {
        throw new Error('Method must be implemented');
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    area(){
        return Math.PI*this.radius*this.radius;
    }

}
let circle = new Circle(10);
console.log(circle.area());

