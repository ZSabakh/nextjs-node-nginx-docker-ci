var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    text: "Node API, changed 9:27AM :)",
  });
});

module.exports = router;
