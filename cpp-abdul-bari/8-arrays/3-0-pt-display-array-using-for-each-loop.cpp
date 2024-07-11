/* 

- instead of for loop... FOR EACH loop can be used to display every element of the array using the following syntax 

    - SYNTAX: 

        for(<auto> <x>: <array name>) {
          cout << x << endl;
        }

         ** auto is a keyword that INHERITS the datatype of the ARRAY we need to display.... it can be USUALLY replaced with the datatype of the declared array 

         ** x is iteration variable.... just like i in the for loop... UNLIKE i which stores index nuber of the array... x STORES the ARRAY ITEM itself

         ** : is called in 

** ADVANTAGE of for each loop is that we DON'T need to specify ARRAY SIZE

***** for each WON'T work with POINTERS (later lectures)

 */

#include <iostream>

using namespace std; 

int main() {
  char A[5] = {'A', 'B', 'C' };

  for(auto x: A) {
    cout << x << " "; // A B C  
  } 
}