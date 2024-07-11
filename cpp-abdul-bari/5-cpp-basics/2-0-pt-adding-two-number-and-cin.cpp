#include <iostream>

using namespace std;

int main() {
  int a, b, c;
  cout<< "Enter the two number: ";
  cin >> a >> b;
  c = a + b;

  cout<< "The sum is:" << c ;

  return 0;
}

/* 

- cin >> : is called console input.... this enablesto take inputs from the terminal 

    - >> : is known as extraction operator

- c = a + b : "=" is known as assignment operator..... i.e sum of "a + b" is assigned to the variable c


** for outputing or inputing multiple variables use << or >> after each operator instead of using comma 

 */

//**** always use ; at end of each code line.... else error