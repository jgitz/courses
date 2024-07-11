/* 

- filter method: is an array method to filter all the elements which satisfies the CONDITION that is given in as FUNTION RETURN inside the filter() and MAKE A NEW ARRAY with the filtered values 

    ** creates NEW ARRAY with filtered values



*/

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.filter(function(e){
  return e > 4
})

console.log(newArr) // o/p: [ 5, 6, 7 ]