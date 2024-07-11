#include <iostream>

using namespace std;

int main() {
  cout<<"Hello World" << endl;
  cout<< "End";
  return 0;
}

/* 

- #include <iostream>:. is the code that links header file from the compiler which has readymade codes like "cout"

    ** anything that starts with # is known as PREPROCESSOR DIRECTIVE... a pre processor directive has NO ; at the end of the code

- int main () {} : 

    - main() {} : is the main function that will get run when any cpp file is executed.....  {} is curly/flower bracket which denotes the function body of the main function.... inside the function body we write the business logic codes 

    - int: int (integer) is the datatype of the return value of a funtion.... every function in cpp should return a value

    - return 0; : here the value we chose to return is 0.... which is of int (integer) datatype

      ** even if we DON'T add return to a main function... it will work... because compiler ASSUMES return value to be 0 EXCLUSIVILY for main function ( WON'T WORK  with other functions)

- cout<<: 

    - cout: means console out..... this is a ready made code obtained from iostream.... this is used to display anything which comes after << in the terminal as output 

    - << : is called insertion operator

- using namespace std; : 

    - we use this line inorder to avoid the lengthy below line every  we write cout to output something in the terminal 

        std::cout<<"Hello World"

          - std: represent STANDARD NAMESPACE.... it is the name under which codes such as cout is grouped 

          - :: : is called SCOPE RESOLUTION

- << endl: is used to end the line and start displaying the next output in next line inside the console

 */


// ***** DON'T name your cpp file with a . in the file name.... it won't run.... for eg if your file name is 1.0.cpp.... it won't run

// ***** << endl WON'T WORK with cin.... it only works with COUT