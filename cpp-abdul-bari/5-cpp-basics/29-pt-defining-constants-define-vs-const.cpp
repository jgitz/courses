/* 
theory: visit https://www.includehelp.com/cpp-tutorial/difference-between-const-and-define.aspx

- define: is a directive used to declare constant in preprocessorlevel

    ** the value of the defined macro CAN BE changed after using #undef to UNDEFINE the defined value and then use define to set new value 

    ** the macros defined using define is NOT SCOPE controlled.... i.e it is accessible from any where in the program

- const: is keyword use to set constant value for variables... it's value CANNOT be changed like in define

    ** const variables ARE SCOPE controlled.... it's usage can be limited to the function in which it is defined
 */

#include <iostream>

using namespace std;

#define chiefMinister "VS"

int main() {
  

  cout << chiefMinister << endl; // o/p: VS

  const string PrimeMinister = "Modi";
  cout << PrimeMinister << endl; // o/p: Modi

  #undef chiefMinister

  #define chiefMinister "Pinarayi"
  cout << chiefMinister << endl;// o/p: Pinarayi

  return 0;


}

// ***** DON'T add ; after any directive (eg #include, #define, #undef).... else error happens when cout with << endl of the directive


