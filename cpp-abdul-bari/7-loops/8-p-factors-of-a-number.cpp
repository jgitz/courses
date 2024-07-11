/* 
- display factors of a number given as input 

    - factors can be between 1 and the input number 

    - factors are the number that can divide the input number with remainder 0
 */

#include <iostream>

using namespace std;

int main() {
  int n; 
  cout << "Enter the number: ";
  cin >> n; 
  for(int i=1; i<=n; i++) {
    if (n % i == 0) {
      cout << i << " is the factor of " << n << endl;
    }
  }
  return 0;
}

/* 
Enter the number: 8
1 is the factor of 8
2 is the factor of 8
4 is the factor of 8
8 is the factor of 8
 */