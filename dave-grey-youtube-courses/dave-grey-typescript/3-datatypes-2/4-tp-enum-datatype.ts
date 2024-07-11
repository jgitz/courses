/* 

- ENUM DATATYPE: it allows you to define NAMED CONSTATS and associate NUMBER VALUES to it 

  ** number values starts from 0... UNLESS we assign numbers WITH = SIGN

  ** its NOT FOUND IN JAVASCRIPT... it is ADDED FEATURE in TYPESCRIPT

- convention 

  - enum datatype name should start in UPPERCASE

*/

// example 1 

enum Day {
  monday, 
  tuesday, 
  wednesday, 
  thursday, 
  friday, 
  saturday,
  sunday
}

const mon:Day = Day.monday
const tue:Day = Day.tuesday
const wed:Day = Day.wednesday
const thu:Day = Day.thursday
const fri:Day = Day.friday
const sat:Day = Day.saturday
const sun:Day = Day.sunday

console.log(mon, tue, wed, thu, fri, sat, sun) // 0 1 2 3 4 5 6

// example 2

enum Grade {
  A = 10, 
  B =9, 
  C,
  D
}

console.log(Grade.A, Grade.B, Grade.C, Grade.D) // 10, 9 , 10, 11