/* 
- display the sum of all the elements of an array
 */

#include <iostream>
using namespace std;

int main() {
  int sum = 0;
  int A[] = {1, 2, 3, 4};

  for(auto x: A) {
    sum += x;
  }

  cout << sum; // 10

  return 0;
}

// ** this program can also be created using FOR LOOP 