/* 

- implement the FOLLOWING SCENARIO using FS PROMISES 

  ** SCENARIO: 

    1) read data from an existing file 

    2) use the read data to write a it to a new file 

    3) append some more data to the write file 

    4) rename the write file 


*/

const path = require("path");

// ** importing fs promises 

const fsPromises = require("fs").promises

// ** initialising an async function 

   const scenarioAsyncFunction = async () => {

     
     try {
       
      // ** reading data from the read file

        const data = await fsPromises.readFile(path.join(__dirname, "1-1-p-read-file.txt"), "utf8")
  
        console.log(data)
        console.log("*****reading finished*****")

      // ** writing the read data to a new file 

        await fsPromises.writeFile(path.join(__dirname, '1-2-p-write-file.txt'), `${data}\n`)

        console.log("****writing finished****")

      // ** appending a new line to the write file 

        await fsPromises.appendFile(path.join(__dirname, "1-2-p-write-file.txt"), "- this line was appended to the write file\n")

        console.log("****appending finished****")

      // ** renaming the write file 

        await fsPromises.rename(path.join(__dirname, "1-2-p-write-file.txt"), path.join(__dirname, "1-2-p-after-renaming-write-file.txt"))

        console.log("****renaming finished****")

        console.log("****scenario implemented**********")

      } catch (err) {
        console.error(err)
      }


   }

// ** calling the async function to execute the scenario 

   scenarioAsyncFunction()



// **** DON'T forget to use try catch block inside the async function 

// **** DON'T forget to use AWAIT keyword before ANY FS PROMISES METHOD

// **** DON'T forget to INVOKE/CALL the async function 

// **** DON'T forget to add \n while appending or writing a data into a file 

