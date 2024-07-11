/* 

- ARRAY's can be of different types 

    1) array with HOMOGENOUS TYPE of items 

    2) array with MIXED TYPE of items 

*/

// ** setting homogenous array 

let number_array: number[] = [1, 2, 3, 4] // ** only takes number as items

let alphabets_array: string[] = ['a', 'b', 'c', 'd'] // ** only takes string as items 

// ** setting mixed array 

let mixed_array: (string|number|boolean)[] = ['a', 1, true ] /* 

** only takes items of form STRING, NUMBER and boolean....it can be all strings alone, numbers alone and boolean alone too 

**** DONT FORGET BRACKETS around UNION in (string|number|boolean)

*/

let mixed_array_2: any[] = [1, 'a', false] // ** another way to create mixed array using all datatypes as items

