const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production', 
  entry: {
    main: './src/main.js'
  },
  output: { 
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new MiniCssExtractPlugin(), 
    new Dotenv(),
    new NodePolyfillPlugin()
  ],
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  devtool: 'source-map',
  resolve: {
    fallback: {
      fs: false
    }
  }
}