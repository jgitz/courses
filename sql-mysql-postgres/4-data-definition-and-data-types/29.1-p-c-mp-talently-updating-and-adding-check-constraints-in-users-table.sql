/* 

- aim:

    - inside users table

        - update all the users with yearly_salary = 0 to yearly_salary = null 

        - add a CHECK constraint with condition yearly_salary > 0 with CUSTOM CONSTRAINT NAME yearly_salary_positive

**** task 1 should be done before task 2 because task 2 won't work if the existing records don't obey task 1 check condition

 */

-- BOTH MYSQL and POSTGRES 

UPDATE users
SET yearly_salary = NULL
WHERE full_name = 'Tom Jerry';

ALTER TABLE users
ADD CONSTRAINT yearly_salary_positive CHECK (yearly_salary > 0)

-- ** Tom Jerry was the only person in the records with a salary = 0 so if we didn't set that to NULL task 2 won't run

-- ** now yearly_salary column will only allow data values greater than 0 to be inserted 