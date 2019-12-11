const connection = require("../config/connection.js");

function printQuestionMarks (num){
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
};

function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
};

let orm = {
  all: (tableInput, cb) => {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result)=> {
      if (err) throw err;
      cb(result);
    });
  },
  create: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) =>{
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: (table, objColVals, condition, cb) => {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;