/* 

- since set is iterable.... we can loop the set elements using FOR OF

*/

const number_set = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])

for (let set_item of number_set) console.log(set_item) /* 

1
2
3
4

*/