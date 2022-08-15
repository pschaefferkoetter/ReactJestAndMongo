
const path = require("path");
const SRC_DIR = path.join(__dirname,'client/src');
const DIST_DIR = path.join(__dirname,'client/dist');
module.exports = {
  mode: "development",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  module: {
    // [rules] will determine the rules around those external modules
    rules: [
      // First rule is to idenify js and jsx files and turn on babel
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // Second rule is to check for css files and load them with the following loaders
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
}