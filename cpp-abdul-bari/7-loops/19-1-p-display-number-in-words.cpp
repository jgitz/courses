/* 
- display the input number in words

    - step 1:  reverse the number

    - step 2 : use %10

    - step 3: use /10

    - step 4: use switch case to display number in words 
 */

#include <iostream>

using namespace std; 

int main() {
  int n, remainder, reverse = 0;

  cout << "Enter the number: ";
  cin >> n;

  while (n != 0) {
    remainder = n % 10;
    n /= 10;
    reverse = reverse * 10 + remainder;
  }

  if ( reverse ) {

  while (reverse !=0) {
    remainder = reverse % 10;
    reverse /= 10;

    switch (remainder) {
      case 0: cout << "Zero "; break;
      case 1: cout << "One "; break;
      case 2: cout << "Two "; break;
      case 3: cout << "Three "; break;
      case 4: cout << "Four "; break;
      case 5: cout << "Five "; break;
      case 6: cout << "Six "; break;
      case 7: cout << "Seven "; break;
      case 8: cout << "Eight "; break;
      case 9: cout << "Nine "; break;
      default: cout << "Error "; break;
  }


    }
  }

  return 0;
}