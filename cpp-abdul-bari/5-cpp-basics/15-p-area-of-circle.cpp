#include <iostream>
#include <math.h>

using namespace std;

int main() {
  float radius, area;

  cout << "Enter the radius: ";

  cin >> radius;

  area = (3.1425f) * (radius * radius);

  cout << "The area of the circle is: " << area;

  return 0;
}

// ** 22/7 was used... area was not showing the decimal value because integer division will give only integer

// ** when type casting (float) 22/7 also didn't give the correct value