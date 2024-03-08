const path=require('path');
const express = require('express');
const router = express.Router();
const rootDir=require('../Utilities/path')

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir,'Views','shop.html'));
});

module.exports = router;
