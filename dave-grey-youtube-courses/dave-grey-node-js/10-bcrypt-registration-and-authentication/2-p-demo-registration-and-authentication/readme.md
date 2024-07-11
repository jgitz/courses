.... we create a demo app to for registration and authentication of users

.... here we use a dummy json file named users.json to store the registered users... it'll be stored in MODELS folder....

- packages used 

    - express
    - nodemon (dev dependency)
    - bcrypt

aim: 

- create /register route to register a user with username and password with thunder client 

  - in server password should be hashed using bcrypt and be stored inside users.json file 

  - both username and hashed password should be stored in users.json 

- create /auth route to login using a username and password from thunderclient

  - on server side... 

      - check if the user exists 

      - if user exists use bcrypt to compare the thunderclient password with that of hashed password in users.json