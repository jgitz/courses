// find maximum of 3 numbers taken as input 

#include <iostream>

using namespace std;

int main() {
  int first, second, third;

  cout << "Enter the first number: ";
  cin >> first;

  cout << "Enter the second number: ";
  cin >> second;

  cout << "Enter the third number: ";
  cin >> third;

  if (first > second && first > third) {
    cout << "The largest number is: " << first;

  } else if (second > third) {
    cout << "The largest number is: " << second;
  } else {
    cout << "The largest number is: " << third;
  }

  return 0;
}