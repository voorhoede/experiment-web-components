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
        test: /\.js$/,
        exclude: [
          /node_modules/,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'react-web-component-style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
};
