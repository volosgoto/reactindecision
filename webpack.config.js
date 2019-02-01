// entry -> output
const PATH = require('path');

module.exports = {
  entry : './src/app.js',
  output : {
    path : PATH.join(__dirname, 'public'),
    filename : 'bundle.js'
  },
  module: { // loader
    rules: [{
      loader : 'babel-loader',
      test: /\.js$/,
      exclude : /node-modules/
    }],
  }
};
