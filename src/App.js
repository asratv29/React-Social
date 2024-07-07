import React from "react";
import Layout from "./components/layout/Layout";
// import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
// import Signin from "./auth/signin/Signin";
// import Refugee from "./page/refugee/Refugee";
// import Signup from "./auth/signup/Signup";
// import Adminstrator from "./page/admin/Adminstrator";

import Profile from "./components/profile/Profile";

import "./index.css";
import VProfile from "./components/profile/viewprofile/VProfile";
import Chat from "./components/chat/Chat";
import Users from "./components/users/Users";
function App() {
  return (
    <div className="App">
      <Chat />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Refugee" element={<Refugee />} />
          <Route path="/Adminstrator" element={<Adminstrator />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
