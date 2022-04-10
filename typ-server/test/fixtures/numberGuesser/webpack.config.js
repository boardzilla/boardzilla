const path = require('path');

console.log("GAME CORE!", path.resolve(path.join(__dirname, "../../../../game-core")))

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'server/0/server.js'),
  devtool: false,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'server/0'),
    library: {
      type: "commonjs-module",
    },
  },
  resolve: {
    fallback: {
      events: require.resolve("events/"),
      canvas: path.resolve(__dirname, '../../ext/canvas.js'),
      perf_hooks: path.resolve(__dirname, '../../ext/perf_hooks.js'),
      "game-core": path.resolve(path.join(__dirname, "../../../../game-core")),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        type: 'javascript/auto',
      },
    ],
  }
} 
