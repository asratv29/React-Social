import React from "react";

import "../profile.css"
export default function ProfileTop() {
  return (
    <>
      <div className="profile-setting">
        <div className="profile-setting-left">
          <h2>Settings</h2>
          <p>Manage your account setting</p>
        </div>
        <div className="profile-setting-right">
          <button type="submit" className="btn btn-primary mr-3">
            Save Changes
          </button>
          <button type="submit" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
