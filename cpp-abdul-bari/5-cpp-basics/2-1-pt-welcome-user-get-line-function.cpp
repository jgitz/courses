#include <iostream>

using namespace std;

int main() {

  string userName;
  cout<< "Enter your full name with space in between: ";

  
  // cin>> userName // ** commented because cin only takes the first word and ommit everything after space
  
  getline(cin, userName);

  /* 
  getline(cin, <string variable>) method: used instead of cin to get all multiple words stored in a variable 
   */
  
  cout<< "Welcome" << userName;

  return 0;
}