#include <iostream>

using namespace std;

int main() {
  int FirstNumber, SecondNumber;

  cout << "Enter the first number: " << endl;
  cin >> FirstNumber;

  cout << "Enter the second number: " << endl;
  cin >> SecondNumber;

  if (FirstNumber > SecondNumber) {
    cout << "The greatest number is: " << FirstNumber;
    
  } else {
    cout << "The greatest number is: " << SecondNumber;
  }

  return 0;
}