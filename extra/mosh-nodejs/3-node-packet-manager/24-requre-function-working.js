/* working of require function

we use require() to import libraries as well as files and core libraries into our project js files

*/

var alias = reqire("./file or package name")

/* 
when require funciton is called..

  - first the function checks if the argument is a core module... if not...

  - it checks if the argument starts with ./ ... if the argument starts with ./ it percieves the argument as file or folder.... it there is no ./ ... then

  - it assumes the argument as node module and looks for it inside node_modules folder

*/