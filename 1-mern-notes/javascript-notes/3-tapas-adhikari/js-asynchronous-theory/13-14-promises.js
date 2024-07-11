/* 

** link: https://www.youtube.com/watch?v=54dnv1ha3sw&list=PLIJrr73KDmRwNZAYsAmWV8HXrPju73emb&index=14

- PROMISE in client (CONSUMING PROMISE): is an UNDEFINED VALUE which will only get DEFINED as a result of an ASYNCHRONOUS OPERATION

    ** another definition: PROMISE is a placeholder OBJECT for a future value which is a result of an ASYNCHRONOUS OPERATION

- PROMISES in SERVER (PROMISE CREATION): is a method to handle asynchronous calls in js

      ....ie.... a consumer wants something to be done in js.....

      ..... promise enables us to get the output of the task (resolve) or reject the task due to some error (reject)....

- STATES of PROMISE: there are THREE STATES for a PROMISE 

    1) PENDING: when there is no action on a promise call from the client 

    2) FULFILLED/RESOLVED: when the promise call from the client is accepted by the server and RETURN RESPONSE VALUE or MESSAGE 

    3) REJECTED: when the promise call from the client is REJECTED by the server with an ERROR MESSAGE or value

    ** SETTLED PROMISE: is a promise which is either FULLFILLED or REJECTED

- SYNTAX to set promise in a SERVER: 

    const <promise_variable> = new Promise((resolve, reject) => {
      resolve(<message as string or>) OR reject(new Error("<error message>"))
    })

      ** here promise is created using PROMISE CONSTRUCTOR function 

      ** PROMISE CONSTRUCTOR FUNCTION: takes a function as ARGUMENT (EXECUTER FUNCTION).....

            ** EXECUTOR FUNCTION: takes 2 CALLBACK FUNCTIONS as ARGUMENTS 

                  1) response call back function: is used INSIDE the EXECUTOR BODY in the BELOW FORM to SEND THE RESPONSE VALUE if the PROMISE is FULFILLED/RESOLVED 

                      resolve(<value as string or data>)

                  2) reject callback function: is used INSIDE the EXECUTOR BODY in the BELOW FORM to send the ERROR VALUE or MESSAGE if the PROMISE is REJECTED 

                      reject(new Error(<value as string (message) or data>))

                          ** CONVENTION is to use ERROR object to send any ERROR message or data


                  ** resolve and reject are methods defined INTERNALLY by the javascript

- CLIENT SIDE OPERATIONS of promise

    ..... when a client sends a promise call to the server..... the server can reject or resolve the promise.... and send back RESPONSE VALUE or ERROR value BACK TO the CLIENT......

    ..... now the client can choose to do what with the RESPONSE VALUE or ERROR VALUE..... there are THREE METHODS in js.... that helps to HANDLE the RESPONSE VALUE for the promises 

          1) .THEN method: is chained to the promise call and is used to handle the FULFILLED STATE of a promise..... the .then method takes 

              - a CALLBACK FUNCTION as ARGUMENT..... this CALLBACK function has another ARGUMENT which holds the RESPONSE VALUE from the SERVER.... the call back function BODY can have any codes to do anything with the response value

              ** .then CHAINING: multiplt .then can be chained.... to use it like that .... the PRECEEDING .THEN should HAVE a RETURN VALUE..... which will be used by the SUCCEEDING then..

          2) .CATCH method: is chaned to the promise call and is used to handle the REJECTED STATE of a promise..... the .catch method takes 

              - a CALLBACK FUNCTION as ARGUMENT..... this CALLBACK function has ANOTHER ARGUMENT which holds the ERROR VALUE from the server..... the call back function BODY can have any codes to do anything with the response value

                  ** if the promise from the error side returns error using new Error constructor..... the use ERROR.MESSAGE as callback argument to get the ERROR VALUE

          3) .FINALLY method: is used to do ANY OTHER operations which DON'T relate to the RESPONSE VALUE from the SERVER..... the .FINALLY METHOD takes a 

              - a CALLBACK FUNCTION as ARGUMENT..... this CALLBACK FUNCTION has NO ARGUMENT..... the CALLBACK FUNCTION BODY.... will have CODES that you want to do

              ** usually .finally method will host the CLEAN UP CODES 

              ** .then and .catch can be CHAINED to a .finally method

            







      

*/

/* eg take this scenario: 

      .... there is a BOY (client)..... he is sending a PROPOSAL LETTER (PROMISE) to the girl friend .... the boy is waiting for the response..... and based on the response the boy decides to do 2 things 

          - if the girl ACCEPTS the proposal.... he'll say "LETS GET MARRIED"

          - if the girl REJECTS the proposal..... he'll say "HE IS GOING to SEMINARY"

      ..... there is a GIRL (server)..... her BRAIN (PROMISE CONSTRUCTOR function) is such that..... she'll 
      
          - ACCEPT THE PROPOSAL (RESOLVED/FULFILLED STATE): only if she gets DAIRY MILK with the proposal letter..... and RESPONDS "i love you" as value 

          - REJECTS THE PROPOSAL (REJECTED STATE): if she DON'T get DAIRY MILK with the proposal letter..... and gives ERROR MESSAGE "i hate you.... you don't have dairy milk"

*/

// gf (server)

function proposal(letter) {

  const proposal_response = new Promise((resolve, reject) => {
    if (letter === "dairy milk") {
      resolve("i love you")
    } else {
      reject(new Error("i hate you.... you didn't give me dairy milk"))
    }
  })

  return proposal_response
}

// boy friend (client)

proposal("kitkat")
.then((response) => {
  console.log({response});
  console.log("lets get married")
})
.catch((response) => {
  console.log(response.message);
  console.log("you rejected me.... I'm going to seminary")
}) /* o/p

    i hate you.... you didn't give me dairy milk
    you rejected me.... I'm going to seminary

*/

/* o/p if proposal("dairy milk") 

  { response: 'i love you' }
  lets get married

*/

