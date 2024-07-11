/* 

- find method: is an ARRAY method used to return FIRST array element VALUE that satisfies the CONDITION given in as a FUNCTION RETURN inside find ()

    SYNTAX: 

        <array>.find(function(<e>) {
          return <condition>
        })

          ** e is the array element which automatically gets fed into the function in loops

          ** the output is ARRAY ELEMENT that satisfies the conditon

*/

/* 

- find if there is an array element named 5 in the below array 

*/

const arr = [1, 2, 3, 4, 5];

const el =arr.find(function(e) {
  
  return e === 5;
}) 

console.log(el) // 5

// ** if the element is not found ... then the el variable will have value UNDEFINED