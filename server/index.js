const express = require("express");
const path = require("path");
const router = require("./routes");
const env = require("../config");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config");
const webpackCompiler = webpack(webpackConfig);

const app = express();
const PORT = env.port || 3002;

// middleware for webpack hot reload
app.use(
  require("webpack-dev-middleware")(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(
  require("webpack-hot-middleware")(webpackCompiler, {
    path: "/__webpack_hmr",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
