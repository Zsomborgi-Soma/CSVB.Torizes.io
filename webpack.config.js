const path = require('path');

module.exports = {
  mode: 'development',
  entry: './docs/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'docs', 'scripts'),
  },
  devServer: {
    static: {      
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 9000,
  }
};