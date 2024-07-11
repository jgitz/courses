const express = require('express') // 1

const router = express.Router() // 2

const data = require("../../data/data.json") // 4

router.route('/')
    .get((req, res) => {
      res.json(data)// 5 
    })
    .post((req, res) => { 
      res.send(`
      posted new data with: 
      id: ${req.body.id}
      first name: ${req.body.firstName}
      last name: ${req.body.lastName}
      `)
    })
    .put((req, res) => {
      res.send(`
      received put request data with: 
      id: ${req.body.id}
      first name: ${req.body.firstName}
      last name: ${req.body.lastName}
     `)
    })
    .delete((req, res) => {
      res.send(`
      received delete request data with: 
      id: ${req.body.id}
      first name: ${req.body.firstName}
      last name: ${req.body.lastName}
     `)
    })

  router.route('/:id')
    .get((req, res) => {
      res.send(`received parameter id ${req.params.id}`)
    })



module.exports = router // 3

// **** always module.export the router from all routes files else error
