/* 
- write a program to separate the digits of an input number and dispay it 

    - logic

        - to obtain the last digit... use % 10 operator on the number and the remainder will be the last digit 

            eg: 1724 % 10 = 4

        - to eliminate the last digit of a number.... use / 10 operator on an int datatype and the quotient will eliminate the last digit 

            eg: 1724 / 10 = 172 (only if 1724 is int)
 */

#include <iostream>
using namespace std; 

int main() {
  int n, quotient;

  cout << "Enter the Number: ";
  cin >> n;

  if (n / 10 == 0) { // to display single digit number 
    cout << n << endl;
  } else {

  while ( n != 0 ) {
    cout << n % 10 << endl;
    n /= 10;
  }
  }


  return 0;
}