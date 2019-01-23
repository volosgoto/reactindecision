// Events -----------------------------------------
let count = 0
let addOne = () => {
  count++;
  renderCounterApp();
};

let minusOne = () => {
  count--;
  renderCounterApp();
};

let reset = () => {
  count = 0;
  renderCounterApp();
};

// let someId = 'myidhere';

// let templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     {/* <button id={someId} className="button">+1</button> */}
//     {/* <button onClick={ ()=>{console.log('addOne!');} } className="button">+1</button> */}
//     <button onClick={addOne} className='button'>
//       +1
//     </button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// )


let appRoot = document.getElementById('app');
let renderCounterApp = () => {
  let templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className='button'>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();