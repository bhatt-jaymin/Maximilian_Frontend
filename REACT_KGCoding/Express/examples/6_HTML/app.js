const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'Public' directory
app.use(express.static(path.join(__dirname, 'Public')));
// This will serve files from the '/CSS' directory under the '/CSS' URL path
app.use('/CSS', express.static(path.join(__dirname, 'Public', 'CSS')));


app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
