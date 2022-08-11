const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
    devServer: {
      historyApiFallback: true,
      port: '3000',
      proxy: {
        "/dev": {
          target: "http://172.0.0.1:8081",
          pathRewrite: { "^/dev": "" }
        }
      }
    }
  },
}