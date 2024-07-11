const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use("^/$|index(.html)?", require("./routes/root.js"))

app.use('/employees', require('./routes/api/employees.js'))



app.all('/*', (req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log('server running on port: ', PORT)
})

