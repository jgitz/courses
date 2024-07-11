const data = {
  employees: require("../model/employees.json"),

  setEmployee(data) {
    this.employees = data
  },
};

const getEmployees = (req, res) => {
  res.json(data.employees);
};

const postEmployee = (req, res) => {
  
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400).send("First Name and Last Name cannot be empty");
  }
  
  const id = data.employees.length + 1; // createing id for new employee

  const new_employee = {}
  
  new_employee.id = id; // setting id property to new employee
  new_employee.firstName = req.body.firstName // setting first name of the new employee
  new_employee.lastName = req.body.lastName // setting last name of the new employee


  data.setEmployee([...data.employees, new_employee]);

  res.json(data.employees);
};


module.exports = {
  getEmployees,
  postEmployee,
};

// ** always use NAMED EXPORTS in CONTROLLERS

