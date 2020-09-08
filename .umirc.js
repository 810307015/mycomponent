const path = require('path');

module.exports = {
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  alias: {
    '@': path.resolve(__dirname, 'src')
  },
  resolve: {
    includes: ['docs']
  },
  styles: [
    `html { font-size: 16px; }`,
    `.__dumi-default-menu-header h1 { font-size: 36px; }`,
    `.__dumi-default-code-block > pre { font-size: 16px !important; }`,
    `.__dumi-default-previewer-demo { position: relative; }`
  ],
  publicPath: "./",
  // base: "/dumidocs",
  // outputPath: path.join('../../CivWebPublish/dumidocs')
}