const express = require('express');
const router = express.Router();

const controllers = require('../../controllers/index');
const { email_controller } = controllers;

router.post('/email', email_controller.get_test);

module.exports = router;
