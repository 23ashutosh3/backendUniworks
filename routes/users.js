const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users');
router.post('/register', usersController.register)

router.get('/get-user/:username', usersController.getUser)




module.exports = router;