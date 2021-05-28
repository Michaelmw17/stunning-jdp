const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ test: /\.js$|jsx/, use: 'raw-loader' }],
  },
  
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  mode: 'production',
};
 