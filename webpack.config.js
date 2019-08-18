const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'app', 'index'),
  output: {
    path: `${__dirname}dist`,
    filename: 'bundle.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': 'http://backend:3000',
    },
    historyApiFallback: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      cached: true,
      colors: true,
      errorDetails: false,
      errors: true,
      hash: false,
      modules: false,
      publicPath: false,
      reasons: false,
      source: false,
      timings: true,
      version: false,
      warnings: true,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  },
};
