const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

const PORT = process.env.PORT || 5000

app.get("^/$|index(.html)?", (req, res) => {
  
  res.sendFile(path.join(__dirname, "views", "index.html"))
  
})

app.get("/new-page(.html)?", (req, res) => res.send("<h1>new page</h1>"))

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page")
})

app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
}) 


app.listen(PORT, () => {
  console.log("server running on port ", PORT)
})

// ** it is a standard to use app.all to handle 404 errors 

// ** note that during serving html files using express... it's EXTERNAL CSS is NOT GETTING APPLIED.... this is because of SECURITY POLICY CALLED "SAME ORIGIN POLICY"

// ***** don't use spaces inside regex else errors

// **** don't use multiple res.send or res.sendFile per route... else error