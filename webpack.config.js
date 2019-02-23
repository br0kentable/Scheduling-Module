﻿const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  // rules: [
  //   {
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: "babel-loader"
  //     }
  //   }
  // ]
};