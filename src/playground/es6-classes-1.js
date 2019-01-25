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

let me = new Person('Andew Vol', 36);
console.log(me.name);
console.log(me.getDescription());

let other = new Person();
console.log(other.getDescription());
