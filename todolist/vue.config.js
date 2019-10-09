module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.95.207.1:8080',
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}