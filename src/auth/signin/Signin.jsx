import React from "react";

import "./signin.css";

import Login from "../../assets/gif/login.gif";

export default function Signin() {
  return (
    <div id="container">
      <div className="main-container-signin">
        <div className="icon">
          <img
            src={Login}
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
            alt=""
          />
        </div>
        <div className="login">
          <h2>Login</h2>
          <p>Signin into your account</p>
        </div>
        <form action="" className="">
          <div className="form-group">
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name=""
              id=""
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name=""
              id=""
              className="form-control btn btn-primary"
              value="Login"
            />
          </div>
        </form>
        <div className="forget-password">
          <span>Forgot my password?</span>
          <a>Click Here</a>
        </div>
        <div className="form-group">
          <a href="/Signup" className="form-control btn0" value="Register">
            {" "}
            Register{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
