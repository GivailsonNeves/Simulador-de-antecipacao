const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    module: {
      rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          hash: true,
          minify: true,
          title: 'Simulador de Antecipação',
          myPageHeader: 'Simule sua Antecipação',
          template: './src/index.html'
      }),
      new HtmlWebpackTagsPlugin({ 
        tags: ['bundle.css'], 
        append: true, 
        useHash: true }
      )
    ],
    externals: {}
  }