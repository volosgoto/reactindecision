// Cвойства (this.props) следует использовать только для чтения, а для динамических свойств нужно использовать так называемое "состояние" (state).


// Stateless functional component
// They are just functions, and the don't have state
// They don't have access to "this"
// Faster then class based Components
// Much easier to test!

// Syntax of stateless functional component same is render() inside
// let User =(props)=>{
//   return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }


// DEFAULT PROPS OPTIONS


class IdecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options : [],
      // options: props.options
    };
  }
  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      };
    });
  }
  handlePick() {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let options = this.state.options[randomNum];
  }

  handleAddOption(option){
    if (!option){
      return 'Enter valid value to add';
    } else if (this.state.options.indexOf(option) > -1 ) { // if is in array
      return 'This option already exists'; 
    }  
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  
  render() {
    // let title = "Indecision";
    let subtitle = "Put your life in the hands of computer!";

    return (
      <div>
        {/* <Header title={title} subtitle={subtitle} /> */}
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options > 0}
          handlePick = {this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}

// IdecisionApp.defaultOptions = {
//   options: []
// }

let Header = (props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//   }
// }

let Action = (props)=>{
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={props.hasOptions}
      >
      What should i do?
      </button>
    </div>
  );

}

// class Action extends React.Component {
//   render() {
//     }
// }

let Options = (props)=>{
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
      <p>Option length: {props.options.length}</p>
      {
        props.options.map(option => (
        <Option key={option} optionText={option} />
      ))
      }
    </div>
  );
}

// class Options extends React.Component {
//   render() {
//   }
// }

let Option = (props)=>{
  return <div>Option: {props.optionText}</div>;
}

// class Option extends React.Component {
//   render() {
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error : undefined
    }
  }
  
  handleAddOption(e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    option.trim();
    let error = this.props.handleAddOption(option);

    this.setState(()=>{
      // return {error : error}; ES5
      return { error }; // ES6
    });
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}


let root = document.getElementById("app");
// ReactDOM.render(<IdecisionApp options={['Option 1', 'Option 2']}/>, root);
ReactDOM.render(<IdecisionApp />, root);
// ReactDOM.render(<User name="Andrew" age="36"/>, root);
