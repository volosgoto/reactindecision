// Variables in JSX
let user = {
  name: 'Andrey',
  age: 36,
  location: 'Lincoln'
}

// From Babel
// var template = React.createElement(
//   "p",
//   { id: "someid" },
//   "Something new"
// );


// let userName = 'Andrey';
// let userAge = 30;
// let userLocation = 'Lincoln';
// {} any Javascript expression inside
// {} and any JSX expression inside
// {} and 'undefined', 'null', 'boolean' are ignored by JSX





let templateTwo = (
  <div>
    {/* <h1>{ alert('Hello')}</h1> */}
    {/* <h1>{ userName}</h1> */}
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
