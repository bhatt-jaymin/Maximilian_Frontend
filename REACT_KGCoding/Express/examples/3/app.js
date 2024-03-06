const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require("./Routes/shop");
const shopRoutes = require("./Routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);