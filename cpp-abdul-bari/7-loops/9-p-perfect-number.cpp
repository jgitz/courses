/* 
- write a program to check if the input number is a perfect number 

    - if a number is perfect number... then the 

      sum of the factors = 2 * number 

        eg: 6 is a perfect number 

            ie.. factors of 6 is 1, 2, 3, 6.... sum of the factors is 12 and 2 * 6 = 12
 */

#include <iostream>
using namespace std; 

int main() {
  int n, SumOfFactors= 0; 

  cout << "Enter the Number: "; 
  cin >> n; 

  for (int i = 1; i <= n; i++) {
    if (n % i == 0) {
      SumOfFactors += i;
    }
  } 

  if ( (2 * n) == SumOfFactors) {
    cout << "The number " << n << " is a perfect number"; 
  } else {
    cout << "The number " << n << " is not a perfect number";
  }
  
}

/* o/p
Enter the Number: 28
The number 28 is a perfect number

Enter the Number: 6
The number 6 is a perfect number

Enter the Number: 496
The number 496 is a perfect number



 */