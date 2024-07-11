/* 
- write program to fill the array by taking entries from the keyboard and display it 
 */

#include <iostream>
using namespace std;

int main() {
  int Array[5];

  // codes to take array entries from the keyboard 

  cout << "<<Enter 5 elements into the array>> \n"; 

  for (int i = 0; i < 5; i++) {
      cout << "Enter element No: " << (i + 1) << ": " ;
      cin >> Array[i];
  }

  // codes to display the whole array elements

  cout << "<< Displaying the array >>" << endl;

  cout << "[ ";

  for (auto x: Array) {
    cout << x << ", " ;
  }

  cout << "]";

 return 0;
}

/*o/p

<<Enter 5 elements into the array>> 
Enter element No: 1: 1
Enter element No: 2: 2
Enter element No: 3: 3
Enter element No: 4: 4
Enter element No: 5: 4
<< Displaying the array >>
[ 1, 2, 3, 4, 4, ]

  */