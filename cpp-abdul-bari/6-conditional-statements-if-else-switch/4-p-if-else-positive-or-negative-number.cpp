#include <iostream>

using namespace std;

int main() {
  int Number;

  cout << "Enter the Number: ";
  cin >> Number;

  if (Number > 0) {
    cout << "The entered number is positive" << endl;
  } else {
    
    if (Number == 0) {
      cout << "The entered number is 0!";
    } else {
      cout << "The entered number is negative";
    }

  }

  return 0;
}