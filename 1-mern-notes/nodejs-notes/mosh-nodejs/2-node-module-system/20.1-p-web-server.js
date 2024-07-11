const http = require("http") 

const server = http.createServer() // server created

server.on("connection", (socket) => {
  console.log("new connection running on browser")
}) 

server.listen(3001, () => {
  console.log("listening to port 3001")
}) // assigned port to server

