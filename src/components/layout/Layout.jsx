import React from "react";
import Navbar from "../navigation/Navbar";
import SIdeBar from "../sidebar/SIdeBar";
import Feed from "../middleFeed/Feed";
import Rsidebar from "../rsidebar/Rsidebar";

import "./layout.css";
export default function Layout() {
  return (
    <>
      <main className="main-container">
        <Navbar />

        <div className=" feed-and-side_control">
          <SIdeBar />
          <Feed />
          <Rsidebar />
        </div>
      </main>
    </>
  );
}
