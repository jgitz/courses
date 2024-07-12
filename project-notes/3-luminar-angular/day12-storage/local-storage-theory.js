/* we need storage to store data permanently */

/* +++++++++++LOCAL STORAGE: 
- storage inside our browser
- approximately 5MB storage
- data is stored as KEY and VALUE
- **** both KEY and VALUE are stored as STRING
- data stored is PERMANENTLY stored untill it is cleared from LOCAL STORAGE


**** so we need to store all the data that gets WIPED out on BROWSER REFRESH
**** EG: in BANK APP, we need to create FUNCTION inside DATABASE SERVICE TS FILE to store DATA such as BANK DATABASE, NEWLY REGISTERED USER, WELCOME USERNAME etc inside LOCAL STORAGE



*/

// **** WHAT IS CALL BY REFERENCE: inside A CLASS we use THIS. to call VARIABLES which are PROPERTY of the CLASS i.e we call it by its LOCATION and NOT by its VALUE



/* +++++++++++ LOCAL STORAGE METHODS

1) to store key and value in LS: localStorage.setItem("key","value")....**** both key and value SHOULD BE STRING****
....*****if the VALUE is VARIABLE use METHOD.... JSON.STRINGFY(VARIABLE)....
..... eg : localStorage.setItem("key", JSON.stringify(<VARIABLE NAME>))....

2) to get value of a key which is stored in LS: localStorage.getItem("key")







 */