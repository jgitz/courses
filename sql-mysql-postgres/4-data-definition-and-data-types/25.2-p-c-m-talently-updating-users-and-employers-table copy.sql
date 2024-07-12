/* 
- aim :

    - in users table update datatype of full_name column to varchar(300)

    - in employers table.... change the column name company_salary to yearly_revenue

    - in employers table update the datatype of yearly_revenue (new column name) to float

 */

 -- MYSQL CODES 

ALTER TABLE users 
MODIFY full_name VARCHAR(300);

ALTER TABLE employers
RENAME COLUMN company_revenue TO yearly_revenue;

ALTER TABLE employers 
MODIFY yearly_revenue FLOAT;