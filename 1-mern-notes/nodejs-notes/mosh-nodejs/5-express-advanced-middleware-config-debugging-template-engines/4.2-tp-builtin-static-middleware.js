/* 
express.static("public") : is a builtin express middleware used to give access to static files such as images, pdf, txt files that are stored inside PUBLIC folder of the server app

*/
app.use(express.json())
app.use(express.static("public"))

// ** public is the name of the folder

// files stored in public folder can be accessed by the client by typing filename after root / in the url

/* 
if client wants to access a txt file named readme.txt....

  - goto browser url box


  - type url

      localhost:3000/readme.txt
*/