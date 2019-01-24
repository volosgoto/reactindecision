let app = {
  title: 'Visibility Toggle',
  options: ['Show details', 'Hide details'],
  text: 'Hey! There some details you can see now'
};
let root = document.getElementById('app');
let visibility = true;

let onClickToggle = ()=>{
  console.log('click');
  visibility = !visibility;
  render();
}



let render = ()=>{
  let template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick = {onClickToggle}> {visibility ? app.options[0] : app.options[1] } </button>
      {/* <p> { !visibility ? app.text : '' } </p> */}
      { !visibility && 
        (
        <div>
          <p>{app.text}</p>
        </div> 
        )
      }
    </div>
  );
  ReactDOM.render(template, root);
};

render();

