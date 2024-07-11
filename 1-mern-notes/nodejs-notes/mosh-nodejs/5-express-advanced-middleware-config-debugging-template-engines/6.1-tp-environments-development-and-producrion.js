/* 
- node application can be run in various environments such as

  - development environment
  - productio environment
  - testing environment

- sometimes we need certain middlewares that are only needed in certain environments. we can implement the codes for this using the status of a special environment variable which specifies the environment in which node app is running...

  - this can be implemented in 2 ways
      
      1) using process.env.NODE_ENV variable:

      
        - process global object:  is an object in node which access to current running process details

        - process.env.NODe_ENV variable

          - is a variable value that can be set to testing, development, production, staging etc

          - default value is : undefined


      2) using code 

          app.get("env")

          ** is a get method that points to value of the process.env.NODE_ENV variable value

          ** default value is development

- we can use any of the above 2 to set running environment of middleware.. for eg. to run morgan middleware only on development environment... do

     if (app.get("env") === "development") {
 
      app.use(morgan("tiny"))
    }


- step to set environment variable value to production

    - open cli

      - for windows

          :: set NODE_ENV=production

        ** for mac

          :: export NODE_ENV=production

  



*/