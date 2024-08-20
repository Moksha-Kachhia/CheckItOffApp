const express = require('express'); 
const Authcontroller = require('../controllers/authController');
const router = express.Router();

router.post('/register',Authcontroller.registerUser)
router.post('/login',Authcontroller.loginUser)

module.exports = router; 