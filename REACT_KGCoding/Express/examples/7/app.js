const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminData = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'Public')));

app.use('/CSS', express.static(path.join(__dirname, 'Public', 'CSS')));


app.use('/admin', adminData.Routes);
app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
