/* 

- aim:

    - inside the users table

        - alter the full_name column with NOT NULL constraint

        - alter the current_status column with NOT NULL constraint

 */

-- MYSQL CODES

 ALTER TABLE users
 MODIFY COLUMN full_name VARCHAR(300) NOT NULL, /* **** refer the table structure for correct declared datatype */
 MODIFY COLUMN current_status ENUM('employed', 'self-employed', 'unemployed') /* **** refer the table structure for correct declared datatype */ NOT NULL;

-- ** multiple column alter statements can be separated by comma

-- ** now there'll be ERROR if we OMIT full_name and current_status in INSERT statement