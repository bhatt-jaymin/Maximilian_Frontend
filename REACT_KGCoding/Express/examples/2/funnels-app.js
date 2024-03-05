const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Send User Request..!");
  next();
  //...
});

app.use("/user", (req, res, next) => {
  console.log("User Dashboard Connected...");
  res.send("<h1> <center> Welcom User Dashboard Page ! </center> </h1>");
  //next(); // Allows to the request continue to the next middleware in line
});
app.use("/", (req, res, next) => {
  console.log("User Connected Successfully...");
  res.send("<h1> <center> User Area...! </center> </h1>");
  //...
});
const server = http.createServer(app);

server.listen(3000);
