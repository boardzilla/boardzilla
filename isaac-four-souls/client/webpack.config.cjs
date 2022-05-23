const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {loader: "css-loader", options: {url: false}},
          'sass-loader'
        ],
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: 'asset/resource'
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(path.dirname(__filename), 'images'), to: path.join(__dirname, 'build', 'images') },
      ],
    }),
  ],
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
