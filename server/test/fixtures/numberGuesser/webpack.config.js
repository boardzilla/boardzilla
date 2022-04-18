const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'server/0/server.js'),
  devtool: false,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'server/0'),
    library: {
      type: 'commonjs-module',
    },
  },
  resolve: {
    fallback: {
      events: require.resolve('events/'),
      canvas: path.resolve(__dirname, '../../../../game-core/server/ext/canvas.js'),
      perf_hooks: path.resolve(__dirname, '../../../../game-core/server/ext/perf_hooks.js'),
      'game-core-server': path.resolve(path.join(__dirname, '../../../../game-core/server')),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        type: 'javascript/auto',
      },
    ],
  },
};
