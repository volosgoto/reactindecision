'use strict';

// ES5 function declaration

// let square = function (x) {
//   return x * x;
// }; 
// console.log(square(8));

// Arrow function alwaya anonymous
// let squareArr =(x)=>{
//   return x * x;
// };


// let squareArr = () => x * x; // returns x * x;
// console.log(squareArr(5));


// Challenge arrow functions
var userName = 'Sam Smith';
var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};
console.log(getFirstName(userName));

var getFirstNameTwo = function getFirstNameTwo(name) {
  return name.split(' ')[0];
};
var userNameTwo = 'Mike Stone';
console.log(getFirstNameTwo(userNameTwo));
