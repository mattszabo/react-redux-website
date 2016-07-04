var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxApp'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.sass$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!sass?indentedSyntax=true'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'client'),
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'client'),
        loader: 'style!css'
      },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader?limit=200000',
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.woff$/,
        // Inline small woff files and output them below font/.
        // Set mimetype just in case.
        loader: 'url',
        query: {
          name: 'font/[hash].[ext]',
          limit: 5000,
          mimetype: 'application/font-woff'
        },
        include: path.join(__dirname, 'client')
      },
      {
        test: /\.ttf$|\.eot$/,
        loader: 'file',
        query: {
          name: 'font/[hash].[ext]'
        },
        include: path.join(__dirname, 'client')
      }
    ]
  }
};
