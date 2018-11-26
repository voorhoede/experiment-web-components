module.exports = {
  mode: 'development',
  entry: {
    client: './src/index.js',
  },
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'react-web-component-style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
    ],
  },
};
