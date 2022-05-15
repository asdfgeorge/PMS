//import pool from '../db/queries.js';
import bcrypt from 'bcrypt'
import User from '../models/User.js'
import Booking from '../models/Booking.js'
import Message from '../models/Message.js'

// index users
export const getAllUsers = async (req, res) => {
    console.log('I dO geOgrapHy')
    try { 
        // get all users
        const users = await User.find();
            return res.status(200).json(users);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}

// show single user
export const getUser = async (req, res) => {

    try { 
        // get single user
        const user = await User.findById(req.params.id);
        if (!user) {return res.status(404).send("User not found.")}
        return res.status(200).json(user);
    }
    catch(err) {
        return res.status(500).json(err);
    } 
}

// update user
export const editUser = async (req, res) => {

    try {
        /// validation... need user sessions
        const validation = true;
        if (!validation) { return res.status(401).send(`Unauthorised`)}

        // check if this user id exists
        const idCheck = await User.findOne({_id: req.params.id});
        if (idCheck === null) {
        return res.status(404).send(`User not found`)
        }

        // trim and make lowercase
        const fname = req.body.fname.toLowerCase().trim();
        const lname = req.body.lname.toLowerCase().trim();
        const gender = req.body.gender.toLowerCase().trim();
        const lisnum = req.body.lisnum.toLowerCase().trim();
        const email = req.body.email.toLowerCase().trim();
        
        // if email is included in the request, check if the desired email isn't already taken
        if (req.body.email) {
            const emailCheck = await User.findOne({email: email});
            if (emailCheck !== null) {
                if (emailCheck.id !== idCheck.id) {
                    return res.status(400).send(`A user already has this email`)
                }
            }
        }

        // if pword is included in request, hash it first
        if(req.body.pword) {
            // hashing password
            const salt = await bcrypt.genSalt(10);
            req.body.pword = await bcrypt.hash(req.body.pword, salt);
        }

          // update user object
          await User.findByIdAndUpdate( req.params.id, {
            fname: fname,
            lname: lname,
            gender: gender,
            lisnum: lisnum,
            email: email,
            pword: req.body.pword
          })

          const updatedUser = await User.findOne({ _id: req.params.id})
          //console.log(idCheck, updatedUser);
         
          return res.status(201).send(`User ${req.params.id} (${fname} ${lname}) updated.`);
      }
      
      catch(err) {
          return res.status(500).json(err);
      }
      
};

// delete user
export const deleteUser = async (req, res) => {

    try {

        /// validation... need user sessions
        const validation = true;
        if (!validation) { return res.status(401).send(`Unauthorised`)}
        
        // find the user
        const userCheck = await User.findOne({
            _id: req.params.id
        });
        if (!userCheck) {
            return res.status(404).json({msg: `Cannot find user: ${req.params.id}`});
        }

        // TODO: uncomment when implemented these classes
        //await Message.deleteMany({ fromUserId: req.params.id });
        //await Message.deleteMany({ toUserId: req.params.id });
        //await Booking.deleteMany({ RequestByUserId: req.params.id });

        // delele user
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({msg: `User deleted: ${req.params.id}`, deletedUser});
    }
    catch(err) {
        res.status(500).json({msg: `sever error: ${err}`});
    }
}