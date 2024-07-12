/* 
- aim :

    - in users table update datatype of full_name column to varchar(300)

    - in employers table.... change the column name company_revenue to yearly_revenue

    - in employers table update the datatype of yearly_revenue (new column name) to float

 */

 -- POSTGRES CODES 

 ALTER TABLE users 
 ALTER COLUMN full_name SET DATA TYPE VARCHAR(300);

 ALTER TABLE employers
 RENAME COLUMN company_revenue TO yearly_revenue;

 ALTER TABLE employers
 ALTER COLUMN yearly_revenue SET DATA TYPE FLOAT;

