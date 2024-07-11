/* 
- write a program to test whether a number is an amstrong number

    - a number is an amstrong number if the sum of the cubes of the digit = the number 

        eg: in number 153

              1^3 + 5^3 + 3^3 = 153
 */

#include <iostream>
#include <math.h>
using namespace std;

int main() {
  int n, number, CubeSum = 0;

  cout << "Enter the number: ";
  cin >> n;

  number = n;

  if ( number == 0) {
    cout << "Not an amstrong number";
  } else {

    while (n !=0 ) {
      CubeSum += pow((n % 10), 3);
      n /= 10;
    } 
}

if (CubeSum == number) {
  cout << "The number is an amstrong number";
} else {
  cout << "The number is not an amstrong number";
}
return 0;
  }