import React from 'react';
import ReactDOM from 'react-dom';

// let template = (<p>test 123</p>); // Error
let template = React.createElement('p', {}, 'test123');

ReactDOM.render(template, document.getElementById('app'));