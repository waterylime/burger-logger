// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(result) {
            cb(result);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(result) {
            cb(result);
        });
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
          devoured: true
        }, condition, cb);
      }

};

module.exports = burger;