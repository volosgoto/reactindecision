import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


let Layout = (props)=>{
      return (
    <div>
      <p>Header</p>
      {/* {props.content} */}
      {props.children} // props children components
      <p>Footer</p>
    </div>
    );
};

let template = (
  <div>
    <h1>Page title</h1>
    <p>Text</p>
  </div>
);

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
ReactDOM.render(<Layout><p>This is inline</p></Layout>, document.getElementById('app')); // props children components

