.... do the following

  - use date-fns and uuid to create a log file in the project to record event after 2 seconds of running the server

  - create an event named log in index.js and listen to it 

  - the  log file should record the log event after 2 seconds of starting/restarting of the server using .listen() and .on() function


- steps 

    - initiate node in project and install date-fns and uuid packages as PRODUCTION DEPENDENCIES

    - install nodemon as DEV DEPENDENCY

    - set start and dev scripts in package.json

    - make a FILE/MODULE named logEvents.js to write a FUNCTION with following logic and EXPORT IT....

        - check if a FOLDER named "log" exists in the project folder using existsSync()

        - if not exists.... APPEND THE FILE with log details and MESSAGE with UUID and DATE inside the path /log/log.txt 

          ** log folder and the log.txt file inside it will host the log messages

        - use FS PROMISES module to implement the append functionality using ASYNC AND AWAIT and TRY-CATCH BLOCK 

        - call the async function 

        - export the function using module.exports= to use it inside INDEX.JS .on() function 

