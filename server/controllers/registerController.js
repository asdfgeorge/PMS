import bcrypt from 'bcrypt'
import User from '../models/User.js'

export const registerPost = async (req, res) => {

    try {

      // trim and make lowercase
        const fname = req.body.fname.toLowerCase().trim();
        const lname = req.body.lname.toLowerCase().trim();
        const gender = req.body.gender.toLowerCase().trim();
        const lisnum = req.body.lisnum.toLowerCase().trim();
        const email = req.body.email.toLowerCase().trim();

        // check if this user already exists
        const userCheck = await User.findOne({email: email});
        if (userCheck != null) {
            return res.status(400).send(`User with this email already exists: ${email}`)
        }

        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.pword, salt);

        // new user object
        const newUser = new User({
            fname: fname,
            lname: lname,
            gender: gender,
            lisnum: lisnum,
            email: email,
            pword: hashedPassword
        });

        const user = await newUser.save();
        return res.status(201).send(`User ${user._id} (${fname} ${lname}) created.`);
    }
    
    catch(err) {
        return res.status(500).send(`Server error`);
    }
    
};