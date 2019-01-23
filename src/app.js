// let userName = 'Andrey';
// let userAge = 30;
// let userLocation = 'Lincoln';
// {} any Javascript expression inside
// {} and any JSX expression inside
// {} and 'undefined', 'null', 'boolean' are ignored by JSX


// From Babel
// var template = React.createElement(
//   "p",
//   { id: "someid" },
//   "Something new"
// );


//JSX syntax
// let template = <p id="someid">Change check</p>;
// let template = (
//   <div>
//     <h1>Andrey</h1>
//     <p>This is some text</p>
//     <ol>
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ol>
// </div>
// );


// let app = {
//   title: 'Indecision App',
//   subtitle: 'Put your life in the hands of computer',
//   options: ['One', 'Two']
// };
// let template = (<div>
//   <h1> {app.title} </h1>
//   {app.subtitle && <p> {app.subtitle} </p>}
//   <p> {app.options.length > 0 ? 'Here your options' : 'No options'} </p>
//   <ol>
//     <li> Item 1 </li>
//     <li> Item 2 </li>
//     <li> Item 3 </li>
//     <li> Item 4 </li>
//   </ol>
// </div>
// );


// Use variables in JSX
//-----------------------------------
// let user = {
//   name: 'Andrey',
//   age: 36,
//   location: 'Lincoln'
// }

// // let userName = 'Andrey';
// // let userAge = 30;
// // let userLocation = 'Lincoln';
// // {} any Javscript expression inside
// // {} and any JSX expression inside

// let templateTwo = (
//   <div>
//     {/* <h1>{ alert('Hello')}</h1> */}  
//     {/* <h1>{ userName}</h1> */}  
//     <h1>{user.name.toUpperCase() + '!'}</h1>
//     <p>Age: {user.age}</p>
//     <p>Location: {user.location}</p>
//   </div>
// );
// --------------------------------------


// Conditions
// -------------------------------------
// let user = {
//   name: 'Andrey',
//   age: 36,
//   location: 'Lincoln'
// }

// function getLocation(location){
//   if(location){
//     return <p>Location: { location }</p>;
//   } else {
//     return undefined;
//   }
// };

// let templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     { (user.age && user.age > 19) && <p>Age: {user.age}</p>}
//     { getLocation(user.location) }
//   </div>
// );
//-----------------------------------------


// Events -----------------------------------------

let count = 0;
let addOne = ()=>{console.log('addOne');};
let minusOne = ()=> {console.log('minusOne', this);};
let reset = ()=>{console.log('reset');};
let someId = 'myidhere';

let templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    {/* <button id={someId} className="button">+1</button> */}
    {/* <button onClick={ ()=>{console.log('addOne!');} } className="button">+1</button> */}
    <button onClick={addOne} className="button">+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

console.log(templateTwo);
// -------------------------------------------------


// Output
let appRoot = document.getElementById('app'); // root div
// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
