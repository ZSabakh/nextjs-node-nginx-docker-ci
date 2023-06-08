var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    text: "Node API, changed 10:25PM 6/7/2023 :)",
  });
});

module.exports = router;
