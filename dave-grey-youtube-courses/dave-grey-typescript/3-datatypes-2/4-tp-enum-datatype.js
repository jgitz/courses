/*

- ENUM DATATYPE: it allows you to define NAMED CONSTATS and associate NUMBER VALUES to it

  ** number values starts from 0... UNLESS we assign numbers WITH = SIGN

  ** its NOT FOUND IN JAVASCRIPT... it is ADDED FEATURE in TYPESCRIPT

- convention

  - enum datatype name should start in UPPERCASE

*/
// example 1 
var Day;
(function (Day) {
    Day[Day["monday"] = 0] = "monday";
    Day[Day["tuesday"] = 1] = "tuesday";
    Day[Day["wednesday"] = 2] = "wednesday";
    Day[Day["thursday"] = 3] = "thursday";
    Day[Day["friday"] = 4] = "friday";
    Day[Day["saturday"] = 5] = "saturday";
    Day[Day["sunday"] = 6] = "sunday";
})(Day || (Day = {}));
var mon = Day.monday;
var tue = Day.tuesday;
var wed = Day.wednesday;
var thu = Day.thursday;
var fri = Day.friday;
var sat = Day.saturday;
var sun = Day.sunday;
console.log(mon, tue, wed, thu, fri, sat, sun); // 0 1 2 3 4 5 6
// example 2
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 10] = "A";
    Grade[Grade["B"] = 9] = "B";
    Grade[Grade["C"] = 10] = "C";
    Grade[Grade["D"] = 11] = "D";
})(Grade || (Grade = {}));
console.log(Grade.A, Grade.B, Grade.C, Grade.D); // 10, 9 , 10, 11
