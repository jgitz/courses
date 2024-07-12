// given an array of covid data set in the order [district id number, district name, total covid patients, number of deaths, number of patients recovered, first dose percentage, second dose percentage ]

var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernakulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6]   
]

console.log("****the covid data array content is****")
console.log(covid_data)

// q1 higest test + ve case district

console.log("****district with high test positivity****")

let highest_positivity_value = covid_data.reduce((element1, element2) => element1[2] > element2[2] ? element1 : element2 )[2]

let check_same_positivity = covid_data.filter(element => element[2] == highest_positivity_value).map(element => [element[1], element[2]])

console.log(check_same_positivity)


// q2 district with higest 1 dose vaccination rate

console.log("****district with highest first dose****")

let highest_first_dose_value = covid_data.reduce((element1, element2) => element1[5] > element2[5] ? element1 : element2 )[5]

let check_same_first_dose = covid_data.filter(element => element[5] == highest_first_dose_value).map(element => [element[1], element[5]])

console.log(check_same_first_dose)



// q3 district with lowest death cases

// q4 sort district with +ve cases

console.log("****sorting in ascending order of positive cases****")

let sort_positive = covid_data.sort((element1,element2) => element2[2]-element1[2]).map(element => [element[1], element[2]])

console.log(sort_positive)



// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

console.log("****greater than 60k districts****")

let greater_60k = covid_data.filter(element => element[2] > 60000).map(element => [element[1], element[2]])

console.log(greater_60k)

// q7 print trissur details

console.log("****only thrissur details***")

let thrissur_details = covid_data.filter(element => element[1] == "thrissur")

console.log(thrissur_details)

// q8 total nu,ber of +ve cases

console.log("****total number of positive cases****")

let total_positive = covid_data.map( (element) => element[2]).reduce((element1, element2) => element1 + element2)

console.log(total_positive)

// q9 total number of cured cases

// q10 cured numbers of iduky

// q11 total number of death cases

// note: in some questions we use map before doing reduce. Another method is to do array.reduce((e1,e2) => (e1 + e2)[2],0) 

console.log("****checking alternate reduce method without map to check total death cases****")

var total_death = covid_data.reduce((e1, e2) => (e1 + e2)[2], 0)

console.log(total_death) //didn't work

