var path = require('path');
var config = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'play-what-beta.js',
    libraryTarget: "commonjs2"
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
  },
  /*externals: { 'react': 'commonjs react' }*/
};

module.exports = config;