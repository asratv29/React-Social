import React from "react";
import Navbar from "../navigation/Navbar";
import SIdeBar from "../sidebar/SIdeBar";

import "./profile.css";
import ProfileTop from "./profile-component/ProfileTop";
import ProfileBottom from "./profile-component/ProfileBottom";

export default function Profile() {
  return (
    <div className="position-relative">
      <div className="container-fluid mt-5 position-relative">
        <Navbar />
        <div className="row d-flex justify-content-center position-relative">
          <div className="col-md-3" id=" position-stikey-profile-sidebar">
            <SIdeBar />
          </div>
          <div className="col-md-9 profile-bkg mt-5">
            <div className="row d-flex jusitfy-content-center align-items-center">
              <ProfileTop />
              <ProfileBottom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
