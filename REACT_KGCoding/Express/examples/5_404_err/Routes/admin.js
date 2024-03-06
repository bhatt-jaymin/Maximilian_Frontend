const express = require('express');
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
        <style>
            html, body {
                margin-top: 100px;
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
        <form action="/product" method="POST"><center><input type ="text" name="title"><button type="submit">Send</button></center></form>
    </body>`
    );
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;