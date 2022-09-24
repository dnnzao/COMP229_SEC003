var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Express" });
});

/* GET about_me page. */
router.get("/about", function (req, res, next) {
  res.render("about_me", { title: "Express" });
});

module.exports = router;
