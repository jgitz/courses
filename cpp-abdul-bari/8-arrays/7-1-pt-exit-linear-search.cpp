/* 
- write codes to search for an array element.... and output the 
 */

#include <iostream>
using namespace std;

int main() {
  int Array[5] = {1, 2, 3, 4, 5}, key; // key means the element you want to search

  cout << "Enter the search element (key): ";
  cin >> key;

  for(int i = 0; i < 5; i++) {
    if (key == Array[i]) {
      cout << "Element found at index number: " << i; 
    exit(0); // ** exited  the program because we don't want to continue the program if element is found.... EXIT is NOT same as RETURN 
    }
  }

  cout << "Element not found in the array";

}

/* o/p

Enter the search element (key): 4
Element found at index number: 3

 */