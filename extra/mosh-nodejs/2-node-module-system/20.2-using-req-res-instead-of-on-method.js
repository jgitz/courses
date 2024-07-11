const http = require('http')

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.write("hello hello")
    res.end()
  }

  if (req.url == "/page2") {
    res.write("here is an array displayed using JSON.stringify")

    res.write(JSON.stringify([1, 2, 3]))
    res.end()
  }

})

server.listen("3002", () => {

  console.log("listening to port 3002")

})

// start this file using node
// goto localhost:3002/
// goto localhost:3002/page2


// ** res.write() is used to write message into browser page

// ** res.end() is used to notify end of the response

// ** res.url() is used to fetch the url params part given inside the browser

// ** JSON.stringify() is used to make its content string such that browser can display it

// **** in real world we use express framework to create web server as it is difficult to set routes using http module

