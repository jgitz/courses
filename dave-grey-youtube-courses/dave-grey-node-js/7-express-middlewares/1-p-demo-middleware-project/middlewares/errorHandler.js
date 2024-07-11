const {logEvents} = require('../middlewares/logEvents') // 1-3

const errorHandler = (err, req, res, next) => {
  logEvents(`${err.name}: ${err.message}`, 'errorLogs.txt')
  console.log(err.stack)

  res.status(500).send(err.message)


}

module.exports = errorHandler;