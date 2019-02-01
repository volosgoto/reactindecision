import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  constructor(props) {
  super(props);
  this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  this.handlePick = this.handlePick.bind(this);
  this.handleAddOption = this.handleAddOption.bind(this);
  this.handleDeleteOption = this.handleDeleteOption.bind(this);
  this.state = {
    options: props.options
  };
}

// Life-cycle -----
componentDidMount(){
  // console.log('componentDidMount');
  
  try {
    let json = localStorage.getItem('options');
    let options = JSON.parse(json);
    if (options) {
      this.setState(prevState => ({
        options: options
      }));
    }
  } catch (error) {
    // Do nothing
  }
  
  
}
componentDidUpdate(prevProps, prevState){
  if (prevState.options.length !== this.state.options.length) {
    let json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);
    console.log('saving data');
  }
}
componentWillUnmount(prevProps, prevState){
  console.log('componentWillUnmount');
}
// Life cycle -----

handleDeleteOptions() {
  this.setState(() => ({ options: [] }));
}
handleDeleteOption(optionToRemove) {
  this.setState((prevState) => ({
    options: prevState.options.filter((option) => optionToRemove !== option)
  }));
}
handlePick() {
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
  alert(option);
}
handleAddOption(option) {
  if (!option) {
    return 'Enter valid value to add item';
  } else if (this.state.options.indexOf(option) > -1) {
    return 'This option already exists';
  }

  this.setState((prevState) => ({
    options: prevState.options.concat(option)
  }));
}
render() {
  const subtitle = 'Put your life in the hands of a computer';

  return (
    <div>
      <Header subtitle={subtitle} />
      <Action
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
      />
      <Options
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption
        handleAddOption={this.handleAddOption}
      />
    </div>
  );
}
}

IndecisionApp.defaultProps = {
options: []
};