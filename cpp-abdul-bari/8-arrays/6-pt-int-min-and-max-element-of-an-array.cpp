/* 
- write a program to find the highest integer of an array
 */

#include <iostream>
using namespace std;

int main() {
  int max = INT_MIN; // **** 0 is substituted with INT_MIN (built in constant) because..... if EVERY element of the array is NEGATIVE.... then the OUTPUT will become 0 IF max = 0 is used
  int A[] = {-1, 3, 0};

  for(int i = 0; i < 3; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  cout << "The greatest element is: " << max; // 3

  return 0;
}