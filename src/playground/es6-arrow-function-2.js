// Arguments functions no longer bound with arrow functions

// Function declaration ES5
// const add = function(a, b) {
//   console.log(arguments); // [5,5] length 2
//   return a + b;
// };

// ES6 Arrow function
// const add = (a, b) => {
//   console.log(arguments); // ReferenceError: arguments is not defined
//   return a + b;
// };

// console.log(add(5, 5));


// This keyword, no longer bound. Arrow functions don't have own context
const user = {
  name : 'Andrew',
  cities: ['Kiev', 'Lincoln', 'New York'],

  // for ES5 function uses own context
  // printPlacesLived: function (){} - the contexst is object user
  // printPlacesLived: ()=>{} - the contexst is GLobal Object or in this case undefined

  printPlacesLived: function () {
    console.log(this.name);
    console.log(this.cities);

    // let context = this; // for ES5 function uses own context
    // this.cities.forEach(function (city) {
    //   console.log(context.name + ' : ' + city);
    // });

    // Arrow function uses "parent" context. Parent context in this case method printPlacesLived()
    this.cities.forEach((city) => { 
      console.log(this.name + ' : ' + city);
    });
  },
  // testThis: function(){ console.log(this);} // {name: "Andrew", cities: Array(3), printPlacesLived: ƒ, testThis: ƒ}
  // testThis: ()=>{ console.log(this);} // undefined

};
// user.printPlacesLived();
// user.testThis(); 


//--------------------------------------------
// THe same using ES6. New syntax
// const user2 = {
//   name : 'Mike',
//   cities: ['Kiev', 'Lincoln', 'New York'],

//   printPlacesLived() {
//     console.log(this.name);
//     console.log(this.cities);

//     this.cities.forEach((city) => { 
//       console.log(this.name + ' : ' + city);
//     });
//   },
// };
// user2.printPlacesLived();



const user2 = {
  name : 'Mike',
  cities: ['Kiev', 'Lincoln', 'New York'],

  // printPlacesLived() {
  //   const cityMessages = this.cities.map((city)=>{
  //     return this.name + ' has lived in ' + city + '!';
  //   });
  //   return cityMessages;
  // },

  // Shorter
  printPlacesLived() {
    return this.cities.map((city)=> this.name + ' has lived in ' + city + '!');
  }
};
console.log(user2.printPlacesLived());



// array.forEach(element => {}); Alow you to do something with element
// array.map(element => {}); Alow you to transform each element


// Challenge Arrow functions array.map()
const multiplier = {
  numbers : [1, 2, 3],
  multiplyBy: 3,

  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());