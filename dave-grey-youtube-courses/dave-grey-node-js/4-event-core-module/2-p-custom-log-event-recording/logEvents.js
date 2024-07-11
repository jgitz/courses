const fsPromises = require("fs").promises;
const path = require("path");

const { format } = require("date-fns");

const { v4: uuid } = require("uuid");

const { existsSync } = require("fs");

const logEvents = async (message) => {
  const date = format(new Date(), "yyyyMMdd\tHH:mm:ss");
  const id = uuid();
  const logData = `${id}\t${date}\t${message}\n`;

  console.log("now inside async logEvents()");
  try {
    if (!existsSync(path.join(__dirname, "log"))) {

      await fsPromises.mkdir(path.join(__dirname, "log"));
      console.log("log folder created");

    }

    await fsPromises.appendFile(path.join(__dirname, "./log/log.txt"), logData);
    console.log("log entered")
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
