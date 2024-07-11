/* 

- enum : is a USER DEFINED data type used to store a collection of user defined values.... but the original values will be of integer codes

** this datatype is used to improve readability of your code

 */

#include <iostream>

using namespace std;

enum day {mon=1, tue, wed, thu, fri, sat, sun=1}; /* by default the first value starts with index number 0..... we can change it  */

int main() {

 day x,y,z;

 x = mon;
 y = sun;

 z = sat;

//  z = 0; // error: z is of day datatype.... it can only take values mon to sun....

  cout << x << endl; // o/p:  1
  cout << y << endl; // o/p: 1
  cout << z << endl; // o/p: 6
  
  return 0;
}

// ** we can assign same integer code to multiple enum values