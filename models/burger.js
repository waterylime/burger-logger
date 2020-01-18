const orm = require("../config/orm.js");

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = burger;
