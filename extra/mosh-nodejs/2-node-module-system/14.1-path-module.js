/* 
path module is a built in module to do operations on file path
*/



// to use path module in a file

  // 1) import path module using require()

       const path = require("path")

        // ** a single argument with no ./ inside the require() makes node to assume that it is a built in module..... if the argument has ./ it searches for the file
        
  // using parse function of path module

  const path_object = path.parse(__filename)

  console.log({path_object})

      /*  o/p : destructures the file path into root, base, extension and name
        {
  path_object: {
    root: 'C:\\',
    dir: 'C:\\run-time-folder\\courses\\extra\\mosh-nodejs\\2-node-module-system',
    base: '14.1-path-module.js',
    ext: '.js',
    name: '14.1-path-module'
  }
}
      */