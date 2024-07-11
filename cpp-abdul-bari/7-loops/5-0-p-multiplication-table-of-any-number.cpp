/* 
- print multiplication table of any number upto 10 multiples 
 */

#include <iostream>
using namespace std;

int main() {
  int n;

  cout << "Enter the Numeber: " ;

  cin >> n;

  cout << "The multiplication table is: \n";

  for ( int i = 1; i <= 10; i++) {
    
    cout << n << " x " << i << " = " << i * n << endl;
    

  }
}