module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '../../../build/skate/color-picker-skate.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};