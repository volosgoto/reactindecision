
let isAdult = (age)=>{
  return (age >=18) ? true : false;
};

let canDrink = (isAdult)=>{
  return isAdult(15) ? 'yes' : 'no';
};

export { isAdult, canDrink };