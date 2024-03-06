const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require("./Routes/shop");
const shopRoutes = require("./Routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{

    res.status(404).send(`<!DOCTYPE html>
    <html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
                background-color: black;
                color: white;
            }
            .container {
                padding: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 style="text-align: center;">Page Not Found</h1>
            <p style="text-align: center;">Sorry, the page you're looking for could not be found.</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(3000);