// console.log('App.js is running');

// From Babel
// var template = React.createElement(
//   "p",
//   { id: "someid" },
//   "Something new"
// );



//JSX syntax
// let template = <p id="someid">Change check</p>;
let template = <h1>Indecision App!</h1>;
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);