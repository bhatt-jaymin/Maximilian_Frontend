const express = require('express');
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send(
        '<form action="/product" method="POST"><center><input type ="text" name="title"><button type="submit">Send</button></center></form>'
    );
});

router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;