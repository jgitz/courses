var target = new GlideRecord('x_1087301_uniacces_application'); // give the table name as parameter
target.orderBy('number'); // give the column variable name as parameter
target.setLimit('5'); // set limit for number of records to be displayed 
target.query(); // query ??

while(target.next()) {
 gs.info(target.getValue('number')); // what to do on each queried record.... here the .getvalue method is used obtain the values of the TABLE COLUMN named NUMBER
}

/* O/P: 

x_1087301_uniacces: APP0001022
x_1087301_uniacces: APP0001023
x_1087301_uniacces: APP0001024
x_1087301_uniacces: APP0001025
x_1087301_uniacces: APP0001026

*/

// ******** EXTRA METHODS **************** 

/* 

- <target>.get() METHOD: 

  ** SYNTAX: 

    - target.get('<sys_id ... eg 964c9e59dfd9734 >')

      ** the above code is equivalent to the following TWO LINES: 

        <target>.addQuery('sys_id', '<sys_id value.. eg 9gfsgos97dfdsf>')

        target.query()

    - another syntax 

      target.get('<field name.. eg number>', '<application number.. eg APP1002>')

-


*/

/* 

var application_record = new GlideRecord('x_1087301_uniacces_application');
application_record.orderBy('number'); 
application_record.setLimit('5'); 
application_record.query();

while(application_record.next()) {
 gs.info('Application Number:' + application_record.getValue('number'));
 gs.info('Applicant Name:' + application_record.getValue('name'));
 gs.info('Program:' + application_record.getValue('programs'));
 gs.info('Program Specialization:' + application_record.getValue('program_specialization'));
 gs.info('\n')
}
 

}


*/