'use strict';

// Version 1

// let app = {
//   title: 'Visibility Toggle',
//   options: ['Show details', 'Hide details'],
//   text: 'Hey! There some details you can see now'
// };
// let root = document.getElementById('app');
// let visibility = true;

// let onClickToggle = ()=>{
//   console.log('click');
//   visibility = !visibility;
//   render();
// }


// let render = ()=>{
//   let template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick = {onClickToggle}> {visibility ? app.options[0] : app.options[1] } </button>
//       {/* <p> { !visibility ? app.text : '' } </p> */}
//       { !visibility && 
//         (
//         <div>
//           <p>{app.text}</p>
//         </div> 
//         )
//       }
//     </div>
//   );
//   ReactDOM.render(template, root);
// };

// render();


// Version 2
var app = {
  title: 'Visible',
  options: ['Show details', 'Hide details'],
  text: 'Hey! There some details you can see now'
};

var toggle = true;
function noClickToggle(params) {
  toggle = !toggle;
  render();
}
var appRoot = document.getElementById('app');

function render() {
  var content = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: noClickToggle },
      toggle ? app.options[1] : app.options[0]
    ),
    toggle && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        app.text
      )
    )
  );
  ReactDOM.render(content, appRoot);
}
render();
