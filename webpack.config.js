const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
import { webpack } from 'webpack';
import { supportedLocales } from './config.js';


module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: './js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html'
      },
    ),
    new webpack.ContextReplacementPlugin(
      /^date-fns[/\\]locale$/,
      new RegExp(`\\.[/\\\\](${supportedLocales.join('|')})[/\\\\]index\\.js$`)
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}