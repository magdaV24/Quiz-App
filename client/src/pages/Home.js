import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <div className="home-wrapper">
        <span>Create an account or log in and let the fun begin!</span>
        <Link to="/signin" className="link" target="_blank">
          Sign in
        </Link>
        <Link to="/login" className="link" target="_blank">
          Log in
        </Link>
      </div>
    </main>
  );
}
