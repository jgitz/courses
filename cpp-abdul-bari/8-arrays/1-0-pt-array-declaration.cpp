/* 

- Arrays: in c++ arrays are used to store a collection of data of SAME DATATYPE 

    ** array values are stored in spaces whose INDEX NUMBER starts from 0

    ** an array of mixed datatypes cannot be created in C++

- array declaration and initialization:

    - SYNTAX: 

        <datatype eg int, char, float> <Array name>[<size of array>] = {<item 1>, <item 2 >... etc}

            eg int A[3] = {1, 3, 3};

               char B[3] = {A, B, C};

               float C[3] = {1.1, 2.2, 3.3};

 */

#include <iostream>

using namespace std; 

int main() {
  int A[3] = {1, 2, 3};

  char B[3] = {'A', 'B', }; // ** no need to fill items upto the declared array size

  float C[3] = {1.1, 2.2, 3.3};

  int D[] = {1, 2, 3}; // ** can also declare array without specifying the array size

  cout << A[0] << endl; // 1
  cout << B[1] << endl; // B
  cout << C[2] << endl; // 3.3
  cout << D[1] << endl; // 2
  return 0;
}

// **** if there are more array items than the declared array size.... then error  

// **** ONLY method to DISPLAY all the element of an array is by USING FOR LOOP.... (next note)