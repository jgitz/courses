/* 
... explain the SETTING UP and running of a simple  http server in nodejs 

  - step 1: import "http" module using require

  - step 2: set PORT of the SERVER on which the application should run

  - step 3: use http.createServer() METHOD to CAPTURE the REQUEST FROM THE CLIENT and GIVE RESPONSE back to the client 

    ** .createServer METHOD: uses a CALL BACK function as argument... the callback takes 2 values "req" and "res"

      ** we chain appropriate req and res methods to do various things inside .createServer callback..

        - here in the example

            - req.method: gives us the http method of the client request (get, post etc)

            - req.url: gives us the URL that was typed by the client inside the browser 

            - res.end(<data>): ENDS THE RESPONSE with a data of ANY TYPE...

              ** this is the data that will be displayed in the browser.... here in the example... hello world will be displayed

              **** every request from client should be processed and should be ENDED with res.end().... else the client keeps on waiting for the server to send the data

            ** other server res and req methods in the next note

  step 4: use .listen method on .createServer to listen to the port to run and display the webpage 

  step 5: start the server using command node <>

  step 6: go to browser and type localhost:<port number> to see the server running

*/

// ** step 1
const http = require("http")



const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  console.log("client request method is: ", req.method)

  console.log("client browser url is: ", req.url)

  res.end("hello world")


})

server.listen(PORT, () => console.log("server running at port", PORT))


