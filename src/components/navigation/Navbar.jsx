import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faSearch,
  faUser,
  faBell,
  faBars,
  faFeed,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

import ToggleTheme from "../ToggleTheme";
import CurrentUser from "../../ApiJSON/CurrentUserData";

export default function Navbar() {
  return (
    
      <nav className="position-relative mb-5" style={{ width: "100vw" }}>
        <div className="nav-container">
          <div className="left-nav">
            <Link className="logo_" to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link className="logo_ mt-3" to="/">
              <p id="erhms">ERHMS</p>
            </Link>
            <Link to="/profile/id" id="current-user-icon">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/feed">
              <FontAwesomeIcon icon={faFeed} />
            </Link>
          </div>
          <div className="middle-nav">
            <FontAwesomeIcon id="search" icon={faSearch} />
            <input type="search" name="" id="" placeholder="Search..." />
          </div>
          <div className="right-nav mr-2">
            <Link to="/chat/id">
              <span className="nav-message">Messages</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
            <Link to="/chat/id">
              <FontAwesomeIcon icon={faBell} />
            </Link>
            <Link to="/chat/id">
              <ToggleTheme />
            </Link>
            <div className="user">
              <img
                src={CurrentUser.map((user) => user.ProfieImage)}
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />

              <h4>{CurrentUser && CurrentUser.map((user) => user.name)}</h4>
            </div>
          </div>
        </div>
      </nav>
    
  );
}
