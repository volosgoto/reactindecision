'use strict';

// Forms
// -------------------------------------------------
var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  console.log('form submited', '8 min');
};

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    app.title,
    ' '
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    ' ',
    app.subtitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' ',
    app.options.length > 0 ? 'Here your options' : 'No options',
    ' '
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' Item 1 '
    ),
    React.createElement(
      'li',
      null,
      ' Item 2 '
    ),
    React.createElement(
      'li',
      null,
      ' Item 3 '
    ),
    React.createElement(
      'li',
      null,
      ' Item 4 '
    )
  ),
  React.createElement(
    'form',
    { onSubmit: onFormSubmit },
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      { type: 'submit' },
      'Add option'
    )
  )
);

var appRoot = document.getElementById('app'); // root div
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot)
