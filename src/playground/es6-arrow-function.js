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
let userName = 'Sam Smith';
let getFirstName = (name)=>{    
  return name.split(' ')[0];
};
console.log(getFirstName(userName));


let getFirstNameTwo = (name) => name.split(' ')[0];
let userNameTwo = 'Mike Stone';
console.log(getFirstNameTwo(userNameTwo));
