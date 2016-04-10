var path = require("path");
var webpack = require('webpack');
var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
console.log(ROOT_PATH)


process.env.BABEL_ENV = TARGET;

var common = {
  entry: [
    'webpack-hot-middleware/client',
    './index.js'],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  output: {
    path: 'dist',
    filename: "bundle.js",
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: __dirname
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = common;
