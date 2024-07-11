/* 
- check if the input number is paliandrome

    - step 1: store entered number in a temporary variable 

    - step 2: reverse the number using reversing logic 

    - logic: number is paliandrome if the number == reversed number 
 */

#include <iostream>
using namespace std;

int main() {
  int n, temp, remainder, reverse = 0;

  cout << "Enter the number: ";
  cin >> n;

  temp = n; 

  while(temp != 0) {
    remainder = temp % 10;
    temp = temp / 10;

    reverse = reverse * 10 + remainder;
  }

  if (n == reverse) {
    cout << "Paliandrome!!";
  } else {
    cout << "Not paliandrome!!";
  }

  return 0;
}

/* o/p
Enter the number: 1221
Paliandrome!!
 */