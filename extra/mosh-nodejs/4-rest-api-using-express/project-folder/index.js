const express = require("express") /* 39 */

const app = express() /* 39 */

app.get("/", (req, res) => {
  res.send("hello world")
}) /* 39 */

app.listen(3001, () => console.log("app working on port 3001"))

