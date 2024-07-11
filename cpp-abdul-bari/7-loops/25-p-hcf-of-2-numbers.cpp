/* o/p
- find the hcf of 2 numbers 

    - subtract the 2 numbers from the greatest to the smallest untill the subtraction gets equal value
 */

#include <iostream>
using namespace std;

int main() {
  int FirstNumber, SecondNumber, sub;

  cout << "Enter the first number: ";
  cin >> FirstNumber;

  cout << "Enter the second number: ";
  cin >> SecondNumber;

  while ( FirstNumber != SecondNumber) {
    if (FirstNumber > SecondNumber) {
      FirstNumber = FirstNumber - SecondNumber;
    } else if (SecondNumber > FirstNumber) {
      SecondNumber = SecondNumber - FirstNumber;
    } 
    }

  if (FirstNumber == SecondNumber) {
    cout << "HCF is : " << FirstNumber;
  }
  




  return 0;
}

/* o/p
Enter the first number: 30
Enter the second number: 21
HCF is : 3

Enter the first number: 21
Enter the second number: 35
HCF is : 7
 */