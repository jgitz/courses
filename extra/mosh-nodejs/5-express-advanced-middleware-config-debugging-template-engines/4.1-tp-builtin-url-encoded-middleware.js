/* 
express.urlencoded() : is a built in express middleware to parse html form content which comes in the form of key value pairs into req.body json object

  ** not used often now

*/

app.use(express.json())
app.use(express.urlencoded({extended: true})) // will parse any request body in form of key value pair and store it inside the req.body object

// using this we can pass arrays and objects in url encoded format

