const path=require('path');
const http = require("http");
const bodyParser = require("body-parser");
const expressHbs=require('express-handlebars');

const express = require("express");

const adminData = require("./routes/admin.js");
const usrRoutes = require("./routes/addusr.js");

const app = express();

app.engine('hbs',expressHbs({layoutsDir:'views/layouts/',defaultLayout:'main-layout',extname:'hbs'}));
app.set('view engine','hbs');
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public','')));


  
app.use('/admin',adminData.routes);
app.use(usrRoutes);

app.use((req, res, next) => {
    res.status(404).render('404err',{pageTitle:'404 || Error'});
    
  }); 


const server = http.createServer(app);
const port=3000
app.listen(port, () => {
  console.log(`Server run on ${port}`);
});