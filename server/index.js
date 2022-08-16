const express = require("express");
const path = require("path");
const router = require("./routes");
const env = require('../config');

const app = express();
const PORT = env.port || 3002

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
