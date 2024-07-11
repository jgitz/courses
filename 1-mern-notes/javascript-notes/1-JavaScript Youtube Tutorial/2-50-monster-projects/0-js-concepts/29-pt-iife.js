/* 

- IIFE (Immediately Invoked Function expression): is a SELF EXECUTING ANONYMOUS FUNCTION....


    - SYNTAX: 

        (function (<params>) {
          codes
        }) ();

            ***** invocation bracket is outside the wrapper bracket

            ** we can also assign IFFE to a FUNCTION EXPRESSION



*/

/* 

write a program with IIFE to console log your name 

*/

(function (name_param) {
  console.log(name_param)
}) ("Teddy");

/* o/p

Teddy

*/