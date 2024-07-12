/* 
.... create conversations table with 

    - user_name
    - employer_name
    - message 
    - date_sent of datatype time stamp
 */

 CREATE TABLE conversations (
    user_name VARCHAR(200),
    employer_name VARCHAR(250),
    message TEXT,
    date_sent TIMESTAMP
 );