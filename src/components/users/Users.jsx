import React, { useEffect } from "react";
import SIdeBar from "../sidebar/SIdeBar";
import "swiper/css";
import StoriesData from "../../ApiJSON/Users";
import Navbar from "../navigation/Navbar";

import { useState } from "react";

import "./users.css";
export default function Users() {
  const [filter, setFilter] = useState(StoriesData);
  const user = [...new Set(StoriesData.map((val) => val.category))];

  function filterUsers(er) {
    var category = er.target.value;
    const filterdUser = StoriesData.filter(
      (story) => story.category === category
    );
    setFilter(filterdUser);
    if (category === "all" || category === "other") {
      setFilter(StoriesData);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="row mt-5" style={{ marginTop: "32px" }}>
        <div className="col-sm-3">
          <SIdeBar />
        </div>
        <div className="col-sm-9">
          <div className="all-users-container">
            <div className="filter-users w-100">
              <h4>All Users</h4>
              <div className="d-flex align-items-center  filter-userss">
                <h6>Filter users</h6>
                <select
                  name=""
                  id=""
                  className="form-control"
                  onChange={filterUsers}
                >
                  <option value="all">All Users</option>
                  <option value="refugee">Refugee</option>
                  <option value="host">Host</option>
                  <option value="ngo">Ngo</option>
                  <option value="other">Others</option>
                </select>
              </div>
            </div>
            <div className="all-users d-flex">
              {filter.map((story) => (
                <div key={story.id}>
                  <div className="story">
                    <div className="user">
                      <img src={story.storyProfile} alt="" />
                    </div>
                    <img
                      className="story-profile"
                      src={story.story}
                      alt=""
                      style={{ minHeight: "200px", height: "170px" }}
                    />
                    <span>{story.name}</span>
                  </div>
                  <p>{story.category}</p>
                  <button
                    type="submit"
                    className="btn btn-primary mt-2 text-white w-10"
                  >
                    Connect/Chat
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
