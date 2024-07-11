/* 
- BINARY SEARCH: is a searching method which is faster than linear search

    ** linear search is O(n)
    ** binary search is O(logn)

- binary search logic: 

    ** the array ELEMENTS should be is a SORTED state to implement binary search 

    ** it has 3 components 

          1) low: set as A[0] of the array initially 
          
          2) high: set as A{max} of the array initially 

          3) mid : mid = (low + high) / 2 

    ** in binary search.... low and high value gets varied according to value of the mid 

        - if array[mid] > search element.... low is changed to mid + 1 and high remains unchanged 

        - if array[mid] < search element..... high is changed to mid - 1 and low remains unchanged 

        - if array[mid].... then element is found at that position (here low and high are equal)

        - if element is not found.... there comes a strange condition when low > high.... so the whole search have to run in a loop when low <= high

- write a program to search an element (key) from a sorted array
 */

#include <iostream>
using namespace std;

int main() {
  int Array[10] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};

  int key, low = 0, high = 9, mid;

  cout << "Enter the search element (key): ";
  cin >> key;

  while (low <= high) {
    mid = (high + low ) / 2;

    if (key == Array[mid]) {
      cout << "Element found at index number: " << mid;
      exit(0);
    } else if (key > Array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  cout << "Element not found in the Array!";

}

/* o/p

Enter the search element (key): 16
Element found at index number: 7

Enter the search element (key): 8
Element found at index number: 3

Enter the search element (key): 25 
Element not found in the Array!

 */