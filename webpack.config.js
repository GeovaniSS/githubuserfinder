const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production', 
  entry: {
    main: './src/main.js'
  },
  output: { 
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: '[name].bundle.js'
  },
  plugins: [new MiniCssExtractPlugin()],
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
  devtool: 'source-map'
}