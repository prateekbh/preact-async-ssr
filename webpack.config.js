const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('../css/[name].css');

const config = {
  entry: {
   client: './client-app.js',
   app: './client-routes/App/app.js'
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/public/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
	  ]
  },
};

module.exports = config;