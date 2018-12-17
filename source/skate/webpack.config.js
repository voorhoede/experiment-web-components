module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '../../../build/skate/hue-slider-skate.js',
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