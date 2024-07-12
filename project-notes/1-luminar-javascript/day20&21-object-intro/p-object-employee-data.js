//q1) make an object of an employee data with employee id, name, salary

var employee_data = {
	     eid: 1000,
	     name: "Bheem",
	     salary: 30000,
		 experience: 3
	     
      
}

console.log("****q1 employee data****")
console.log(employee_data)

//q2) add a job property to the employee data

employee_data.job = "developer"

console.log("****q2 added a new job property to the employee data object****")
console.log(employee_data)

//q3) check if there is a property named "experience" in enployee data
console.log("****q3 checking presence of property named experience inside the object employee data****")

console.log("experience" in employee_data) // "" important

// q4) check if there is a property named experience inside the object. If yes, then incement it by 1 else add property named experience and guve value 0

if ("experience" in employee_data) {
	employee_data.experience+=1
}

else {
	
	employee_data.experience = 0 // ?? output is null
}

console.log(employee_data)


