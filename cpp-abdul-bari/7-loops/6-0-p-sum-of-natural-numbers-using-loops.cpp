/* 
- write a program to find the sum of n natural numbers without using formula and by only using loop
 */

#include <iostream>

using namespace std;

int main() {
  int n ;

  cout << "Enter the N value: ";
  cin >> n;
  
  int sum = 0;

  for (int i = 1; i <=n; i++) {
    sum += i;
    // cout << sum << endl;
  }

  cout << "The sum is: " << sum;
  return 0;
}