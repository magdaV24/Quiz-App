import "./UserBar.css";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPuzzlePiece,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function UserBar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="userbar">
      {currentUser && (
        <>
          <div className="column">
            <Link to="/user" target="_blank">
              <h2>{currentUser.username}</h2>
            </Link>

            <Link to="/game" className="link-wrapper" target="_blank">
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </Link>
            <Link to="/create" className="link-wrapper" target="_blank">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>

          <div onClick={logout} className="link-wrapper logout">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </>
      )}
    </div>
  );
}
