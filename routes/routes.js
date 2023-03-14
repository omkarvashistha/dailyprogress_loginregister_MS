const express = require('express');
const router = express.Router();
const userController = require('../Controller/loginRegisterController');
const cors = require('cors');

router.use(cors())

router.post('/registerUser',userController.registerUser);
router.post('/loginUser',userController.loginUser);
router.all('*',userController.invalid);


module.exports = router