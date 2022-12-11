const express = require('express');
const validate = require('../middleware/validate');
const router = express.Router();
const userController = require('./user.controller');
const userValidation = require('./user.validation')

router.route('/register').post(validate(userValidation.register), userController.register);
router.route('/login').post(validate(userValidation.login), userController.login);

module.exports = router;