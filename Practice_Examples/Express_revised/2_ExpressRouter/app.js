const path=require('path');
const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");

const adminRoutes = require("./routes/admin.js");
const usrRoutes = require("./routes/addusr.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public','')));


  
app.use('/admin',adminRoutes);
app.use(usrRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404err.html'));
    
  }); 

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("Server run on 3000");
});
