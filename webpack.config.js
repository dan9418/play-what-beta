var path = require('path');
var config = {
  mode: 'development',
  entry: ['./src/Sample/Sample.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'sample.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};

module.exports = config;