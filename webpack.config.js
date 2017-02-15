var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    LiveReloadPlugin = require('webpack-livereload-plugin'),
    path = require('path');

var cssExtractTextPlugin = new ExtractTextPlugin('style.css');

module.exports = {
  entry: {
    'script': './scripts/index.jsx'
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader'},
      { test: /\.(ttf.*|eot.*|woff.*|ogg|mp3)$/, loader: 'file-loader'},
      { test: /.(png|jpe?g|gif|svg.*)$/, loader: 'file-loader!img-loader?optimizationLevel=7&progressive=true'},
      {
        test: /\.css$/,
        loader: cssExtractTextPlugin.extract('style-loader', 'css-loader', { publicPath: './' }),
      },
      {
        test: /\.scss$/,
        loader: cssExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader', { publicPath: './' }),
      }
    ],
  },
  devServer: {
      contentBase: "public"
  },
  plugins: [
    cssExtractTextPlugin,
    new webpack.DefinePlugin({
      Environment: JSON.stringify(require('config')),
    }),
    new LiveReloadPlugin({appendScriptTag:true}),
  ],
  externals: {
      "jquery": "jQuery"
  },
  resolve: {
    root: path.join(__dirname, 'scripts'),
    extensions: ['', '.js', '.json', '.jsx'],
  },

  output: {
    path: path.join(__dirname, 'public/bundle'),
    publicPath: 'bundle/',
    filename: '[name].js',
  },
};
