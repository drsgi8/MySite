var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'style.css'
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist'
  },
  module: {
      rules: [
        {
          test: /\.scss/,
          use: extractPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        },
        {
          test: /\.html/,
          loader: 'html-loader'
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/',
                publicPath: 'assets/'
              }
            }
          ]
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader']
        }
      ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({}),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
      extractPlugin
  ]
};
