import db from '../config/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signin = (req, res) => {
    const query = 'SELECT * FROM users WHERE username = ?'
    const username = req.body.username
    const password = req.body.password
    
    db.query(query, username, (err, result) => {
        if(err) throw err
        if(result.length > 0){
            return res.status(409).json('A user with the same username already exists!')
        }

    // hashing the password

    const saltRounds = 10
    query = 'INSERT INTO users (username, password) VALUES (?, ?)'
    })

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) throw err
        db.query(query, [username, hash], (err, result) => {
            if(err) throw err
            res.send('User was created and their credentials were sent to the database!')
        })
    })
}