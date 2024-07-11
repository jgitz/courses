/* 

.... the size of datatype depends on the compiler.....

- SIZEOF operator: is used to know the size (in bytes) occupied by the datatypes 

    - SYNTAX: 

        sizeof(<datatype eg int, float>)

 */

#include <iostream>

using namespace std;

int main() {
  cout << sizeof(int) << endl; // 4
  cout << sizeof(bool) << endl; // 1 
  cout << sizeof(char) << endl; // 1
  cout << sizeof(long int) << endl; // 4
  cout << sizeof(unsigned int) << endl; // 4
  cout << sizeof(double) << endl; // 8
  cout << sizeof(unsigned char) << endl; // 1
}