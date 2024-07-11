const express = require("express")
const path = require('path')
const router = express.Router()
const employeesController = require('../../controllers/employeesController')

router.route('/')
  .get(employeesController.getEmployees)
  .post(employeesController.postEmployee)
  .put()
  .delete 

router.get('/:id')

module.exports = router