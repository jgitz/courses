1 folder structure update: make folders PUBLIC and MIDDLEWARE to hold static files and CUSTOM MIDDLWEARES

1.1 move css folder to public folder... move data.txt to public folder....move img folder to public folder.... download a test image into public/img/

2 install express

3 set home route to display index.html 
3.1 set /new-page route
3.2 set /old-page route with redirect to /new-page 
3.3 set app.all for any other routes to display 404.html

** at this point NO css will of 404.html and index.html will be displayed because we've not set public folder as static 

5 set public folder as static folder using express.static middleware... also inside the index.html and 404.html.... REMOVE THE RELATIVE PATH dots from the link tag in for the stylesheet

** now index.html and 404.html will display css styles

- try localhost:5000/data.txt >> will be displayed as we used static middleware to set public folder.... now any file stored in public folder is accessible from browser url

- try http://localhost:5000/img/test.webp >> test  image from public/img folder will be displayed as static is set

- try working of cors by doing a fetch from www.google.com


