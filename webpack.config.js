var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var TerserJSPlugin = require('terser-webpack-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var isDev = process.env.NODE_ENV === 'development';

var purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.vue',
    './public/**/*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

var postCssPlugins = isDev ? [
              require('tailwindcss'),
              require('autoprefixer')
            ] : [
              require('tailwindcss'),
              require('autoprefixer'),
              purgecss
            ];

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: postCssPlugins,
          }
        }]
      }
    ]
  },
  plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
};
