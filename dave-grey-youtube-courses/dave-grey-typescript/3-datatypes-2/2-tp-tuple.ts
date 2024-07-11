/* 

- TUPLE in OTHER PROGRAMMING LANGUAGES:

    - is a DATASTRUCTURE that allows you to store a COLLECTION OF DIFFERENT DATATYPES TOGETHER
    
    - IMMUTABLE: items stored in TUPLE DATA STRUCTURE CANNOT be changed UNLIKE that in array and object datatype

    - USECASE: mainly used to store RELATED VALUES of different datatypes into a single object 

      syntax of tuple in python 

        person = ('Teddy', 24, 'India')

- TUPLE IN TYPESCRIPT: 

    - TUPLE in typescript is an ARRAY with FIXED LENGTH and ORDER of ITEMS are IMPORTANT 

    - TUPLE in typescript is MUTABLE... i.e we can change the items with other items of same datatype

*/

// ** TUPLE IMPLEMENTATION in TS 

 let demo_tuple:[number, string, boolean] = [1, 'a', false] // ** the order in which items are assigned in array should be in ORDER of the DATATYPE specified in the TYPE SPECIFICATION 

 demo_tuple[3] = 'b' // ** CAN'T add a FOURTH element in tuple as we've designed our tuple to take only 3 elements

// ** reassigning values of a tuple 

 demo_tuple[2] = true;

 console.log(demo_tuple) // ** [ 1, 'a', true ] >>> the value at 2nd index is changed from false to true
