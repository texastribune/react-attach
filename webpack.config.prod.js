const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'reactExternal.min.js',
    publicPath: '/',
    library: 'reactExternal',
    libraryTarget: 'umd',
  },

  plugins: [
    new ExtractTextPlugin('reactExternal.min.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
};
