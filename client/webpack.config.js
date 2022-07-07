const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/App.js",
  mode: "development",
  output: {
    filename: "index_output.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],

  devServer: {
    host: "localhost",
    port: 7000,
    open: true,
    historyApiFallback: true,
  },
};
