// Version 2
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);

    this.state = {
      count: 0,
      name: "Sam" // we are not overriding full state object
    };
  }

  addOne() {
    console.log('addOne', this);
    this.setState((prevState) => { // same as prevState === this.state
      return {
        count: prevState.count + 1
      };
    });
  }

  minusOne() {
    console.log('minusOne', this);
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  reset() {
    console.log('reset', this);
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return ( <
      div >
      <
      h1 > Counter: { this.state.count } < /h1> <
      button onClick = { this.addOne } > +1 < /button> <
      button onClick = { this.minusOne } > -1 < /button> <
      button onClick = { this.reset } > Reset < /button> <
      /div>
    )
  };
}

ReactDOM.render( < Counter / > , document.getElementById('app'));


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