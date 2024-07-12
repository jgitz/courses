/* create employers table with company name, company address and yearly revenue IN decimal with precision (total digits) of 5 and scale of 2.....and is hiring flag with boolean datatype */

CREATE TABLE employers (
  company_name VARCHAR(250),
  company_address VARCHAR(300), /* 
  later we split this to separate it into street name
   */
  company_revenue NUMERIC(5, 2), /* decimal with precision = 5 and scale = 2  */
  is_hiring BOOLEAN
);

/*

**** we can also use FLOAT(5,2) for approximate decimal revenue value in MYSQL

**** NUMERIC means we get EXACT decimal value and works on BOTH mysql and postgres

 */