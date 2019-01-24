'use strict';

var app = {
  title: 'Visibility Toggle',
  options: ['Show details', 'Hide details'],
  text: 'Hey! There some details you can see now'
};
var root = document.getElementById('app');
var visibility = true;

var onClickToggle = function onClickToggle() {
  console.log('click');
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onClickToggle },
      ' ',
      visibility ? app.options[0] : app.options[1],
      ' '
    ),
    !visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        app.text
      )
    )
  );
  ReactDOM.render(template, root);
};

render();
