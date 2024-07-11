/* 

- QUERY SELECOR ALL : is a DOM method to select all elements with same class/id.... 

    ** OUTPUT of a querySelector all is NOT an array BUT a NODE LIST



    ** chaining ARRAY METHODS do not WORK on a NODE LIST

        **** but FOREACH WORKS on nodelist

    ** so to make ARRAY METHODs to work on NODE LIST.... we use ARRAY.FROM method on the QUERY SELECTOR ALL DOM METHOD

**** we can also create array from node list using SPREAD OPERATOR inside [].... but direct CHAINING of array method is not possible

*/