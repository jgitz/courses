const bcrypt = require("bcrypt");
const path = require("path");
const fsPromises = require("fs").promises;

const usersDB = {
  users: require("../model/users.json"),

  setUser(data) {
    this.users = data;
  },
};

const registerUser = async (req, res) => {
  if (!req.body.username || !req.body.password)
   return res.status(400).json({ message: "username and password fields cannot be empty!" });

  try {
    // destructuring username and password from the request

    const { username, password } = req.body;

    console.log(username, password);

    // check for duplicate user in database

    const duplicate = usersDB.users.find((item) => item.username === username);

    if (duplicate) return res.status(409).send("<h1>user already exists</h1>"); // reporting conflict if the user already exists

    // encrypting password
    const encryptedPassword = await bcrypt.hash(password, 10);
    console.log(encryptedPassword);

    const new_user = {
      username: username,
      password: encryptedPassword,
    };

    usersDB.setUser([...usersDB.users, new_user]);

    await fsPromises.writeFile(path.join(__dirname, "..", "model", "users.json"), JSON.stringify(usersDB.users));

    console.log(usersDB.users); // check if user is registered

    res.status(201).sendFile(path.join(__dirname, "..", "model", "users.json"));

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {registerUser}; 

// ** convention: use named exports in controllers

// **** always add RETURN KEYWORD in CONDITIONAL IF STATEMENTS

// **** if your code involves with fsPromises writeFile method.... if the thunderclient request fails.... always check for content change on the file in which writeFile method is called

// **** when you use FSPROMISES WRITE-FILE method on A .JSON FILE.... always use JSON.STRINGIFY to convert the data we want to push as json string... else the data WON'T get pushed into the json file
