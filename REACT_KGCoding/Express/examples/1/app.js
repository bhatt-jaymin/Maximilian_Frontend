const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This always runs..!");
  next();
  //...
});

app.use("/add-product", (req, res, next) => {
  console.log("In the Middleware Here...");
  res.send("<h1> <center> Welcom Add Product Admin Page ! </center> </h1>");
  //next(); // Allows to the request continue to the next middleware in line
});
app.use("/", (req, res, next) => {
  console.log("In another the Middleware Here...");
  res.send("<h1> <center> The Express JS Middleware </center> </h1>");
  //...
});
const server = http.createServer(app);

server.listen(3000);
