const express = require('express');
const error404 = require('../controller/error404');
const getAdmin = require('../controller/getAdmin');
const router = express.Router();
 


// Handling undefined API endpoints
router.use(error404);

module.exports = router;
