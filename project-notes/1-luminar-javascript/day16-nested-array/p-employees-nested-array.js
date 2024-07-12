var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"Ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],


]
// q6 print  second highest salary 
var salary_sort_array = [];
console.log("The second highest salary is:") 
for (let sub_array of employees) {
 salary_sort_array.push(sub_array[2]);
}
salary_sort_array.sort( (n1, n2) => n1 - n2 ) 

console.log(salary_sort_array[salary_sort_array.length - 2]);
// q7 minimum salary

console.log("The minimum salary is:")

console.log(salary_sort_array[0]);

// q8 number of employees 

console.log("The total number of employees is:")

console.log(salary_sort_array.length)
// q9 highest salary amoung developers
console.log("The highest salary among developers and his name")
var developer_highest_salary = 0;
var employee_name = "";
for (let sub_array of employees) {
    if (sub_array[3] == "developer") {
        if (sub_array[2] > developer_highest_salary) {
            developer_highest_salary = sub_array[2];
        }
    }

    if (sub_array[3] == "developer" && sub_array[2] == developer_highest_salary) {
        employee_name = sub_array[1];
    }
}

console.log(employee_name);
console.log(developer_highest_salary);
// q10 print details of employees whose name start with A

console.log("All employees name starting with A/a: ");
for (let sub_array of employees) {
    if (sub_array[1][0] == "a" || sub_array[1][0] == "A")
    console.log(sub_array[1]);
}
// q11 print details of employees who were working int period of 2010 to 2015

console.log("Employees who worked for 2010 to 2015:")

for (let sub_array of employees) {
    if (sub_array[4] == 2010 && sub_array[5] == 2015) {
        console.log(sub_array[1]);
    }
}
