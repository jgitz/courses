#include <iostream>
#include <math.h>

using namespace std; 

int main() {
  float a, b, c, root1, root2;

  cout << "Enter the constant a: ";
  cin >> a;

  cout << "Enter the constant b: ";
  cin >> b;

  cout << "Enter the constant c: ";
  cin >> c;

  root1 = (-b + sqrt((b*b) - (4*a*c))) / (2*a) ;

  root2 = (-b - sqrt((b*b) - (4*a*c))) / (2*a) ;

  cout << "The roots are:" << root1 << " and " << root2;

  return 0;

}




// ** to add space between 2 variables in cout.... use << " "

// ***** always use math.h or cmath header file if there is use of mathematical functions like sqrt().... if not used... then error occurs