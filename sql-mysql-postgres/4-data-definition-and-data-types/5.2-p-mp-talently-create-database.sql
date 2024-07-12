/* 

- aim: to create new database named talently for the talently application

goto sqlTools icon.... select database connections and run this on both mysql and postgresql connections



 */

 CREATE DATABASE talently;

 /* 
 
 ***** each connecitons in sqlTools can ONLY connect to a SINGLE database at a time in each conneciton..... now the mysql connection has 2 databases (talently and default (created earlier))..... postgresql connection also has 2 databases (talently and postgres(created earlier)).... so....

    ** in both the connections.... edit the connection.... edit the database field to.... talently....

    ** after the above step.... every sql file will work on the talently database of the connections

  */