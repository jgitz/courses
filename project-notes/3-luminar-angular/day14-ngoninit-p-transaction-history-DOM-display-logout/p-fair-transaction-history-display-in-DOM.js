/* now we need to DISPLAY values STORED inside LOGGEDIN_TRANSACTION inside the TRANSACTION HISTORY HTML page....
 
....to do this we use STRUCTURAL DIRECTIVES *NGFOR inside <TR> inside <table body>

syntax : <tr *ngFor = "let loop_item of loggedin_transaction"; let serial_number = index (***** inbuilt function to display serial number STARTING FROM 0, 1, 2) >

<td>{{ serial_number + 1 }}</td>

<td>{{ loop_item.type }}</td>
<td>{{ loop_item.type + 1 }}</td>



*/
