/* 

- typedef: is a USER DEFINED datatype used to classify various variables into groups for improving readability of the code

 */

#include <iostream>

using namespace std;

typedef string name;
typedef int rollNo;
int main() {

 name x,y,z;
 rollNo r1, r2, r3;

 x = "Teddy";
 y = "Jerry";
 z = "Makan";

 r1 = 1;
 r2 = 2;
 r3 = 3;
//  r3 = "hihi"; // error: can't take string datatype when r3 is userdefined as a rollNo datatype of type int
  
 cout << x << endl; // o/p: Teddy
 cout << y << endl; // o/p: Jerry
 cout << z << endl; // o/p: Makan
 cout << r1 << endl;// o/p: 1
 cout << r2 << endl;// o/p: 2
 cout << r3 << endl;// o/p: 3

}