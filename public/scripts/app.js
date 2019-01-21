// console.log('App.js is running');

//JSX syntax
// let template = <p id="someid">This is JSX from app.js</p>;

// From Babel
var template = React.createElement(
  "p",
  { id: "someid" },
  "Something new"
);


let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);