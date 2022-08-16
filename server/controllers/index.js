const Test = require("../../database/TestSchema");

module.exports = {
  getAll: (req, res) => {
    Test.find({})
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(500).send(err));
  }
};
