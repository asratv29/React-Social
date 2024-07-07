import React from "react";

import Story from "../stories/Story";
import Navbar from "../navigation/Navbar";
import SIdeBar from "../sidebar/SIdeBar";
import Rsidebar from "../rsidebar/Rsidebar";

import CurrentUserData from "../../ApiJSON/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./chat.css";
export default function Chat() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="row d-flex">
        <div className="col-sm-3">
          <SIdeBar />
        </div>
        <div className="col-sm-6 pt-2 ">
          <div className="chat-box">
            <div className="chat-box-top">
              <img
                src={CurrentUserData.map((user) => user.ProfieImage)}
                alt="Profile Picture"
              />
              <div className="user-name">
                <h5>{CurrentUserData.map((user) => user.name)}</h5>
                <h6>{CurrentUserData.map((user) => user.username)}</h6>
              </div>
            </div>
            <div className="chat-box-text-container">
              <div className="chat-text-left-side">
                <p>Sender Text</p>
              </div>
              <div className="chat-text-right-side">
                <p>Current user Text</p>
              </div>
            </div>

            <div className="chat-box-bottom">
              <form action="">
                <input type="text" className="" placeholder="write somthing" />
                <button type="submit" className="btn btn-primary">
                  <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>
                <label htmlFor="CFIle" className="btn btn-primary">
                  <FontAwesomeIcon icon={faFileAlt} />
                  <input type="file" name="" id="CFile" />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <Rsidebar />
        </div>
      </div>
    </div>
  );
}
