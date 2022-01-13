const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const config = ({ isDev }) => ({
  mode: isDev ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          limit: 5000,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: { esmodules: true, browsers: ['last 2 versions'] } }],
            '@babel/preset-react',
          ],
          plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('v0.1.0'),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),	// 빌드 결과물의 path
    // publicPath: '/',				// 브라우저에서 접근하는 path. (기본값: '/')
    port: 9000, 				// 개발서버 포트 (기본값: 8080)
    historyApiFallback: true,			// 404 응답 시 index.html로 리다이렉트
    open: true,
    hot: true,
    // overlay: true,				// 웹팩 빌드 에러를 브라우저 상에 출력
    // stats: 'errors-only',			// 메세지 표시 수준 조절 (none, minimal, normal, verbose)
    // proxy: {
    //   '/api': 'http://localhost:8080',		// 프론트 단에서 CORS 에러 해결하는 방법
    // },
  },
});

module.exports = (env, argv) => config({ isDev: argv.mode === 'development' });
