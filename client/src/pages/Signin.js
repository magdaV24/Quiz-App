import "./Forms.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const checkPassword = (pass1, pass2) => {
    if (pass1 === pass2) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (checkPassword(password, confirm)) {
      try {
        const response = await axios
          .post("http://localhost:5000/server/auth/signin", {
            username: username,
            password: password,
          })
          .then((res) => {
            console.log("User was created!");
            return res;
          }).catch(err => console.log(err));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      setConfirm("");
      setPassword("");
      setUsername("");
    } else {
      alert("Passwords don't match!");
      setConfirm("");
      setPassword("");
    }
  };
  return (
    <div>
      <main>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <span>Create a new account!</span>
          <label>
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <span>Username</span>
          </label>
          <label>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span>Password</span>
          </label>
          <label>
            <input
              type="password"
              required
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
            />
            <span>Confirm password</span>
          </label>
          <small>
            If you are registered already, <Link to="/login">log in.</Link>{" "}
          </small>
          <button>Sign in!</button>
        </form>
      </main>
    </div>
  );
}
