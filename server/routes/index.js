const router = require("express").Router();
const test = require("../controllers");

router.get("/api/users", test.getAll);

module.exports = router;
