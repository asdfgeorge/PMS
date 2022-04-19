import pool from '../db/queries.js';
import bcrypt from 'bcrypt'

export const loginPost = (req, res) => {
    
    const email = req.body.email.toLowerCase().trim();
    const pword = req.body.pword;

    pool.query(`SELECT * FROM pms.USERS WHERE EMAIL='${email}'`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500);
        };
        
        if (result.rows.length === 1) {
            
            const user = result.rows[0];

            bcrypt.compare(pword, user.pword, (err, result) => {

                if (err) {
                    console.log(err);
                    res.status(500).send('Error');
                
                } else {
                    if (result) {
                        res.status(200).send(`correct password for user ${user.fname} ${user.lname}`);
                    } else {
                        res.status(400).send('Incorrect password');
                    };
                };
            });        
           
        } else {
            res.status(404).send('User not found');
        };

    });
};