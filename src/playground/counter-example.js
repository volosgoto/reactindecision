// Version 2
class Counter extends React.Component {
  constructor(props){
    super(props);
      this.addOne = this.addOne.bind(this);
      this.minusOne = this.minusOne.bind(this);
      this.reset = this.reset.bind(this);
  }

  addOne(){
    console.log('addOne', this);
  }

  minusOne(){
    console.log('minusOne', this);
  }

  reset(){
    console.log('reset', this);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  };
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// Events -----------------------------------------
// // Version 1

// let count = 0;
// let addOne = () => {
//   count++;
//   renderCounterApp();
// };

// let minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// let reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// // let someId = 'myidhere';

// // let templateTwo = (
// //   <div>
// //     <h1>Count: {count}</h1>
// //     {/* <button id={someId} className="button">+1</button> */}
// //     {/* <button onClick={ ()=>{console.log('addOne!');} } className="button">+1</button> */}
// //     <button onClick={addOne} className='button'>
// //       +1
// //     </button>
// //     <button onClick={minusOne}>-1</button>
// //     <button onClick={reset}>reset</button>
// //   </div>
// // )


// let appRoot = document.getElementById('app');
// let renderCounterApp = () => {
//   let templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className='button'>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();