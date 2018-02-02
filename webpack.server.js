const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const extractCSS = new ExtractTextPlugin('../css/[name].css');
const config = {
  entry: {
   server: './app.js',
  },
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'server.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use:{
          loader: 'babel-loader',
          options: {
            plugins: ['dynamic-import-node-sync']
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['css-loader'],
      },
	  ]
  },
};

module.exports = config;