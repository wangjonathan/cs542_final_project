const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom', 'redux', 'react-redux'
];

module.exports = env => {
  const isProduction = env === 'production';

  return {
    entry: {
      bundle: './src/index.js',
      vendor: VENDOR_LIBS
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].js'
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};