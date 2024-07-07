import React from "react";

import CurrentUserData from "../../../ApiJSON/CurrentUserData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faShield,
  faThermometer,
} from "@fortawesome/free-solid-svg-icons";

import "../profile.css";
import { faAnchor } from "@fortawesome/free-solid-svg-icons/faAnchor";

export default function ProfileBottom() {
  return (
    <div className="profile-setting-bottom row d-flex ">
      <div className="profile-setting-bottom-left col-md-3">
        <ul className="d-flex p-5">
          <li>
            <a href="" className="d-flex align-items-center pb-3">
              <FontAwesomeIcon icon={faAnchor} />
              <span>Personal Information</span>
            </a>
          </li>
          <li>
            <a href="" className="d-flex align-items-center pb-3">
              <FontAwesomeIcon icon={faShield} />
              <span>Security</span>
            </a>
          </li>
          <li>
            <a href="" className="d-flex align-items-center pb-3">
              <FontAwesomeIcon icon={faLanguage} />
              <span>Language</span>
            </a>
          </li>
          <li>
            <a href="" className="d-flex align-items-center pb-3">
              <FontAwesomeIcon icon={faThermometer} />
              <span>Theme</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-setting-right col-md-7">
        <div className="general-info-title">
          <h3>General Information</h3>
        </div>
        <div className="profile-picture">
          <h5>Profile Picture</h5>
          <div className="profile-picture-info">
            <div className="profile-picture-img-and-name">
              {CurrentUserData &&
                CurrentUserData.map((user) => (
                  <img
                    src={user.ProfieImage}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                ))}
              <div className="pp-name-address">
                {CurrentUserData &&
                  CurrentUserData.map((user) => <h4>{user.name}</h4>)}
                {CurrentUserData &&
                  CurrentUserData.map((user) => <p>{user.addres}</p>)}
              </div>
              <div className="pp-control">
                <button type="submit" className="btn btn-primary">
                  Changes
                </button>
                <button type="submit" className="btn btn-primary">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-information-form p-3">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name=""
                  id="username"
                  placeholder="Username"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  name=""
                  id="Email"
                  value="Eample@email.com"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input
                  type="email"
                  name=""
                  id="PhoneNumber"
                  value="Eample@email.com"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="State">State</label>
                <input
                  type="email"
                  name=""
                  id="State"
                  value="Eample@email.com"
                  className="form-control"
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="Address">Address</label>
                <input
                  type="email"
                  name=""
                  id="Address"
                  value="Eample@email.com"
                  className="form-control"
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="City">City</label>
                <input
                  type="email"
                  name=""
                  id="City"
                  value="Eample@email.com"
                  className="form-control"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
