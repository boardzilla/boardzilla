const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.resolve(__dirname, 'index.ts'),
  devtool: mode === 'development' && 'source-map',
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
    extensions: ['.ts', '.js', '.json', '.cjs'],

    alias: {
      './utils.js': './utils',
      './space.js': './space',
      './piece.js': './piece',
      './interactive-piece.js': './interactive-piece',
      './player-mat.js': './player-mat',
      './cards.js': './cards',
    },
    // uncomment for newer webpack version and remove hard-coded alias's ^^
    // extensionAlias: {
    //   ".js": [".ts", ".js"],
    // },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        type: 'javascript/auto',
      },
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
};
