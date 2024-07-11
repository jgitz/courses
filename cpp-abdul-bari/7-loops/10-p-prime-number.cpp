/* 
- check if the input number is prime or not

    - a prime number has only 2 factors 1 and itself 
 */

#include <iostream>

using namespace std;

int main () {
  int n, count = 0;

  cout << "Enter the number: ";
  cin >> n;

  if ( n == 1 ) {
    cout << n << " is neither prime nor composite number";
  } else {

    for (int i = 1; i <= n; i ++) {

      if (n % i == 0) {
        count++;
      }

    }
  }

  if (count == 2) {
    cout << n << " is a prime number ";
  } else{
    cout << n << " is not a prime number ";
  }

  return 0;
}

/* o/p
Enter the number: 2
2 is a prime number

Enter the number: 8
8 is not a prime number
 */