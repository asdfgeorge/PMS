import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const logout = async (req, res) => {
    
    try {
        return res.status(200).send(`Logged user out.`)

      }
      catch(err) {
          return res.status(500).send(`Server error`);
      }
};