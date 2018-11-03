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
        },
        {
          test: /\.(ttf|eot|svg|png|gif|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'url-loader?name=[name].[ext]',
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    plugins: [
      // new webpack.optimize.CommonsChunkPlugin({
      //   names: ['vendor', 'manifest']
      // }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  };
};
