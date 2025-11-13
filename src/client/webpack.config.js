// webpack.config.js

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: './index.js',
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
