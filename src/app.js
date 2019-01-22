// console.log('App.js is running');

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

//-----------------------------------
let user = {
  name: 'Andrey',
  age: 36,
  location: 'Lincoln'
}
// let userName = 'Andrey';
// let userAge = 30;
// let userLocation = 'Lincoln';
// {} any Javscript expression inside

let templateTwo = (
  <div>
    {/* <h1>{ alert('Hello')}</h1> */}  
    {/* <h1>{ userName}</h1> */}  
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
// --------------------------------------


let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer'
};

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </div>
);


let appRoot = document.getElementById('app'); // root div
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);