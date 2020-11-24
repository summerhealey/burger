const connection = require("./connection.js");
const orm = {
  select: (cb) => {
    const querySelect = "SELECT * FROM burgers";
    connection.query(querySelect, (err, res) => {
      if(err) throw err;
      cb(res);
    });
  },
  create: (value, cb) => {
    const queryCreate = "INSERT INTO burgers (burger_name) VALUES (?)";
    connection.query(queryCreate, [value], (err, res) => {
      if(err) throw err;
      cb(res);
    });
  },
  update: (condition, cb) => {
    const queryUpdate = "UPDATE burgers SET devoured = true WHERE id = ?";
    connection.query(queryUpdate, [condition], (err, res) => {
      if(err) throw err;
      cb(res);
    });
  }
};
module.exports = orm;