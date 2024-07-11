const {format} = require("date-fns")
const {v4: uuid} = require("uuid")

const fsPromises = require("fs").promises
const fs = require("fs");
const path = require("path")

const logEventsAsync = async (details, detail_type) => {

  if (!fs.existsSync(path.join(__dirname, "logs"))) await fsPromises.mkdir(path.join(__dirname, "logs"))

  const id = uuid();
  const date = format(new Date(), "yyyy-MM-dd\t HH:mm:ss")

  await fsPromises.appendFile(path.join(
   __dirname, 
   "logs", detail_type == "error" ? "errorLogs.txt": "startUpLogs.txt" ),

   `\t${date}\t${id}\t${details}\n`

   )


}

module.exports = logEventsAsync
