import db from "../config/db.js";
import bcrypt from "bcrypt";
import { json } from "stream/consumers";
import jwt from "jsonwebtoken";

export const signin = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  const username = req.body.username;
  const password = req.body.password;

  db.query(q, username, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      return res
        .status(409)
        .json("A user with the same username already exists!");
    }

    // hashing the password

    let saltRounds = 10;
    const q = "INSERT INTO users (username, password) VALUES (?, ?)";

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw err;
      db.query(q, [username, hash], (err, result) => {
        if (err) throw err;
        res.send(
          "User was created and their credentials were sent to the database!"
        );
      });
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0)
      return res.status(404).json("User does not exist!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      result[0].password
    );

    if (!checkPassword) {
      return res.status(400).json("Wrong username/passwordd combination!")
    }
    
  const token = jwt.sign(
    {
      id: result[0].id,
    },
    "jwtkey"
  );

  const { password, ...other } = result[0];

  res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(other);
  });
};


export const logout = (req, res) => {
  res.clearCookie("access_token", {
    siteName: 'none',
    secure: true
  }).status(200).json("User has been successfully logged out!")
}