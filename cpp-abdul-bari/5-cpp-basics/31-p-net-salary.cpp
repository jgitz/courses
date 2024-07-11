/* net salary formula

net salary = basic salary + (basic salary) * percentage of allowances - (basic salary * percentage of deductions)

inputs to the program are 

- basic salary 

- percentage of allowances 

- percentage of deductions

 */

#include <iostream>

using namespace std;

int main() {
  float BasicSalary, AllowancePercentage, DeductionPercentage, NetSalary;

  cout << "Enter the basic salary: ";
  cin >> BasicSalary ;

  cout << "Enter the percentage allowance: ";
  cin >> AllowancePercentage;

  cout << "Enter the percentage deduction: ";
  cin >> DeductionPercentage;

  NetSalary = BasicSalary + (BasicSalary * (AllowancePercentage/100)) - (BasicSalary * (DeductionPercentage/100));

  cout << "Net Salary is: " << NetSalary;

  return 0;



}