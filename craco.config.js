const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8, //压缩比例
        deleteOriginalAssets: false //是否删除源文件
      })
    ]
  }
}
