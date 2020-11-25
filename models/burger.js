const orm = require("../config/orm.js");

const burger = {

    all: (cb) => {
      orm.select((res) => {
        cb(res);
      });
    },
    insertOne: (value, cb) => {
      orm.insertOne(value, (res) => {
        cb(res);
      });
    },
    updateOne: (condition, cb) => {
      orm.updateOne(condition, (res) => {
        cb(res);
      });
    },
};

module.exports = burger;