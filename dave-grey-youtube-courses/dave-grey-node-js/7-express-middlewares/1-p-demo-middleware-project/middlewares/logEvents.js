// 1.1

const path = require("path")
const fs = require("fs")
const fsPromises = require("fs").promises


const {format} = require("date-fns")
const {v4: uuid} = require("uuid")

const logEvents = async ( message, fileName) => {
  try {

    if (!fs.existsSync(path.join(__dirname, "..","log"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "log"))
    }

    const id = uuid()
    const date = format(new Date(), "yyyy-MM-dd\tHH:mm:ss")

    await fsPromises.appendFile(
      path.join(__dirname, "..", "log", `${fileName}`),

      `${date}\t${id}\t${message}\n`
      
      )

  } catch (error) {
    console.log(error)

    const id = uuid()
    const date = format("yyyy-MM-dd\tHH:mm:ss")

    await fsPromises.appendFile(path.join(__dirname, "..", "log", `${fileName}`), `${date}\t${id}\t${req_method}\t"client request error"\n` )
  }
}

const logger = (req, res, next) => {
  console.log(req.method, req.path)
  logEvents(
    `${req.method}\t${req.headers.origin}\t${req.path}`,
    "request-logs.txt"
  )

  next()
}

module.exports = {logger, logEvents}

// **** format() takes 2 arguments... don't forget the first new Date() argument