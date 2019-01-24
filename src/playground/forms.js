

// Forms
// -------------------------------------------------
let onFormSubmit = (event) => {
  event.preventDefault();
  console.log('form submited');

};

let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of computer',
  options: ['One', 'Two']
};
let template = (<div>
  <h1> {app.title} </h1>
  {app.subtitle && <p> {app.subtitle} </p>}
  <p> {app.options.length > 0 ? 'Here your options' : 'No options'} </p>
  <ol>
    <li> Item 1 </li>
    <li> Item 2 </li>
    <li> Item 3 </li>
    <li> Item 4 </li>
  </ol>
  <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button type="submit">Add option</button>
  </form>
</div>
);


let appRoot = document.getElementById('app') // root div
ReactDOM.render(template, appRoot);
