const bcrypt = require('bcrypt')

const usersDB = {
  users: require('../model/users.json')
}
const authenticateUser = async (req, res) => {

  const {username, password} = req.body

  // if forgot to enter username or password 

  if(!username || !password) return res.status(400).json({"message": "username and password cannot be empty"}) 

  const userFound = usersDB.users.find((item) => item.username === username)
  console.log({userFound})
// check if username exists
  if (!userFound) return res.status(401).json({"message": "user not found"})

  try {
    // check if the password equals the user's password in the database 

    const encrypted_password = userFound.password 

    // compare the passwords 

    const passwordMatch = await bcrypt.compare(password, encrypted_password)

    // login success if the passwords match 

    if (passwordMatch) {
      
      // ** JWT CODES HERE (next lesson)
      console.log("login success to user", userFound)
      res.status(200).json({"message": `login success! Welcome user ${userFound.username}`})
    } else {
      console.log("Wrong password!!.. authentication failed")
      res.status(401).json({"message": "Wrong password!!.. authentication failed"})
    }



  } catch(err) {
    res.status(500).json({"message": "Internal server error"})
  }

  
}

module.exports = {authenticateUser}

// ** convention: use named exports in controller

// ** async and await is used with bcrypt