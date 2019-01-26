// React.Component require to implement method render()
class IdecisionApp extends React.Component {
  render(){
    let title = 'Indecision';
    let subtitle = 'Put your life in the hands of computer!';
    let options = ['Thing 1', 'Thing 2', 'Thing 3'];
    
    return(
      <div>
        {/* <Header title="Title test value" info="Test Info"/> */}
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  };
}

class Header extends React.Component {
  render() {
    // console.log(this.props);
    // return (<p>This is from header</p>);
    return (
      <div>
        {/* <h1>Indecision</h1> */}
        <h1>{this.props.title}</h1>
        {/* <h2>Put your life in the hands of computer</h2> */}
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  } 
};
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What shoud I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Option length: {this.props.options.length}</p>
        {/* { this.props.options.map((option) => <p key={option}>{option}</p>) } */}
        { this.props.options.map((option) => <Option key={option} optionText={option}/>) }
        {/* <Option /> */}
      </div>
    );
  }
};


class Option extends React.Component{
  render(){
    console.log(this.props);
    
    return(
      <div> 
      Option: {this.props.optionText}
      </div>
    );
  };
};

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption here!
        <form>
          <input type="text" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
};



// let jsx = (
//   <div>
//     {/* <h1>Title</h1> */}
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />

//   </div>
// );

let root = document.getElementById('app');
// ReactDOM.render(jsx, root);
ReactDOM.render(<IdecisionApp />, root);