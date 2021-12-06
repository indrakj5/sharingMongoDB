const express = require('express');
const router = express.Router();
const API = require('../controllers/user');

router.get('/', API.getUser);
module.exports = router;