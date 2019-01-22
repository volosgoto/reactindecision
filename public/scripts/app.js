'use strict';

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
var user = {
  name: 'Andrey',
  age: 36,
  location: 'Lincoln'
  // let userName = 'Andrey';
  // let userAge = 30;
  // let userLocation = 'Lincoln';
  // {} any Javscript expression inside

};var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
// --------------------------------------


var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    ),
    React.createElement(
      'li',
      null,
      'Item 3'
    )
  )
);

var appRoot = document.getElementById('app'); // root div
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);
