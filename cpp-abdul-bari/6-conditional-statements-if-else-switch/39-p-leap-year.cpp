/*
- a leap year is divisible by 4
- if the entered year is a century (eg 1900, 200... etc).... it is DIVISIBLE by 100

- to find if CENTURY is a leap year....check whether it is divisible by 400
 */

#include <iostream>

using namespace std;

int main()
{
  int year;
  cout << "Enter the year: " << endl;
  cin >> year;

  if (year % 4 == 0)
  {

    if (year % 100 == 0)
    {
      if (year % 400 == 0)
      {
        cout << "The year " << year << " is a LEAP YEAR";
      }
      else
      {
        cout << "The year " << year << " is NOT a leap year";
      }
    }
    else
    {
      cout << "The year " << year << " is a LEAP YEAR";
    }
  }
  else
  {
    cout << "The year " << year << " is a NOT a leap year";
  }

  return 0;
}