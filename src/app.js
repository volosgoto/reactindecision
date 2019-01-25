// React.Component require to implement method render()
class Header extends React.Component {
  render(){
    return (<p>This is from header</p>);
  }
}

let jsx = (
  <div>
    <h1>Title</h1>
    <Header/>
    <Header/>
    <Header/>
  </div>
);

let root = document.getElementById('app');
ReactDOM.render(jsx, root);