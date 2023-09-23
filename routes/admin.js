const path = require('path');

const express = require('express');



const router = express.Router();
const {adminGet}=require("../Controllers/admin.js");
const {adminPost}=require("../Controllers/admin.js");


// /admin/add-product => GET
router.get('/add-product',adminGet );

// /admin/add-product => POST
router.post('/add-product',adminPost);

exports.routes = router;

