const path = require('path');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.resolve(__dirname, 'index.js'),
  devtool: mode === 'development' && 'eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: {
      type: 'commonjs-module',
    },
  },
  resolve: {
    fallback: {
      events: require.resolve('events/'),
      canvas: path.resolve(__dirname, '../../game-core/server/ext/canvas.js'),
      perf_hooks: path.resolve(__dirname, '../../game-core/server/ext/perf_hooks.js'),
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
