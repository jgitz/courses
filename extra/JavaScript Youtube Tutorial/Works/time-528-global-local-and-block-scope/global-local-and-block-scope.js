/* 
- in a javascript file codes can be written inside
    - {}
    - a function {}
    - inside a block {} : i.e inside if, switch, for while
    - outside {} or function or block

- global scope : any variable written outside {}, function or block can be accesses from anywhere inside the file

- local scope : variables declared inside a {} and function {} can only be used inside that local function or {}


*/

/*  keywords and scopes

- the three keywords for declaration of variables are LET, CONST and VAR

- VAR : anything declared with VAR has GLOBAL scope. the main disadvantage is that 
    - name collision: REUSE of a variable name declared using VAR can lead to problems

- LET and CONST : this is ES6 solution for name collision of VAR
    - any variable declared with LET or CONST is local to that {}, or function or block

    - advantage is we can reuse same variable name inside {}, function or block
*/

// https://www.digitalocean.com/community/tutorials/understanding-scope-in-javascript