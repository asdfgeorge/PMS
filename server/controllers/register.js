import pool from '../db/queries.js';
import bcrypt from 'bcrypt'

export const registerPost = (req, res) => {

    const fname = req.body.fname.toLowerCase().trim();
    const lname = req.body.lname.toLowerCase().trim();
    const gender = req.body.gender.toLowerCase().trim();
    const lisnum = req.body.lisnum.toLowerCase().trim();
    const email = req.body.email.toLowerCase().trim();
    
    bcrypt.hash(req.body.pword, 12, (error, result) => {
        
        pool.query(`INSERT INTO pms.USERS(fname, lname, gender, lisnum, email, pword) VALUES('${fname}','${lname}','${gender}','${lisnum}','${email}','${result}')`, (err, result) => {
            if (err) {
                console.log(error);
                res.status(500).send('User already exists');
            } else {
                res.status(201).send(`Account created at ${new Date}`)
            };
        });
    });
    
};