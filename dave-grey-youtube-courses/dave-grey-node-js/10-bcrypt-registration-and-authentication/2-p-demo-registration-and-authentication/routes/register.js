const express = require('express')

const registerController = require('./../controllers/registerUserController')

const router = express.Router()

router.route('/')
  .get((req, res) => res.send('<h1>registration page</h1>'))
  .post(registerController.registerUser)

module.exports = router