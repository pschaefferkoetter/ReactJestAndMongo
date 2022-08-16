const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost/localtestdb";

// const db = mongoose
//   .connect(mongoUri)
//   .then(() => {
//     console.log("connected to database");
//     return mongoose.connection;
//   })
//   .catch((err) => console.log("Error!: ", err));


mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;
