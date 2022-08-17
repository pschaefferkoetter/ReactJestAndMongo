const path = require("path");

const SRC_DIR = path.join(__dirname, "client/src");
const DIST_DIR = path.join(__dirname, "client/dist");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: [
      `${SRC_DIR}/index.jsx`,
      "webpack-hot-middleware/client?path=/__webpack_hmr&reload=true",
    ],
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    hotUpdateChunkFilename: ".hot/hot-update.js",
    hotUpdateMainFilename: ".hot/hot-update.json",
  },
  watchOptions: {
    ignored: "/node_modules/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
