const express = require('express')
const path = require('path')

const router = express.Router()

// defining routes for index.html and test.html which are inside views/subdir 

router.get('^/$|index(.html)?',

  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'))
  }
)

router.get('/test(.html)?', 
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'))
  }
)

module.exports = router

// **** always remember const router = express.Router()

// **** always module.export the router from all routes files else error
