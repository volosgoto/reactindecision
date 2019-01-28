class IdecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      options : ["Thing 1", "Thing 2", "Thing 4"],
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
    alert(options);
  }
  
  render() {
    let title = "Indecision";
    let subtitle = "Put your life in the hands of computer!";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options > 0}
          handlePick = {this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {

    
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={this.props.hasOptions}
        >
        What should i do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        <p>Option length: {this.props.options.length}</p>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option: {this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    console.log("handleAddOption", this);
    e.preventDefault();
    const option = e.target.elements.option.value;
    option.trim();
    if (option) {
      alert("form");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}


let root = document.getElementById("app");
ReactDOM.render(<IdecisionApp />, root);
