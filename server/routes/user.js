const express = require('express');
const router = express.Router();
const API = require('../controllers/user');

router.get('/users', API.getUser);
router.post('/new', API.postUser);
router.put('/update/:id', API.putUser);
router.delete('/delete/:id', API.deleteUser);
module.exports = router;