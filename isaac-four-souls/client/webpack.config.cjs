const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const assets = require('./assets.json')

const mode = process.env.NODE_ENV || "development"

module.exports = {
  mode,
  entry: path.resolve(path.dirname(__filename), 'index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(path.dirname(__filename), 'build'),
    library: {
      type: "window",
    },
  },
  name: "client",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ['@babel/preset-env', '@babel/preset-react']
          },
        }
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {loader: "css-loader", options: {url: false}},
          {loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
              join: (options, loader) => (item) => assets[item.uri]
            }
          },
          {loader:'sass-loader', options: {sourceMap: true}}
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: 'asset/resource'
      }
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        },
      }),
    ],
  },
} 
