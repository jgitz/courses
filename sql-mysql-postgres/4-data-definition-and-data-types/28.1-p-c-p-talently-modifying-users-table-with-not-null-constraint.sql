/* 

- aim:

    - inside the users table

        - alter the full_name column with NOT NULL constraint

        - alter the current_status column with NOT NULL constraint

 */

 -- POSTGRES CODES 

ALTER TABLE users
ALTER COLUMN full_name SET NOT NULL,
ALTER COLUMN current_status SET NOT NULL;

-- ** multiple column alter statements can be separated by comma

-- ** now there'll be ERROR if we OMIT full_name and current_status in INSERT statement