module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'dist/bundle.js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }, {
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react-app']
      }
    }, {
      test: /\.png$/,
      loader: 'url-loader',
      options: {
        limit: 25000,
        name: 'dist/[hash].[ext]'
      }
    }]
  },
  mode: 'production',
  performance: {
    hints: false
  }
};