/* 
- direct looping on objects CANNOT be done because OBJECT is NOT an ITERABLE

- instead we can use OBJECT methods such as 

    ** Object.keys(<object>) : to loop over property keys

    ** Object.values(<object>): to loop over property value
    ** Object.Entries(<object>): to loop over KEY and VALUE

***** in all the three cases.... looping using for of loop happens because

        ** all the output of the above three returns an ARRAY

*/