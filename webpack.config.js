var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
        rules: [
          {
            test: /\.scss/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          },
          {
            test: /\.html/,
            loader: 'html-loader'
          },
          {
            test: /\.(jpg|png)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/',
                  publicPath: './'
                }
              }
            ]
          }
        ]
    },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      p5: 'p5',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin({
          filename: 'style.css'
        })
  ]
};
