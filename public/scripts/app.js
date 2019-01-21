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
var template = React.createElement(
  'h1',
  null,
  'Indecision App!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
