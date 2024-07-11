const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome")
}) /* 

  the second callback function is known as ROUTE HANDLER

*/



app.listen(PORT, () => console.log("server running on PORT: ", PORT)) /* 

***** always set listen method at the very last.... becaues it is blocking

*/





