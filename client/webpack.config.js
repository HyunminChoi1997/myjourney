const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    entry: "./src/App.js",
    mode: env.mode,
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
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
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
};
