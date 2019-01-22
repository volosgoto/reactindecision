var nameVar = 'Andrey';
var nameVar = 'Mike'; //reassigment, no errors. Override previous
console.log('nameVar', nameVar);


let nameLet = 'Jen';
// let nameLet = 'Sam'; // error/ you can't reasign
// let can't redifine
nameLet = 'Julia';
console.log('nameLet', nameLet);


const nameConst = 'Frank';
// const nameConst = 'Bob'; //can't redifine
//can't reasign
console.log('nameConst', nameConst);


// function getPatName() {
//   var petName = 'Spot';
//   // let petName = 'Spot'; // function scope
//   // const petName = 'Spot'; // function scope
//   return petName;
// }

// getPatName();
// console.log(petName); // Error. Declared in function. This is function scope variable


// Blocking scope
var fullName = 'Andrey Volos';
// const firstName = fullName.split(' ')[0];   // GLobal level
// let firstName = fullName.split(' ')[0];   // Global level

if (fullName) {
  // const firstName = fullName.split(' ')[0];   // block level
  // let firstName = fullName.split(' ')[0];   // block level
  var firstName = fullName.split(' ')[0]; // Global scope
  console.log(firstName);
}
console.log(firstName); // Andrey from if(){}



