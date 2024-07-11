..... here there is a project folder with a folder structure.... we need to build a web server to display the files of this folder in browser

- views folder: has html pages that should be displayed 

- views/subdir: has html files to test to display pages in a subdirectory 

- css folder: to host css file used in html files 

- data folder: has 2 files with dummy data.. one is a txt file and other is a .json file 

- img foler : has image files used inside html views

- logEvents.js: is a custom made module to generate log files 


** goals:

  - to set following routes in backend and display the results in browser 

    - localhost:5000 >> should display the views/index.html
     
    - localhost:5000/subdir >> should display the views/subdir/index.html
     
    - localhost:5000/subdir/test.html >> should display views/subdir/test.html
     
    - localhost:5000/old-page >> should REDIRECT and display views/new-page.html.... ALSO the URL SHOULD CHANGE to localhost:5000/new-page.html
     
    - localhost:5000/<any random value> >> should display views/404.html
 
    - localhost:5000/data/data.json >> should display the data of data.json file in a SINGLE LINE STRING FORMAT with NO WHITESPACES

     

  - manually set log files to record changes in server and errors using CUSTOM LOG MODULE FILE
