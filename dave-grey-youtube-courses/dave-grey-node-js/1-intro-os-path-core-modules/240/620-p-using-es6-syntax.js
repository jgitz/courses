/* 

** Node Js uses COMMONJS syntax to IMPORT and EXPORT MODULES

*/

// to import os module of nodejs using es6 syntax 

const os = require("os"); /* 

    ** here require() is a nodejs method 

    ** "os" is the name of OPERATING SYSTEM MODULE.... it should be typed correctly 

    ** const os: can be named as any variable.... but the STANDARD is to use variable name of the IMPORTING MODULE.... here importing module is OS hence the variable name is os

*/

// now that we imported the os module.... we can use os methods like this 

  // to know the os TYPE/name 

    console.log(os.type()) // Windows_NT 

