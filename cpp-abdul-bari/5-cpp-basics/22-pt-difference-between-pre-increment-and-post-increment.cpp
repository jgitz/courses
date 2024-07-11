#include<iostream>

using namespace std;

int main() {
  int a=0, b=1, x=0, y=1;

  a = b++; /* here value of b is taken as 1 and assigned to a... hence a = 1 and then only increment happens... so b = 2 */

  x = ++y; /*  increment has more PRECEDENCE than assignment.... hence first y gets incremented.... so y = 2.... then assignment happens i.e value of y is assigned to x.... so x = 2 */

  cout << "a and b is: " << a << " " << b << endl;
  cout << "x and y is: " << x << " " << y << endl;



  return 0;
}

// ** if assignment and pre increment operator comes side by side like this = ++ .... then the pre increment operator has MORE PRECEDENCE..

// ** relevance of pre and post increment/decrement comes when 2 operators are used in an expression..... here in the program assignment and increment operator are used in same line.... hence difference between pre and post increment/decrement operator is relevant
