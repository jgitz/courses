/* 
- aim:

      - inside users table add a new user with 

        - full_name = donald duck 

        - current_status = unemployed

        - yearly_salary = null (** because... the user is unemployed)

 */

 INSERT INTO users (full_name, /* omitted yearly_salary to set null value */ current_status) VALUES ('Donald Duck', /* omitten value for yearly_salary.... as it is not specified */ 'unemployed')

 