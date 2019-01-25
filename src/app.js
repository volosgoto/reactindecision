// React.Component require to implement method render()
class IdecisionApp extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  };
}

class Header extends React.Component {
  render() {
    // return (<p>This is from header</p>);
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of computer</h2>
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
        Options here!
        <Option />
      </div>
    );
  }
};


class Option extends React.Component{
  render(){
    return(
      <div> Option component
        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ol>
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