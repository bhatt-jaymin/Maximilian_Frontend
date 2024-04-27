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
  constructor(t, d, s,img,stat,city,add,ph,gen,usrtpe,actype) {
    this.title = t;
    this.desc = d;
    this.skills = s;
    this.imageURL=img;
    this.state=stat;
    this.city=city;
    this.addrss=add;
    this.phone=ph;
    this.gender=gen;
    this.usrtype=usrtpe;
    this.actype=actype;
  }

  /*title, imageURL, desc, skills, state,city,addrss,phone,gender,usrtype,actype*/
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

  static findbyID(id,cb){
    getUsersFromFile(users =>{
      const user=users.find(u=>u.id===id);
      cb(user)
    });
  }
};

