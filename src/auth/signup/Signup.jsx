import React from "react";
import "./signup.css";
import Register from "../../assets/gif/website-builder.gif";

export default function Signup() {
  return (
    <div id="container">
      <div className="main-container-signup">
        <div className="icn">
          <img
            src={Register}
            alt=""
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
        </div>
        <div className="register">
          <h2>Create an Account</h2>
        </div>
        <form action="" className="mt-3">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 form-group mb-4">
              <input
                type="text"
                name=""
                placeholder="First Name"
                id=""
                className="form-control w-100"
              />
            </div>
            <div className="col-md-6 form-group mb-4 ">
              <input
                type="text"
                name=""
                placeholder="Last Name"
                id=""
                className="form-control w-100"
              />
            </div>
            <div className="col-md-12 form-grup mb-4">
              <input
                type="number"
                name=""
                id=""
                className="form-control w-100"
                placeholder="Phone number"
                
              />
            </div>
            <div className="col-md-6 form-group mb-4">
              <input
                type="password"
                name=""
                placeholder="Enter Password"
                id=""
                className="form-control w-100"
              />
            </div>
            <div className="col-md-6 form-group mb-4 ">
              <input
                type="password"
                name=""
                placeholder="Repeat Password"
                id=""
                className="form-control w-100"
              />
            </div>
            <div className="button-control">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary form-control"
              />
              <a href="/" className="btn btn-secondary form-control">
                {" "}
                Login{" "}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
