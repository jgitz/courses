// to set current date to a variable

let current_date_variable = new Date()

console.log({current_date_variable}) // 2022-05-18T19:29:04.708Z

// to set any other dates

let arbitrary_date_variable = new Date("9/9/2009")

console.log({arbitrary_date_variable}) // 2009-09-08T18:30:00.000Z

// <date>.getDate() : to get calendar day

console.log(current_date_variable.getDate()) // 19 i.e calendar day

// <date>.getMonth() : to get the month in number (**** counting starts from 0 for january)

console.log(current_date_variable.getMonth()) // 4 ?? **** this represents MAY because, month count in js starts from 0

/* ***** month count in js starts from 0
    0 - january
    11 - december

*/

// <date>.getDay() : to get week day in numbers (**** counting of days starts from 0 for sunday)


console.log(current_date_variable.getDay()) // 4 **** i.e wednesday

 /* week day count in js starts from 0 
        0 - sunday
        6 - saturday
 
 
 */

// **** js never returns week day or month name in words... it returns it in numbers.... to make it in words first we need to create an array with days and numbers.... and then map it

// to get months in WORDS

const months_array = [ "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

console.log(months_array[current_date_variable.getMonth()]) // may

// to get week day in WORDS

const week_day_array = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

console.log(week_day_array[current_date_variable.getDay()]) // thursday

// <date>.getFullYear to get year 

console.log(current_date_variable.getFullYear()) // 2022