'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Version 2
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.reset = _this.reset.bind(_this);

    _this.state = {
      count: 0,
      name: "Sam" // we are not owerriding full state object
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'addOne',
    value: function addOne() {
      console.log('addOne', this);
      this.setState(function (prevState) {
        // same as prevState === this.state
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'minusOne',
    value: function minusOne() {
      console.log('minusOne', this);
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      console.log('reset', this);
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Counter: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.minusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.reset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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
