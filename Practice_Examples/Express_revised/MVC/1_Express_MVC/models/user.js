const fs = require("fs");
const path = require("path");

module.exports = class User {
  constructor(t, d, s) {
    this.title = t;
    this.desc = d;
    this.skills = s;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "users.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let users = [];
      if (!err) {
        users = JSON.parse(fileContent);
      }
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "users.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([])
      }
      cb(JSON.parse(fileContent));
    });
  }
};