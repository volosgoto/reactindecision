import React from 'react';
import ReactDOM from 'react-dom';



let template = (<p>THIS IS JSX FROM WEBPACK!!!</p>);
// let template = React.createElement('p', {}, 'test123');

ReactDOM.render(template, document.getElementById('app'));