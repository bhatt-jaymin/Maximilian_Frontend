const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Use body-parser middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("In another Middleware...");
  res.send(
    '<form action="/product" method="POST"><center><input type ="text" name="title"><button type="submit">Send</button></center></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1> <center> User Express Dashboard...! </center> </h1>");
});

app.listen(3000);
