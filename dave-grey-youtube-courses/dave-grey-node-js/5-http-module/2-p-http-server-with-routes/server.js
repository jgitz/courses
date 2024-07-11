const http = require("http");
const path = require("path");
const fsPromises = require("fs").promises;

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("welcome to your website");
  }

  if (req.url == "/home") {
    const asyncFunction = async () => {
      try {
        const homePageData = await fsPromises.readFile(path.join(__dirname, "views", "home.html"));

        res.end(homePageData);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFunction();
  }

  if (req.url == "/image") {
    const asyncFunction = async () => {
      try {
        const homePageData = await fsPromises.readFile(path.join(__dirname, "images", "random-image.jpg"));

        res.end(homePageData);

      } catch (error) {
        console.log(error);
      }
    };

    asyncFunction();
  }

  if (req.url == "/pdf") {
    const asyncFunction = async () => {
      try {
        const homePageData = await fsPromises.readFile(path.join(__dirname, "documents", "dummy-pdf.pdf"));

        res.end(homePageData);

      } catch (error) {
        console.log(error);
      }
    };

    asyncFunction();
  }


});

server.listen(5000, () => {
  console.log("server running on port ", PORT);
});
