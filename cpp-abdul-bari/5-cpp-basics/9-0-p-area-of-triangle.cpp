#include <iostream>

using namespace std;

int main() {
  float base, height, area;

  cout << "Enter base: ";

  cin >> base;

  cout << "Enter the height: " ;

  cin >> height;

  area = (base * height) / 2;

  cout << "The area is: " << area;

  return 0;

}

// ** we used float for variables for base height and area because we want area in decimal values.