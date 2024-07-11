/* 

- FUCNTIONS in typescript is defined in the following syntax 

  - function with function keyword syntax 

    function <function_name> (<param1>: type, <param2>: type) : return_type {

    }

  - function syntax for arrow function: 

    let <> = (param1: type, param2: type) : return_type => {

    }

  **** the TYPE of the RETURN VALUE is set AFTER THE BRACKETS and NOT after the FUNCTION NAME 

  **** if there is a function which RETURNS NOTHING.... RETURN TYPE should be set to VOID TYPE 

*/

// eg function with function keyword

function sum (num1:number, num2:number ) : number {
  return num1 + num2;
}

console.log(sum(1, 2)); // o/p: 3 

// eg function as arrow function 

let subtract = (num1: number, num2: number): number => {
  return num1 - num2;
}; 

console.log(subtract(3, 5)); //o/p: -2

// eg function with VOID RETURN 

function log_message(message:string): void {
  console.log( `message: ${message}`);
};

log_message('hi'); // o/p: message: hi 

 

