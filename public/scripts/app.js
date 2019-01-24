'use strict';

// Forms
// -------------------------------------------------
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value; //string of input where option is name in option field
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = ''; // clear input field
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  if (app.options.length > 0) {
    app.options = [];
  }
  render();
};

var appRoot = document.getElementById('app'); // div id="root"

function render() {
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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (elem) {
        return React.createElement(
          'li',
          { key: elem },
          elem
        );
      })
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

  ReactDOM.render(template, appRoot);
}

render();
