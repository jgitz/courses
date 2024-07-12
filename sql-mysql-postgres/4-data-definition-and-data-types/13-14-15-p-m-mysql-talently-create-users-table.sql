CREATE TABLE users(
  full_name VARCHAR(200),
  yearly_salary INT,
  current_status ENUM('employed', 'self-employed', 'unemployed')
);

/* 
employer column will be made only after setting employer table as they both are related
 */ 
