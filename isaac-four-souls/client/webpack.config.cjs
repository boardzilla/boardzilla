const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          "presets": [
            path.resolve(__dirname, 'node_modules/@babel/preset-env'),
            path.resolve(__dirname, 'node_modules/@babel/preset-react'),
          ]
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(path.dirname(__filename), 'images'), to: path.join(__dirname, 'build', 'images') },
      ],
    }),
  ],
} 
