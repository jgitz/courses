/* 
- reverse a number given as input

    - step 1: do %10  to get digits individually as remainder

    - step 2 : do /10 to eliminate last digit of the number
    
    - step 3:  logic: reverse = reverse * 10 + remainder
 */

#include <iostream>

using namespace std;

int main() {
  int n, remainder, reverse = 0;

  cout << "Enter the number: ";
  cin >> n;

  while(n != 0) {
    remainder = n % 10;
    reverse = (reverse * 10) + remainder;
    n /= 10;
  }

  cout << "Reversed number: " << reverse;

  return 0;
}

/* o/p

Enter the number: 123
Reversed number: 321

 */