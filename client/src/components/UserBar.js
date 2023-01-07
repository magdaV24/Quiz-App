import "./UserBar.css";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserBar() {
  const { currentUser } = useContext(AuthContext);

  const avatar =
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="userbar">
      <div>
        <img src={avatar} alt="logo" />
      </div>
      {currentUser && <p>{currentUser.username}</p>}
    </div>
  );
}
