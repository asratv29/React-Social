import React from "react";

import { Link } from "react-router-dom";

import Firends from "../../../ApiJSON/FirendReqData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Request.css";
import { faReply, faReplyAll } from "@fortawesome/free-solid-svg-icons";

export default function Request() {
  return (
    <div className="friend-request">
      <div className="request-top">
        <h4>Request</h4>
        <FontAwesomeIcon icon={faReply} />

        <FontAwesomeIcon icon={faReplyAll} />
      </div>
      <div className="border-request"></div>
      {Firends.map((request) => (
        <div className="request">
          <Link to="/profile/id">
            <div className="info" key={request.id}>
              <div className="user">
                <img
                  src={request.img}
                  alt=""
                  style={{ width: "50px", height: "55px", borderRadius: "50%" }}
                />
                <h5>{request.name}</h5>
              </div>
              <div className="info-name">
                <p>{request.info}</p>
              </div>
            </div>
          </Link>
          <div className="action">
            <button type="submit" className="btn btn-accept">
              Accept
            </button>
            <button type="submit" className="btn btn-decline">
              Decline
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
