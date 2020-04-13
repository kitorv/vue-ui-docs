module.exports = {
  publicPath: process.env.NODE_ENV !== "production" ? "/" : "/vue-ui-docs",
  pages: {
    index: {
      // 入口文件
      entry: "site/main.js"
    }
  },
  chainWebpack: config => {
    // 解析Markdown文件转成vue组件
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use("markdown-loader")
      .loader(require("path").resolve(__dirname, "./build/markdown-loader.js"))
      .end();
  }
};
