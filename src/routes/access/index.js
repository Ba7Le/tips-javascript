'use strict'

const express = require('express');
const accessConroller = require('../../controllers/access.conroller');
const router = express.Router();

//sign up
router.post('/shop/signup', accessConroller.signUp)

module.exports = router;