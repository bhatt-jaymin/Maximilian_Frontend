const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const  getUsersFromFile = cb => {
  
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([])
    }else{
    cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class User {
  constructor(title, imageURL,desc, skills,state,city,addrss,phone,gender,actype) {
    this.title = title;
    this.imageURL=imageURL;
    this.desc = desc;
    this.skills = skills;
    this.state = state;
    this.city = city;
    this.addrss = addrss;
    this.phone = phone;
    this.gender = gender;
    this.actype = actype;
  }

  save() {
    getUsersFromFile(users => {
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), err => {
        console.log(err);
      });
    });
    fs.readFile(p, (err, fileContent) => {
      let users = [];
    });
  }

  static fetchAll(cb) {
   getUsersFromFile(cb)
  }
};