import "./Forms.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const input = {
    username: username,
    password: password,
  };

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
    } catch (error) {
      console.log(error);
    }
    setPassword("");
    setUsername("");
  };
  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <span>Log into your account!</span>
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
        <button>Sign in!</button>
      </form>
    </main>
  );
}
