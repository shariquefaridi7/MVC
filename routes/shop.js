const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const {shopGet} =require("../Controllers/shop.js")
const router = express.Router();

router.get('/', shopGet);

module.exports = router;
