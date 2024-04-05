const path=require('path');
const http = require("http");
const bodyParser = require("body-parser");
const expressHbs=require('express-handlebars');

const express = require("express");
const ErrorPageController=require('./controllers/error');
const adminRoutes = require("./routes/admin.js");
const usrRoutes = require("./routes/addusr.js");


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public','')));


  
app.use('/admin',adminRoutes);
app.use(usrRoutes);

app.use(ErrorPageController.error404Page); 


const server = http.createServer(app);
const port=3001
app.listen(port, () => {
  console.log(`Server run on ${port}`);
});