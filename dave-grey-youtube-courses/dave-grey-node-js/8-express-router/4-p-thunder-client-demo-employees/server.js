const express = require('express') //1

const app = express() // 2

const PORT = process.env.PORT || 5000 // 3

app.use(express.json()) // 7

app.use('/employees', require('./routes/api/employees')) // 8



app.get("^/$|index(.html)?", (req, res) => {
  res.send("<h1>Welcome</h1>")
}) // 5


app.all("/*", (req, res) => {
  res.send("<h1>404</h1>")
}) // 6

app.listen(PORT, () => console.log("server running on port", PORT)) // 4

// **** if handling json data in server.js... then app.use(express.json()) before any other middlewares.... else error when you want to receive a json client request