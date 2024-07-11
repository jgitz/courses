#include <iostream>

using namespace std;

int main() {
  int Number;

  cout << "Enter a number: ";
  cin >> Number;

  if (Number == 0) {
    cout << "Zero is NEITHER odd nor EVEN";
  } else {

    if (Number % 2 == 0) {
      cout << "The number is EVEN";
    } else {
      cout << "The number is ODD";
    }
  }


  return 0;
}