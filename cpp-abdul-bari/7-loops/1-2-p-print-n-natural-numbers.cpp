/* 
- print n natural numbers (starting from 1).... by taking n as input
 */

#include <iostream>

using namespace std;

int main() {
  int n, i = 1;
  cout << "Enter the N value: ";
  cin >> n;

  

  while (i<=n) {
    cout << i << endl; 
    i++;

  }

  return 0;
}

// the same program can also be implemented in the do while loop with the very same condition 