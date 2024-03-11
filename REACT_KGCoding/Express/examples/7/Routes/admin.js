// routes/admin.js

const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../Utilities/path');

const products=[];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
    products.push({title:req.body.title})
    res.redirect("/");
});

exports.Routes = router;
exports.products=products;
