CREATE TYPE employment_status AS ENUM('employed', 'self-employed', 'unemployed'); /* 
 always declare custom type before using the table

 ***** ENUM is not a DEFAULT DATATYPE in POSTGRES
 */

CREATE TABLE users(
  full_name VARCHAR,
  yearly_salary INT, 
  current_status employment_status  /* enum used as custom type in POSTGRES  */
);