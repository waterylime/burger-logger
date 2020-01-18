const express = require("express");
const burger = require("../models/burger.js");
const path = require("path");

const router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});



router.post("/burgers", function(req, res) {
  console.log(req.body.name);
  burger.insertOne(["burger_name"], [req.body.name], function() {
    res.redirect("/");
  });

  //console.log(req.params, req.body);
});

router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    console.log(result);

    res.sendStatus(200);
  });
});

module.exports = router;
