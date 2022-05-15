//import pool from '../db/queries.js';
import bcrypt from 'bcrypt'
import User from '../models/User.js'


export const loginPost = async (req, res) => {
    
    try {
          console.log('i like beans')
        // trim and make lowercase
          const email = req.body.email.toLowerCase().trim();
          const pword = req.body.pword;
  
          // check if this user already exists
          const user = await User.findOne({email: email});
          if (user === null) {
              return res.status(404).send(`User not found`)
          }
  
          // check if password is correct
          bcrypt.compare(pword, user.pword, (err, result) => {
              if (err) {
                console.log(err)
                return res.status(500).send(`Server error`);
              }
              else {
                  if (result) {
                    // return res.status(200).send(`User ${user._id} (${user.fname} ${user.lname}) logged in.`);
                    return res.status(200).json(user);
                  }
                  else {
                    return res.status(400).send(`Incorrect password!`)
                  }
              }

          });
  
      }

      catch(err) {
        console.log(err)
          return res.status(500).send(`Server error`);

           
      }
};