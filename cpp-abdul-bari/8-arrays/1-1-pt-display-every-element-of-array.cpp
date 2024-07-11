/* 
- we can only display EVERY ELEMENT of an array using FOR LOOP
 */

#include <iostream>
using namespace std;

int main() {
  char A[4] = {'A', 'B', 'C', 'D'};

  // codes to DISPLAY EVERY element of an ARRAY

  for (int i = 0; i < 4; i++) {
    cout << A[i] << " "; // A B C D 
  }

  return 0;
}