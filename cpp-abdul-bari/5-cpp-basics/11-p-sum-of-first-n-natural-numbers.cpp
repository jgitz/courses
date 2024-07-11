#include <iostream>

using namespace std;

int main() {
  int n, sum;

  cout << "Enter the value of n: ";
  cin >> n;
  sum = ((n - 1) * n ) / 2;

  cout << "The sum of first " << n << " natural numbers is: " << sum;

  return 0;

}