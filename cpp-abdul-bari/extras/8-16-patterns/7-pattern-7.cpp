/* 
- print pattern 7

 */

#include <iostream>
using namespace std;

int main(){
  for(int i = 1; i <= 5; i++) {
    
    for(int j = 1; j <= 5; j++){
      

      if ( i + j <= 5) {
        cout << "  ";
      } else {
        cout << "* ";
      }
    }

    cout << endl;
  }
  return 0;
}

/* o/p

        * 
      * *
    * * *
  * * * *
* * * * *

 */

/* 
** method used: is find i, j pair of each cell and add them
 */
