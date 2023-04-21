// webpack.config.js

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    name: 'server',
    target: 'node',
    entry: './src/server/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/server'),
      filename: 'bundle.js',
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  },
  {
    name: 'client',
    target: 'web',
    entry: './src/client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/client'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  },
];
