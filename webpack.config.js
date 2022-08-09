const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  //开发模式
  entry: {
    index: './src/js/index.js',
    // index: {
    //   import: '/src/index.js',
    //   dependOn: 'shared' //不同chunk之间共享模块：
    // } ,

    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared', //不同chunk之间共享模块：
    // },
    // shared: 'lodash'
  },
  devtool: 'inline-source-map', //source-map
  devServer: {
    static: './dist', //修改配置文件，告知 dev server，从什么位置查找文件。
  },
  plugins: [
    new HtmlWebpackPlugin({ // HTML 文件的创建，
      title: 'Development',
    }),
  ],
  // optimization: {
  //   runtimeChunk: 'single', //多个入口
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist2'),
    //clean: true, //清理dist文件夹
  },
  // optimization: { //提取公共依赖
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  
};
console.log(__dirname)