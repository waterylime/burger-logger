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

router.put("/burgers/:id", req, res)  => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
    {"devoured": req.body.devoured}, condition, (data) => {
            res.redirect("/burgers");
    });
});

module.exports = router;