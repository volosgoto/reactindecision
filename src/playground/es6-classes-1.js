// ES6 classes

/*
Car
make
model
vin
getDescription()
 */
class Person {
  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    // return 'Hi ' + this.name;
    return `Hi i am ${this.name}`;
    // return `Hi i am ${alert(this.name)}`; // any JS expression inside
  }
  getDescription(){
    return `${this.name} is ${this.age} years old`;
  }
}
// let me = new Person('Andew Vol', 36);
// console.log(me.name);
// console.log(me.getDescription());

// let other = new Person();
// console.log(other.getDescription());

class Student extends Person{
  constructor(name, age, major){
    super(name, age) // calling a parent constructor
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    // return description + this.major;
      if(this.hasMajor()){
        return description += ` .The major is ${this.major}`;
      }
  }
}

// let me = new Student('Andew Vol', 36, 'Computer');
// console.log(me.getDescription());
// // console.log(me);

// let other = new Student();
// // console.log(other.hasMajor());


class Traveler extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if (this.homeLocation){
      greeting += ` ${this.homeLocation}`;
    }
    return greeting;
  }

}

let traveler = new Traveler('Sam', 30, 'Kiev');
let t = new Traveler('Mike', 20);

console.log(traveler.getGreeting());
console.log(t.getGreeting());