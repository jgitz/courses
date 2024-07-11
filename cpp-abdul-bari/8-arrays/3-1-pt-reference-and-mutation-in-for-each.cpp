/* 

- any change of element inside FOR EACH loop WON'T change original value of the array

- REFERENCE: if we want to change the original value of the array from the INSIDE of the FOR EACH.... we need to preceed & sign before X

 */

#include <iostream>
using namespace std;

int main() {
  int A[] = {1};
  cout << A[0] << endl; // 1 original value

  for(auto x: A) {
    cout << ++x << endl; // 2 
  }

  cout << A[0] << endl; // 1 no mutation 

  // using reference to check mutation

  for (auto &x: A) /* & operator is used for adding reference */ {
    cout << ++x << endl; // 2
  }

  cout << A[0]; // 2 mutated the original array value

  return 0; 
}