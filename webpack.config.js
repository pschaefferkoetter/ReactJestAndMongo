const path = require("path");

const SRC_DIR = path.join(__dirname, "client/src");
const DIST_DIR = path.join(__dirname, "client/dist");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new ESLintPlugin()]
};
