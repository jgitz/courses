const express = require('express')
const path = require('path')
const { logger } = require('./middlewares/logEvents') // 1-1
const cors = require('cors') // 1-2
const corsOptions = require('./config/corsOptions') // 1-2

const errorHandler = require('./middlewares/errorHandler')


const PORT = process.env.PORT || 5000

const app = express()

// 1-1 using custom middleware for logging 

app.use(logger)

// 1-2 using thrid party middleware cors 

app.use(cors(corsOptions))


// setting inbuilt urlencoded middleware // 1

app.use(express.urlencoded({extended: false}))

// setting inbuilt json middleware // 1

app.use(express.json())

// setting static folders and routes // 1

app.use(express.static('public'))
app.use('/images', express.static('public/img'))

app.get('^/$|index(.html)?', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/new-page(.html)?', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page(.html)?', (req, res) => {
  res.redirect(301, '/new-page')
}) // **** we've to set the redirect route BEFORE using the redirect.... else error


// app.all('/*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
// }) 

// 2 refactor 404 response 

app.all('/*', (req, res) => {
  res.status(404)
  if(req.accepts('html')) {

    res.sendFile(path.join(__dirname, "views", "404.html" ))

  } else if(req.accepts("json")) {

    res.json({error: "404 Not found"})

  } else {
    res.type("text/plain").send("404 not found")
  }
})

app.use(errorHandler) // 1-3



app.listen(PORT, () => {
  console.log("server running on port ",PORT)
})

// **** we've to set the redirect route BEFORE using the redirect.... else error