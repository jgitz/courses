... to set express js


  - use ::npm init :: to initialize node in project folder 

  - create index.js inside project folder 

  - install nodemon as dev dependency

  - set scripts in package.json

  - install express package using command 

      :: npm i express 

  - inside index.js import express using require method 


  - use express() function and assign it to a VARIABLE NAMED APP

    ** EXPRESS() function provide methods to do various OPERATIONS to build a WEB SERVER.... it gives methods to USE MIDDLE WARE 

  - set PORT variable 

  - use APP methods like app.get(<path>, route_handler_function) to set operations on the route 

  - use app.listen() to listen to the port when starting the server 


***** always use app.listen() at the end.... it is the STANDARD... app.listen() is a BLOCKING FUNCTIO... i.e it blocks running of other codes while its execution.... so this blocks setting of routes if we use listen method at EARLIER point