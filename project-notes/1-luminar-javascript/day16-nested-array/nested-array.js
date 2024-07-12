// We can store multiple arrays in a single array like this array = [a, b, c], [1, 2, 3], [dog, cat, elephant]
//.. to print 1 do array[1][0]
//.. to print elephant do array[2][2]

// Q1) In the given nested array, print only the student names

var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"john","testing",155,"mca"],
] 


for (let sub_array of students) {

    console.log(sub_array[1]);
}

// Q2) print all names of mearnstack students
console.log("The students studying mearnstack are:")

for (let sub_array of students) {
    if (sub_array[2] == "mearnstack") {
        console.log(sub_array[1]);
    }
}

// Q3) print all names with marks greater than 160

console.log("The students who have marks above 160");

for (let sub_array of students) {
    if (sub_array[3] > 160) {
        console.log(sub_array[1]);
    }
}

// Q4) print all students in django course who has mark greater than 168

console.log("The django students with marks greater than 168:"); 

for (let sub_array of students) {
    if (sub_array[2] == "django" && sub_array[3] > 168) {
        console.log(sub_array[1]);
    }
}

// Q5) Print the highest mark and the students name
console.log("The student with highest mark and his mark is:")

var mark = 0;
var student = "";

for (let sub_array of students) {

    if (sub_array[3] > mark) {
        mark = sub_array[3];
    }
    
    if (mark == sub_array[3]) {

        student = sub_array[1];
        
    }

}

console.log(student);
console.log(mark);
