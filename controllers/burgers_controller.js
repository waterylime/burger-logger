const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    burger.all((data) =>{
        const handlebarsObject = {
        burgers: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
    });
});

router.post("/burgers", (req, res) => {
    burger.create(
        ["burger_name"], [req.body.b_name], () => {
            res.redirect("/burgers");
        });
});

router.put("/burgers/:id", function (req, res) {
    // const condition = "id = " + req.params.id;
    // console.log("condition", condition);

    // burger.update(
    // {"devoured": req.body.devoured}, condition, (data) => {
    //         res.redirect("/burgers");
    // });

    burger.update(req.params.id, function(result) {
        // wrapper for orm.js that using MySQL update callback will return a log to console,
        // render back to index with handle
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
      });
});

module.exports = router;