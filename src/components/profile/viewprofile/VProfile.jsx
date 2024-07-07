import React from "react";

import Navbar from "../../navigation/Navbar";
import SIdeBar from "../../sidebar/SIdeBar";

import CurrentUser from "../../../ApiJSON/CurrentUserData";

import "./vp.css";

export default function VProfile() {
  return (
    <div className="main-container-vp">
      <Navbar />
      <div className="row d-flex  wrapper-container m-2">
        <div className="col-md-3 vp-left">
          <SIdeBar />
        </div>
        <div className="col-md-9 d-flex vp-right">
          <div className="vp-right-container mt-4">
            <div className="vp-profile-picture">
              {CurrentUser &&
                CurrentUser.map((user) => (
                  <img
                    src={user.ProfieImage}
                    alt="ProfilePicture"
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "10px",
                    }}
                  />
                ))}
              <p>Profile Picture</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
