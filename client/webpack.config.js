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
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
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
