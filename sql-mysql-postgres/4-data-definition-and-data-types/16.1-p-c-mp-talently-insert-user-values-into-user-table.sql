/* insert a user with... full name, current status and yearly salary

** same command used in mysql and postgresql

 */

 INSERT INTO users (full_name, yearly_salary, current_status) VALUES ('Emmanuel Joseph', 888888, 'self-employed');

 INSERT INTO users (full_name, yearly_salary, current_status) VALUES ('Tom Jerry', 0, 'unemployed');

 INSERT INTO users (full_name, yearly_salary, current_status) VALUES ('Mickey Mouse', 10000, 'employed');

/* 

***** IGNORE MYSQL ERROR : cannot destructure name of undefined....

    ** data value will be inserted despit the above error in mysql

 */