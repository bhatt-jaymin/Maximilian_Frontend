const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "shortlist.json"
);

const getShortlistFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File doesn't exist, return empty array
        cb([]);
      } else {
        // Other error, handle as needed
        console.error('Error reading file:', err);
        cb([]);
      }
    } else {
      // Log file content for debugging
     // console.log('File content:', fileContent.toString());

      // Check if file content is empty
      if (fileContent.length === 0) {
        cb([]); // Return empty array
        return;
      }

      // Parse file content
      let parsedContent;
      try {
        parsedContent = JSON.parse(fileContent);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        cb([]);
        return;
      }
      cb(parsedContent);
    }
  });
}

module.exports = class ShortlistUser {
  constructor(id, title, imageURL, desc, skills, state, city, addrss, phone, gender, usrtype, actype) {
    this.id = id;
    this.title = title;
    this.imageURL = imageURL;
    this.desc = desc;
    this.skills = skills;
    this.state = state;
    this.city = city;
    this.addrss = addrss;
    this.phone = phone;
    this.gender = gender;
    this.usrtype = usrtype;
    this.actype = actype;
  }

  save() {
    getShortlistFromFile(users => {
      // Check if the user is already in the shortlist
      if (!users.some(u => u.id === this.id)) {
        // Extract only the necessary fields and create a new object
        const newUser = {
          id: this.id,
          title: this.title,
          imageURL: this.imageURL,
          desc: this.desc,
          skills: this.skills,
          state: this.state,
          city: this.city,
          addrss: this.addrss,
          phone: this.phone,
          gender: this.gender,
          usrtype: this.usrtype,
          actype: this.actype
        };
        users.push(newUser);
        fs.writeFile(p, JSON.stringify(users), err => {
          if (err) {
            console.error('Error writing file:', err);
          }
        });
      } else {
        console.log('User is already in the shortlist');
      }
    });
  }
  
  static fetchAll(cb) {
    getShortlistFromFile(cb)
  }

  static findById(id, cb) {
    getShortlistFromFile(users => {
      const user = users.find(p => p.id === id);
      cb(user);
    });
  }
};
