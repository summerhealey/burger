const orm = require("../config/orm.js");

const burger = {

    all: (cb) => {
      orm.select((res) => {
        cb(res);
      });
    },
    create: (value, cb) => {
      orm.create(value, (res) => {
        cb(res);
      });
    },
    update: (condition, cb) => {
      orm.update(condition, (res) => {
        cb(res);
      });
    },
};

module.exports = burger;