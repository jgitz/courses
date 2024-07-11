/* 
- write a program to find the factorial of a number 
 */

#include <iostream>
using namespace std;

int main() {
  int acc = 1, n; 

  cout << "Enter the number: ";
  cin >> n; 

  if ( n == 0 || n == 1) {
    cout << "The factorial is: " << acc;
  } else {
    for (int i = 1; i <= n ; i++) {
      acc *= i;
    }

    cout << "The factorial is: " << acc;
  }


  return 0;
}