const express = require('express')


const app = express()

const PORT = process.env.PORT || 5000

app.use('/', express.json())

app.use('^/$|index(.html)?', require('./routes/root'))

app.use('/register', require('./routes/register'))

app.use('/auth', require('./routes/auth'))


app.all('/*', (req, res) => {
  res.status(404).send('<h1>Error 404</h1>')
})

app.listen(PORT, () => {
  console.log("server is running on port", 5000)
})
