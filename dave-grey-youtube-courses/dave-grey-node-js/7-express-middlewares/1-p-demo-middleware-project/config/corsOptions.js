const whiteList = [
  'https://www.google.com',

  'http://127.0.0.1',

  'http://localhost:5000',

  'http://127.0.0.1:5000'

]

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin ) {
      callback(null, true)
    } else {
      callback( new Error("CORS error"))
    }
  },
  
  optionsSuccessStatus: 200
}


module.exports = corsOptions


// **** we'll remove !origin in the if statement as well as the localhost url's from the whitelist before we run the app in production....

// ** inside the log file.... the req.headers.origin for localhost requests will still be undefined as localhost requests are not cross origin requests

