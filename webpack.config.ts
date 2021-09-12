import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { DefinePlugin } from 'webpack';

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevMode ? 'development' : 'production',
  entry: {
    index: {
      import: './src/renderer/index.tsx',
    },
  },
  output: {
    libraryTarget: 'umd',
    globalObject: 'window',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'renderer-tsconfig.json',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
    }),
    new DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV ?? 'development'),
        },
      },
    }),
  ],
  devServer: {
    host: '127.0.0.1',
    port: 8099,
    hot: true,
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: false,
  },
};
