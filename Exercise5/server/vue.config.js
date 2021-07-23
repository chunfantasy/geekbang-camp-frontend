const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new MonacoWebpackPlugin()],
  },
  //   chainWebpack: (config) => {
  // config.module
  //   .rule("images")
  //   .use("url-loader")
  //   .loader("url-loader")
  //   .tap((options) =>
  //     Object.assign(options, { esModule: false, limit: 1e5 })
  //   );
  // //把字体图标相关文件转成base64
  // config.module
  //   .rule("fonts")
  //   .use("url-loader")
  //   .loader("url-loader")
  //   .tap((options) => Object.assign(options, { limit: 1e5 }));
  // //把svg转成base64
  // const svgRule = config.module.rule("svg");
  // svgRule.uses.clear();
  // svgRule
  //   .rule("svg")
  //   .use("url-loader")
  //   .loader("url-loader")
  //   .tap((options) => ({ esModule: false, limit: 1e5 }));
  // config
  //   .plugin("inline-source")
  //   .use(require("html-webpack-inline-source-plugin"));
  // config.plugin("html").tap((args) => {
  //   args[0].inlineSource = "(.css|.js$)";
  //   return args;
  // });
  //   },
};
