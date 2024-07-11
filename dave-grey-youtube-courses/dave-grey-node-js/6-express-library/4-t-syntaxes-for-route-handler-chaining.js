/* 
... PREVIOUSLY we saw that we can USE MULTIPLE ROUTE HANDLERS on a SINGLE ROUTE through NEXT ARGUMENT and NEXT() FUNCTION....

.... this note shows TWO METHODS/SYNTAXES to CHAIN ROUTE HANDLERS INSIDE EXPRESS HTTP METHODS

*/

// ** >>>>> METHOD 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

  // here we CHAIN 3 route handlers inside get for /home after using COMMAS ,

    app.get("/home", (req, res, next) => {
      // codes 
      next()
    }, 
    (req, res) => {
      //codes 
      next()
    }, 
    (req, res) => {
      //codes 
      res.send()
    }
)

// *** >>>>>>>>>>>> METHOD 2 >>>>>>>>>>>>>>>>>>>>>>>

  // ** here we set ROUTE HANDLER CODES to 3 VARIABLES and use an ARRAY ARGUMENT to feed in the ROUTE HANDLERS into the http request 

    const one = (req, res) => {
      //codes 
      next()
    }

    const two = (req, res) => {
      //codes 
      next()
    }

    const three = (req, res) => {
      //codes 
      res.send()
    }

    app.get("/home", [one, two, three])


// **** mostly used is the SECOND METHOD