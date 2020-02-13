const px2rem = require('postcss-px2rem-exclude');
const postcss = px2rem({
  remUnit: 75,
  exclude: /node_modules|\/pc\//i
})

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            postcss
          ]
        }
      }
    }
  }