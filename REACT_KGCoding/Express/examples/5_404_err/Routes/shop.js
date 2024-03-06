const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
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
    <h1> <center> User Express Dashboard...! </center> </h1>
    </body>`);
});

module.exports = router;