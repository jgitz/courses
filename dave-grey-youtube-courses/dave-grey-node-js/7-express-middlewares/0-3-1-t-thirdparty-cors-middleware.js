/* 

.... this note explains the use of cors middleware which is a third party middleware to ALLOW / DENY DOMAINS from making request to your server..... 

    ** cors middlewares also SETS APPROPRIATE CORS HEADERS in the RESPONSE AUTOMATICALLY

.... to use this we need to install cors middleware

..... corese middleware takes a CONFIGURATION OBJECT as an ARGUMENT.... it is an OBJECT with some properties that defines CORS CONFIG.... it is in the form given below 

    {
      origin: ['https://example.com', 'https://www.example.com'],
      methods: ['GET', 'POST', 'PUT'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Content-Length', 'X-Foo'],
      credentials: true,
      maxAge: 86400,
      preflightContinue: false,
      optionsSuccessStatus: 204
    }

    ** if NO OBJECT is passed in as argument in cors() middleware.... then EVERY DOMAIN IS GRANTED ACCESS to your SERVER

..... usually during development.... we use a CUSTOM  WHITELIST ARRAY ... to keep the DOMAIN ADDRESS from which you grant access to your server 

..... so in core option... to loop throgh the array domains.... we use a FUNCTION with ORIGIN and CALLBACK ARGUMENTS inside the core options ORIGIN PROPERTY 

      function (origin, callback) => {
        if (whitelist.indexOf(origin !== -1) {
          callback(null, true)
        } else {
          callback(new Error("Not allowed by CORS"))
        }
        )
      }

        ** the callback function takes TWO ARGUMENT

          1) ERROF ARGUMENT: to throw new error or a null error 

          2) BOOLEAN: TRUE if it allwos request to pass... FALSE if we declient the request






*/

const cors = require('cors')

const whiteList = ["http://www.example.com", "http://localhost:5000"]

const corsOptions = {
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      throw new Error("Not allowed by CORS")
    }
  },
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions)) // ** if we only use app.use(cors()) without any options... the server will be allowed to get any request from any domains

// ** after development of the project.... we remove the localhost:5000 from the whitelist as that is a development server 

// ** inside if condition... !origin is used with an || because during development... we give client request from the localhost5000 itself.... hence it is not CROSS ORIGIN REQUEST... and hence cors set the origin of any localhost request as UNDEFINED.... so to prevent error from happening during development we use !origin.... BUT AFTER DEVELOPMENT WE SHOULD REMOVE || !origin from the if condition

// ** optionsSuccessStatus:  is another cors option that sets a STATUS VALUE to a PRE-FLIGHT REQUEST SEND BY THE BROWSER.... by default the cors send 204 (no content) as status... but we change it to 200 status code 

  // ** pre-flight is an HTTP REQUEST send by the BROWSER to a server inorder to KNOW WHETHER the SERVER CORS allows a CROSS ORIGIN REQUEST.... only based on the response by the server to the pre-flight request.... the CLIENT will be allowed to send an HTTP CLIENT REQUEST to the server 

// 