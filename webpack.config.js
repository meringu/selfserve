const path = require('path')
const webpack = require('webpack')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const RelayCompilerWebpackPlugin = require('relay-compiler-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
    proxy: {
      '/query': 'http://localhost:8080',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: 'graphql-tag/loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      inject: 'body',
      publicPath: '/',
    }),
    new WebpackShellPlugin({
      onBuildStart:['cat graphql/schema/*.graphql > graphql/schema.graphql'],
    }),
    new RelayCompilerWebpackPlugin({
      schema: path.resolve(__dirname, 'graphql/schema.graphql'),
      src: path.resolve(__dirname, 'src'),
    }),
    new ESLintPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 10000,
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
