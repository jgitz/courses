// auth route is aka login 

const express = require('express')
const router = express.Router()
const authController = require('./../controllers/userAuthenticationController')

router.route('/')
  .get(authController.authenticateUser)

module.exports = router 