const http = require("http"); /* 1 */
const path = require("path"); /* 1 */
const fsPromises = require("fs").promises; /* 1 */
const fs = require("fs");

const logEvents = require("./logEvents")
const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on("log", (details, detail_type) => logEvents(details, detail_type) )

const PORT = process.env.PORT || 5000; /* 1 */

const fileServeAsync = async (filePath, contentType, response) => {
  try {
    console.log("huhu");
    const rawData = await fsPromises.readFile(
      filePath, 
     !contentType.includes("image") ? "utf8" : "" 
     );

    

    // parse the json data into js object (there is no need for parsing in this project.... but it is a standard to parse .json file content into js object using JSON.parse())

    const data = contentType === "application/json" ? JSON.parse(rawData) : rawData;

    

    response.writeHead(
       filePath.includes("404.html")? 404: 200,
       { "content-type": contentType }
       );

    // ** send string for json object else send raw data
    response.end(contentType === "application/json" ? JSON.stringify(data) : rawData);
  } catch (error) {
    console.log(error);

    // 4 emit error logs to log file 
    myEmitter.emit("log", error, "error")

    response.statusCode = 500;
    response.end("Internal Server Error");
  }
};

const server = http.createServer((req, res) => {
  /* 1 */
  console.log("Hihi");
  // 4 emit server startup log event 
  myEmitter.emit("log", `${req.method}\t${req.url}`, "startUp")

  let extension_name_from_url = path.extname(req.url); /* 1 */

  let contentType;

  switch (extension_name_from_url /* 1 */) {
    case ".css":
      contentType = "text/css";
      break;

    case ".js":
      contentType = "text/javascript";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".txt":
      contentType = "text/plain";
      break;

    default:
      contentType = "text/html";
  }

  let filePath =
    req.url === "/" && contentType === "text/html" /* to serve the index.js */
      ? path.join(__dirname, "views", "index.html")
      : req.url.slice(-1) === "/" && contentType === "text/html" /* to serve the subdir index.js */
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html" /* to serve any other html files in views like 404 */
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url); /* to serve any other files in other path like data/data.json */

  req.url.slice(-1) !== "/" && !extension_name_from_url ? (filePath += ".html") : console.log("fa"); /*

    ... if we type the url in browser without the extension.... this line will add a .html to the file path

    */

  const file_exists_flag = fs.existsSync(filePath); /* will give true or false if file  exists or not */
  console.log("fileExists:", file_exists_flag);

  if (file_exists_flag) {
    res.writeHead(200, { "content-type": contentType });
    fileServeAsync(filePath, contentType, res);
  } else {
    console.log("file doesn't exist");
    console.log("parse: ", path.parse(filePath));

    /* redirect practice and setting 404 page */

    switch (path.parse(filePath).base) {
      case "old-page.html":
        console.log("google redirect");
        res.writeHead(301, { Location: "./new-page.html" });
        res.end();
        break;

      default:
        console.log("404");
        // 4 emit 404 message to error log file 
        myEmitter.emit("log", "error 404", "error")
        fileServeAsync(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }

  console.log(req.url);
  console.log(extension_name_from_url);
  console.log(contentType);
  console.log(path.parse(req.url));
  console.log(filePath);
}); /* 1 */

server.listen(PORT, () => {
  /* 1 */
  console.log("server running on port ", PORT);
}); /* 1 */


