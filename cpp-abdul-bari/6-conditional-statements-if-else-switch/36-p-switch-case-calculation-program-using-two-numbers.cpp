/* 
- write a program which takes 2 numbers.... and has options to add... subtract... multiply and divide the 2 numbers 
 */

#include <iostream>
#include <conio.h>

using namespace std;

int main() {

  int a, b, c;

  cout << "Enter first number: ";
  cin >> a;

  cout << "Enter second number: ";
  cin >> b;

  cout << "\nPress 1 for ADDITION: \n";
  cout << "Press 2 for SUBTRACTION: \n";
  cout << "Press 3 for MULTIPLICATION: \n";
  cout << "Press 4 for DIVISION: \n";

  int option;
  cin >> option;

  switch (option) {
    case 1: 
      c = a + b;
      cout << "The result is: " << c;
      break;

    case 2:
      c = a - b;
      cout << "The result is: " << c;
      break;

    case 3:
      c = a * b;
      cout << "The result is: " << c;
      break;

    case 4: 

      if (b != 0) {
         float c = (float) a / (float) b;
        cout << "The result is: " << c;
        
      } else {
        cout << " ERROR!! Dinominator b cannot be 0 \n";
      }

      break;
    
    default: 
      cout << "press valid option number";

    

  }


  _getch();
  return 0;
}